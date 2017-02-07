import * as builder from 'botbuilder'
import {Optional} from "../common/Optional"
import {CollisionEvent, Next} from "./DataTypes"
import {joinNotEmpty} from "../common/ArrayUtils"
import {addCreateClaimDialog, addRootDialog} from "./CommonDialogs"
import {connector} from './Connectors'
import * as mail from "../mail"

export const bot = new builder.UniversalBot(connector)

const model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/d731f831-d1d4-4fe7-8faf-3ff6d652068e?subscription-key=feb93bc24bcc44f8834a305fecbf5383&verbose=true'
const recognizer = new builder.LuisRecognizer(model)
const luisDialog = new builder.IntentDialog({ recognizers: [recognizer] })

bot.dialog('/startCollisionDialog', [
    function (session: builder.Session, args: any) {
        const msg = Optional.ofNullable(args)
            .map(args => args.event as CollisionEvent)
            .map(event => {
                session.userData.collisionEvent = event
                return event
            })
            .map(event => event.customer)
            .map(customer => customer.individualDetails)
            .map(d => joinNotEmpty(['Hello', d.title, d.firstName, d.lastName + '.',
                'Detected accident from your car. How can I help you?'], ' '))
            .orElse('Detected accident from your car. How can I help you?')
        session.send(msg)
        session.beginDialog('/luisCollisionDialog')
    }
])

bot.dialog('/luisCollisionDialog', luisDialog)

luisDialog.matches('Cancel', [
    function (session: builder.Session, args: any) {
        session.endDialog('Have a nice day!')
    }
])

luisDialog.matches('NotifyAgent', [
    function (session: builder.Session, args: any) {
        Optional.ofNullable(session)
            .map(s => s.userData)
            .map(ud => ud.collisionEvent as CollisionEvent)
            .map(collisionEvent => () => {
                session.sendTyping()
                mail.sendCustomerNotification({
                    customerName: `${collisionEvent.customer.displayValue}`,
                    policyNumber: collisionEvent.policy.policyNumber,
                    coordinates: {
                        latitude: collisionEvent.collisionInfo.latitude, longitude: collisionEvent.collisionInfo.longitude},
                    date: collisionEvent.collisionInfo.incidentDate});
                builder.Prompts.choice(session, 'I have notified your agent. Shall I initiate a claim?', ['Yes', 'No'])
            })
            .orElse(() => {
                session.endDialog('Sorry, I could not notify your agent because of some technical error. '
                    + 'Please call your agent. Have a nice day!')
            })()
    },
    function (session: builder.Session, results: builder.IDialogResult<any>, next: Next) {
        Optional.ofNullable(results).map(r => r.response).map(r => r.entity)
            .filter(e => e === 'Yes')
            .map(e => () => session.beginDialog('/createClaimDialog'))
            .orElse(() => session.endDialog('Have a nice day!'))()
    }
])

luisDialog.matches('CreateClaim', [
    function (session: builder.Session, args: any) {
        session.beginDialog('/createClaimDialog')
    }
])

luisDialog.onDefault(builder.DialogAction.send("I can help you to notify your agent "
    + "or initiate a claim. Could you please specify what kind of assistance you need?"))

addRootDialog(bot)
addCreateClaimDialog(bot)

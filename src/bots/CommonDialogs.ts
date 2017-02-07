import * as builder from 'botbuilder'
import {Optional} from "../common/Optional"
import {CollisionEvent, Next, CreateClaimResult} from "./DataTypes"
import {createClaim} from "../eisintegration/EisServices"
import {isInexact} from "../common/Utils"
import {CreateClaimResponseSuccess} from "../eisintegration/Claim"
import * as mail from "../mail"

export function addRootDialog(bot: builder.UniversalBot): void {
    bot.dialog('/', function (session: builder.Session, args: any) {
        session.endDialog('Sorry, I only react on collision events')
    })
}

export function addCreateClaimDialog(bot: builder.UniversalBot): void {
    bot.dialog('/createClaimDialog', [
        function (session: builder.Session, args: any) {
            Optional.ofNullable(args)
                .map(a => a.reprompt)
                .filter(r => r === true)
                .map(r => () => builder.Prompts.text(session, 'To initiate a claim I need non-empty accident description. ' +
                    'Could you please describe your accident details?'))
                .orElse(() => builder.Prompts.text(session, 'Could you please describe your accident details?'))()
        },
        function (session: builder.Session, results: builder.IDialogResult<any>, next: Next) {
            Optional.ofNullable(results).map(r => r.response)
                .filter(response => typeof response === 'string')
                .filter((response: string) => response.trim().length > 0)
                .map((response: string) => () => {
                    session.dialogData.description = response
                    next()
                })
                .orElse(() => session.replaceDialog('/createClaimDialog', {reprompt: true}))()
        },
        function (session: builder.Session, results: builder.IDialogResult<any>, next: Next) {
            builder.Prompts.choice(session, 'Are you injured?', ['Yes', 'No'])
        },
        function (session: builder.Session, results: builder.IDialogResult<any>, next: Next) {
            session.dialogData.causeOfLoss = Optional.ofNullable(results).map(r => r.response).map(r => r.entity)
                .filter(e => e === 'Yes')
                .map(e => 'BODILY_INJURY')
                .orElse('COLLISION')
            next()
        },
        function (session: builder.Session, results: builder.IDialogResult<any>, next: Next) {
            session.sendTyping()
            const event: CollisionEvent = session.userData.collisionEvent
            console.log(event)
            const claimInfo = {
                customer: event.customer,
                policy: event.policy,
                description: session.dialogData.description,
                longitude: event.collisionInfo.longitude,
                latitude: event.collisionInfo.latitude,
                causeOfLoss: session.dialogData.causeOfLoss
            }
            createClaim(claimInfo, (result: CreateClaimResult) => {
                Optional.ofNullable(result)
                    .filter(result => !isInexact((result as CreateClaimResponseSuccess.RootObject).identifier))
                    .map(result => () => {
                        const reply: CreateClaimResponseSuccess.RootObject = result as CreateClaimResponseSuccess.RootObject
                        session.endDialog('I have opened claim with number ' + reply.identifier
                            + ' and sent email to your agent. Have a nice day!')
                        mail.sendClaimCreated({
                            customerName: event.customer.displayValue,
                            policyNumber: event.policy.policyNumber,
                            claimNumber: reply.identifier
                        });
                    })
                    .orElse(() => () => {
                        session.endDialog('I could not create initiate the claim because of system error, sorry. '
                            + 'Please call your agent. Have a nice day!')
                        mail.sendError({
                            customerNumber: event.customer.customerNumber,
                            policyNumber: event.policy.policyNumber,
                            coordinates: {
                                latitude: event.collisionInfo.latitude,
                                longitude: event.collisionInfo.longitude
                            },
                            date: event.collisionInfo.incidentDate
                        });
                    })()
            })
        }
    ])
}
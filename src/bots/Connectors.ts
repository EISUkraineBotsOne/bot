import * as builder from 'botbuilder'

export const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
})
export const serviceUrl = '/api/messages'
export const requestHandler = connector.listen()

//export const connector = new builder.ConsoleConnector().listen()

    
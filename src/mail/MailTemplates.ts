/* Interfaces for predefined e-mail templates */

export interface CustomerNotification {
    customerName: string,
    policyNumber: string,
    coordinates: {
        latitude: number,
        longitude: number
    },
    date: string
}

export interface ClaimCreatedNotification {
    claimNumber: string,
    policyNumber: string,
    customerName: string
}

export interface ErrorNotification {
    customerNumber: string,
    policyNumber: string,
    coordinates: {
        latitude: number,
        longitude: number
    },
    date: string
}

export function createTestHelloMsg() {
    return {
        from: process.env.MAIL_LOGIN,
        to: 'eisbot.hackathon@gmail.com',
        subject: '👻 Hack-a-thon 👻',
        text: 'Let\'s code something useful',
        html: '<b><i>Hello from EIS Bot</i></b>'
    }
}
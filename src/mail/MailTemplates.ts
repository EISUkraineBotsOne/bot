/* Predefined e-mail templates */

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
        from: 'eisbot.hackathon@gmail.com',
        to: 'eisbot.hackathon@gmail.com',
        subject: '👻 Hack-a-thon 👻',
        text: 'Let\'s code something useful',
        html: '<b><i>Hello from EIS Bot</i></b>'
    }
}

export function createCustomerNotification(notification: CustomerNotification) {
    return {
        from: process.env.MAIL_LOGIN,
        to: 'eisbot.hackathon@gmail.com',
        subject: 'Customer notification',
        text: `Customer ${notification.customerName} asked to notify you about an accident for policy #${notification.policyNumber}.
Accident data:
Latitude: ${notification.coordinates.latitude}, Longitude: ${notification.coordinates.longitude} [http://maps.google.com/?q=${notification.coordinates.latitude},${notification.coordinates.longitude}]
Date: ${notification.date}`,
        html: `Customer <b>${notification.customerName}</b> asked to notify you about an accident for policy <b>#${notification.policyNumber}</b>.
<h4>Accident data:</h4>
<b>Latitude</b>: ${notification.coordinates.latitude}, <b>Longitude</b>: ${notification.coordinates.longitude}<br/>
<a href="http://maps.google.com/?q=${notification.coordinates.latitude},${notification.coordinates.longitude}" target="_blank">View accident location</a><br/><br/>
<b>Date</b>: ${notification.date}`
    };
}

export function createClaimNotification(notification: ClaimCreatedNotification) {
    return {
        from: process.env.MAIL_LOGIN,
        to: 'eisbot.hackathon@gmail.com',
        subject: 'Claim created',
        text: `Claim #${notification.claimNumber} for policy #${notification.policyNumber} has been initiated and opened by customer ${notification.customerName} request.`,
        html: `Claim <b>#${notification.claimNumber}</b> for policy <b>#${notification.policyNumber}</b> has been initiated and opened by customer <b>${notification.customerName}</b> request.`
    }
}

export function createErrorNotification(notification: ErrorNotification) {
    return {
        from: process.env.MAIL_LOGIN,
        to: 'eisbot.hackathon@gmail.com',
        subject: 'System error occurred during conversation with customer',
        text: `Claim for customer #${notification.customerNumber} was not created due to system error. Customer policy #${notification.policyNumber}.
Accident data:
Latitude: ${notification.coordinates.latitude}, Longitude: ${notification.coordinates.longitude} [http://maps.google.com/?q=${notification.coordinates.latitude},${notification.coordinates.longitude}]
Date: ${notification.date}`,
        html: `Claim for customer <b>#${notification.customerNumber}</b> was not created due to system error.<br/>
Customer policy <b>#${notification.policyNumber}</b>.
<h4>Accident data:</h4>
<b>Latitude</b>: ${notification.coordinates.latitude}, <b>Longitude</b>: ${notification.coordinates.longitude}<br/>
<a href="http://maps.google.com/?q=${notification.coordinates.latitude},${notification.coordinates.longitude}" target="_blank">View accident location</a><br/><br/>
<b>Date</b>: ${notification.date}`
    }
}
/* Service for sending e-mails via gmail */
import * as mt from "./MailTemplates"

const nodemailer = require('nodemailer');

interface MailOptions {
    from : string,
    to: string,
    subject: string,
    text: string,
    html?: string
}

let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_LOGIN,
            pass: process.env.MAIL_PWD
        }
    }
);

export function sendMail(mailParams: MailOptions) {

    transport.sendMail(mailParams, function(error, info) {
        if(error) {
            console.error(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

export function sendCustomerNotification(data: mt.CustomerNotification) {
    sendMail(mt.createCustomerNotification(data));
}

export function sendClaimCreated(data : mt.ClaimCreatedNotification) {
    sendMail(mt.createClaimNotification(data));
}

export function sendError(data : mt.ErrorNotification) {
    sendMail(mt.createErrorNotification(data));
}
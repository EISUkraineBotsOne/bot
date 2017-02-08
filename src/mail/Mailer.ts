/* Service for sending e-mails via gmail */
let EmailTemplate = require('email-templates').EmailTemplate;
let path = require('path');

import * as mt from "./MailTemplates"

const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_LOGIN,
            pass: process.env.MAIL_PWD
        }
    }
);

export function sendCustomerNotification(data: mt.CustomerNotification) {
    let template = new EmailTemplate(path.join(__dirname, 'templates', 'customer-notification'));
    template.render({data}, createSendMail('Customer notification'))
}

export function sendClaimCreated(data : mt.ClaimCreatedNotification) {
    let template = new EmailTemplate(path.join(__dirname, 'templates', 'claim-notification'));
    template.render({data}, createSendMail('Claim created'));
}

export function sendError(data : mt.ErrorNotification) {
    let template = new EmailTemplate(path.join(__dirname, 'templates', 'error-notification'));
    template.render({data}, createSendMail('System error occurred during conversation with customer'));
}

function createSendMail(subject: string): (err, results : {text?:string, html?:string}) => void {
    return (err, results : {text?:string, html?:string}) => {
        if (err) {
            console.error(err);
        }

        transport.sendMail({
            from: process.env.MAIL_LOGIN,
            to: 'eisbot.hackathon@gmail.com',
            subject: subject,
            text: results.text,
            html: results.html
        }, postResponse)
    }
}

function postResponse (error, info) {
    if(error) {
        console.error(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
}
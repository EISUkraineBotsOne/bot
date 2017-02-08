import * as restify from 'restify'
import * as eis from '../eisintegration/EisServices'
import {Optional} from '../common/Optional'
import {startCollisionDialog} from '../bots/BotService'

import {GetPolicyResponse} from '../eisintegration/Policy'
import {GetCustomerResponse} from '../eisintegration/Customer'
import {CollisionInfo} from "../bots/DataTypes";
import {unescape} from "querystring";

export const serviceUrl = '/collisions/detect';

function extractCollisionInfoFromRestify(req:restify.Request) : CollisionInfo{
    const poundChar = '#';
    let collInfo : CollisionInfo = {
        policyNumber : '',
        longitude : 0,
        latitude : 0,
        acceleration : 0,
        incidentDate : ''
    };

    console.log('Triggered sms accident notification with: ', req.body);

    req.body.split('&').forEach(function (item) {
        if (item.includes("Body")){
            console.log(item);
            let paramsArray = unescape(item.split('=')[1]).split(poundChar);
            collInfo.policyNumber = typeof paramsArray[1] !== ('undefined' || null)? paramsArray[1] : '';
            collInfo.latitude = typeof paramsArray[2] !== ('undefined' || '' || null) ? parseFloat(paramsArray[2]) : 0;
            collInfo.longitude = typeof paramsArray[3] !== ('undefined' || '' || null) ? parseFloat(paramsArray[3]) : 0;
            collInfo.acceleration = typeof paramsArray[4] !== ('undefined' || '' || null) ? parseFloat(paramsArray[4]) : 0;
            collInfo.incidentDate = typeof paramsArray[5] !== ('undefined' || null) ? paramsArray[5].replace(/\+/g,' ') : '';
        }
    });
    if (collInfo.policyNumber == '' || collInfo.latitude == 0 || collInfo.longitude ==0){
        console.error('Collision information is not parsed for sms: ', req.body);
    }
    return collInfo;
}


export function requestHandler(req: restify.Request, res: restify.Response, next: restify.Next): any {
    const collInfo: CollisionInfo = extractCollisionInfoFromRestify(req);
    console.log('Parsed collision info: ', collInfo);
    eis.getPolicyByNumber(collInfo.policyNumber, (policReply: Optional<GetPolicyResponse.RootObject>) =>
        policReply.map(policy => () => eis.getCustomerByNumber(policy.customerNumber,
            (customerReply: Optional<GetCustomerResponse.RootObject>) =>
                customerReply.map(customer => () => startCollisionDialog({
                    customer: customer,
                    policy: policy,
                    collisionInfo: collInfo
                })).orElse(() => console.error('Failed to receive customer by number', policReply.get().customerNumber))()
        )).orElse(() => console.error('returned null'))())
    res.send(200, {result: 'The request is being proceed...'});
}





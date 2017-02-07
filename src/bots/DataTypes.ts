import {GetCustomerResponse} from "../eisintegration/Customer"
import {GetPolicyResponse} from "../eisintegration/Policy"
import * as builder from 'botbuilder'
import {CreateClaimResponseSuccess, CreateClaimResponseError} from "../eisintegration/Claim"

export interface CollisionInfo {
    policyNumber : string,
    longitude: number,
    latitude: number,
    acceleration : number,
    incidentDate : string

}

export interface CollisionEvent {
    customer: GetCustomerResponse.RootObject,
    policy: GetPolicyResponse.RootObject,
    collisionInfo : CollisionInfo
}

export type Next = (results?: builder.IDialogResult<any>) => void
export type CreateClaimResult = CreateClaimResponseSuccess.RootObject | CreateClaimResponseError.RootObject

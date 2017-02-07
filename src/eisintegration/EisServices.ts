import {CreateClaimRequest, CreateClaimResponseSuccess, CreateClaimResponseError} from './Claim'
import {GetPolicyResponse} from './Policy'
import {GetCustomerResponse} from './Customer'
import {Optional} from '../common/Optional'
import * as restify from 'restify'
import * as moment from 'moment'


export function getPolicyByNumber(policyNumber: string, callback: (optional: Optional<GetPolicyResponse.RootObject>) => void): void {

    console.log('Trying to get polucy data by number:' + policyNumber);
    let m = moment(new Date());
    let getPolicyUrl = process.env.EIS_URL_GET_POLICY+policyNumber+'?transactionEffectiveDate=' + m.format('YYYY-MM-DD');
  
    var client = restify.createJsonClient({
          url: process.env.EIS_URL_BASE
    });
    client.basicAuth(process.env.EIS_USER, process.env.EIS_PASSWORD);

    client.get(getPolicyUrl, function (err, req, res, policyObject) {
        
        var resultObj = null;

        if (err != null){
            console.error('Failed to get policy date for policy number ' + policyNumber + ', http code: ' + res.statusCode);
            console.error(err.message);
      
        } else {
            resultObj = policyObject;
        }
        callback(Optional.ofNullable(resultObj));
    });  
   
}


export function getCustomerByNumber(customerNumber: string, callback: (optional: Optional<GetCustomerResponse.RootObject>) => void): void {
    console.log('Customer #' + customerNumber);
    var client = restify.createJsonClient({
          url: process.env.EIS_URL_BASE,    
    });
    client.basicAuth(process.env.EIS_USER, process.env.EIS_PASSWORD);

    return client.get(process.env.EIS_URL_GET_CUSTOMER.replace('${customerNumber}', customerNumber),
             function (err, req, res, customer) {                 
            
         if (err == null) {
              console.log('Found a customer #: %j', customerNumber);
         } else {             
             console.error(err);
         }
         callback(Optional.ofNullable(customer));
    });      
}

export interface CreateClaimInfo {
    customer: GetCustomerResponse.RootObject,
    policy: GetPolicyResponse.RootObject,
    description: string,
    longitude: number,
    latitude: number,
    causeOfLoss: 'COLLISION' | 'BODILY_INJURY'
}

export function createClaim(info: CreateClaimInfo,
                            callback: (result: CreateClaimResponseSuccess.RootObject | CreateClaimResponseError.RootObject) => void): void{

    console.log('Creating claim for customer #%j', info.customer.customerNumber);
    let req = {} as CreateClaimRequest.RootObject;
    let claim = {} as CreateClaimRequest.Claim;
    claim.customerNumber = info.customer.customerNumber;
    claim.policyNumber = info.policy.policyNumber;
    claim.lossDesc = info.description;
    claim.lossLocationDesc = info.description;
    claim.lossDt = new Date();
    claim.causeOfLossCd = info.causeOfLoss;
    claim.reportedDt = new Date();
    claim.productCd = 'CLAIM_AU';
    claim.policyProductCd = 'AU';
    claim.lineOfBusinessCd = info.policy.productCode;
    req.claim = claim;

    let addr = {} as CreateClaimRequest.Address;
    let address: GetCustomerResponse.Address = info.customer.addresses[0];
    addr.addressLine1 = address.addressLine1;
    addr.addressLine2 = address.addressLine2;
    addr.addressLine3 = address.addressLine3;
    addr.city = address.city;
    addr.stateProvCd = address.stateProvCd;
    addr.postalCode = address.postalCode;
    addr.countryCd = address.countryCd;
    addr.county = address.county;
    addr.longitude = info.longitude;
    addr.latitude = info.latitude;
    claim.addresses = [addr];
    

    var client = restify.createJsonClient({
          url: process.env.EIS_URL_BASE,    
    });
    client.basicAuth(process.env.EIS_USER, process.env.EIS_PASSWORD);

    return client.post(process.env.EIS_URL_CREATE_CLAIM, req,
             function (err, req, res, claim) {                             
                 if (err == null) {
                    openClaim(claim.identifier, callback);                    
                 } else {
                    console.error(err);
                    callback(err);
                 }                     
    });      
   
}

function openClaim(identifier: string,
                   callback: (result: CreateClaimResponseSuccess.RootObject | CreateClaimResponseError.RootObject) => void) {
    var client = restify.createJsonClient({
          url: process.env.EIS_URL_BASE,    
    });
    client.basicAuth(process.env.EIS_USER, process.env.EIS_PASSWORD);

    return client.post(process.env.EIS_URL_OPEN_CLAIM.replace('${claimNumber}', identifier),
             function (err, req, res, customer) {                 
            
         if (err == null) {
              console.log('The claim was successfully opened #: %j', identifier);
              let res = {} as CreateClaimResponseSuccess.RootObject;
              res.identifier = identifier;
              callback(res);
         } else {
             console.error(err);
             callback(err);
         }         
    });          
}
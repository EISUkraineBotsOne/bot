export namespace GetPolicyResponse {

    export interface Address {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        country: string;
        county: string;
        postalCode: string;
        stateProv: string;
    }

    export interface Premium {
        premiumCd: string;
        premiumTypeCd: string;
        periodAmount: number;
        actualAmount: number;
        changeAmount: number;
        factor: number;
    }

    export interface Value {
    }

    export interface Limit {
        value: Value;
        appliesToCd: string;
        typeCd: string;
    }

    export interface Value2 {
    }

    export interface Deductible {
        value: Value2;
        appliesToCd: string;
        typeCd: string;
    }

    export interface Value3 {
    }

    export interface LimitsInfo {
        value: Value3;
        appliesToCd: string;
        typeCd: string;
    }

    export interface Value4 {
    }

    export interface DeductiblesInfo {
        value: Value4;
        appliesToCd: string;
        typeCd: string;
    }

    export interface Coverage {
        oid: string;
        coverageCd: string;
        subCoverageCd: string;
        name: string;
        limitAmount: number;
        additionalLimitAmount: number;
        deductibleAmount: number;
        premiums: Premium[];
        limits: Limit[];
        deductibles: Deductible[];
        limitsInfo: LimitsInfo[];
        deductiblesInfo: DeductiblesInfo[];
    }

    export interface Address2 {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        country: string;
        county: string;
        postalCode: string;
        stateProv: string;
    }

    export interface Email {
        emailTypeCd: string;
        preferredInd: boolean;
        email: string;
    }

    export interface Phone {
        phone: string;
        preferredInd: boolean;
        phoneTypeCd: string;
    }

    export interface Address3 {
        addressTypeCd: string;
        preferredInd: boolean;
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        stateProvCd: string;
        county: string;
        countryCd: string;
        postalCode: string;
        longitude: number;
        latitude: number;
    }

    export interface AssignedParty {
        oid: string;
        type: string;
        firstName: string;
        middleName: string;
        lastName: string;
        address: Address2;
        dateOfBirth: Date;
        displayValue: string;
        namePrefix: string;
        suffix: string;
        otherName: string;
        emails: Email[];
        phones: Phone[];
        addresses: Address3[];
        maritalStatusCd: string;
        genderCd: string;
    }

    export interface RiskItem {
        type: string;
        oid: string;
        description: string;
        address: Address;
        coverages: Coverage[];
        assignedParties: AssignedParty[];
    }

    export interface Address4 {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        country: string;
        county: string;
        postalCode: string;
        stateProv: string;
    }

    export interface Email2 {
        emailTypeCd: string;
        preferredInd: boolean;
        email: string;
    }

    export interface Phone2 {
        phone: string;
        preferredInd: boolean;
        phoneTypeCd: string;
    }

    export interface Address5 {
        addressTypeCd: string;
        preferredInd: boolean;
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        stateProvCd: string;
        county: string;
        countryCd: string;
        postalCode: string;
        longitude: number;
        latitude: number;
    }

    export interface Party {
        oid: string;
        type: string;
        firstName: string;
        middleName: string;
        lastName: string;
        address: Address4;
        dateOfBirth: Date;
        displayValue: string;
        namePrefix: string;
        suffix: string;
        otherName: string;
        emails: Email2[];
        phones: Phone2[];
        addresses: Address5[];
        maritalStatusCd: string;
        genderCd: string;
    }

    export interface Premium2 {
        premiumCd: string;
        premiumTypeCd: string;
        periodAmount: number;
        actualAmount: number;
        changeAmount: number;
        factor: number;
    }

    export interface Value5 {
    }

    export interface Limit2 {
        value: Value5;
        appliesToCd: string;
        typeCd: string;
    }

    export interface Value6 {
    }

    export interface Deductible2 {
        value: Value6;
        appliesToCd: string;
        typeCd: string;
    }

    export interface Value7 {
    }

    export interface LimitsInfo2 {
        value: Value7;
        appliesToCd: string;
        typeCd: string;
    }

    export interface Value8 {
    }

    export interface DeductiblesInfo2 {
        value: Value8;
        appliesToCd: string;
        typeCd: string;
    }

    export interface Coverage2 {
        oid: string;
        coverageCd: string;
        subCoverageCd: string;
        name: string;
        limitAmount: number;
        additionalLimitAmount: number;
        deductibleAmount: number;
        premiums: Premium2[];
        limits: Limit2[];
        deductibles: Deductible2[];
        limitsInfo: LimitsInfo2[];
        deductiblesInfo: DeductiblesInfo2[];
    }

    export interface Address6 {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        country: string;
        county: string;
        postalCode: string;
        stateProv: string;
    }

    export interface InsuredAndPrincipal {
        firstName: string;
        middleName: string;
        lastName: string;
        address: Address6;
        partyOid: string;
        principalRoleCd: string;
    }

    export interface RootObject {
        policyNumber: string;
        customerNumber: string;
        effectiveDate: Date;
        expirationDate: Date;
        transactionEffectiveDate: Date;
        productCode: string;
        productVersion: number;
        lob: string;
        description: string;
        expired: boolean;
        totalPremium: number;
        currencyCode: string;
        renewable: boolean;
        transactionType: string;
        revisionNumber: number;
        riskItems: RiskItem[];
        parties: Party[];
        transactionTypeCd: string;
        lobCd: string;
        policyStatusCd: string;
        instanceName: string;
        rootEntityType: string;
        coverages: Coverage2[];
        insuredAndPrincipals: InsuredAndPrincipal[];
    }

}


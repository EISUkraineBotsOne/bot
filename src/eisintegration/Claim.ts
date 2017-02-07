export namespace CreateClaimRequest {

    export interface Address {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        county: string;
        countryCd: string;
        postalCode: string;
        stateProvCd: string;
        latitude: number;
        longitude: number;
        componentName: string;
        addressTypeCd: string;
        displayValue: string;
    }

    export interface Extension {
    }

    export interface Email {
        email: string;
    }

    export interface Phone {
        phoneTypeCd: string;
        phone: string;
    }

    export interface Extension2 {
    }

    export interface Role {
        claimsPartyRoleCd: string;
        claimsPartySubRoleCd: string;
        extension: Extension2;
    }

    export interface Party {
        namePrefix: string;
        firstName: string;
        middleName: string;
        lastName: string;
        otherName: string;
        nameTypeCd: string;
        oid: string;
        contactPreferenceCd: string;
        displayValue: string;
        relationShipToInsuredCd: string;
        addresses: Address[];
        componentName: string;
        extension: Extension;
        emails: Email[];
        phones: Phone[];
        roles: Role[];
        birthDt: Date;
        partyNumber: string;
        companyNumber: string;
        suffix: string;
    }

    export interface Address2 {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        county: string;
        countryCd: string;
        postalCode: string;
        stateProvCd: string;
        latitude: number;
        longitude: number;
        componentName: string;
        addressTypeCd: string;
        displayValue: string;
    }

    export interface Currency {
        currencyCode: string;
        symbol: string;
        defaultFractionDigits: number;
        numericCode: number;
        displayName: string;
    }

    export interface TotalIncurred {
        amount: number;
        currencyCd: string;
        doubleAmount: number;
        currency: Currency;
        displayValue: string;
    }

    export interface FileOwner {
        typeCd: string;
        refId: string;
        displayValue: string;
    }

    export interface Currency2 {
        currencyCode: string;
        symbol: string;
        defaultFractionDigits: number;
        numericCode: number;
        displayName: string;
    }

    export interface DeductibleAmount {
        amount: number;
        currencyCd: string;
        doubleAmount: number;
        currency: Currency2;
        displayValue: string;
    }

    export interface Currency3 {
        currencyCode: string;
        symbol: string;
        defaultFractionDigits: number;
        numericCode: number;
        displayName: string;
    }

    export interface LimitAmount {
        amount: number;
        currencyCd: string;
        doubleAmount: number;
        currency: Currency3;
        displayValue: string;
    }

    export interface CoverageDetail {
        limitLevel: string;
        limitAmount: LimitAmount;
        componentName: string;
    }

    export interface Coverage {
        oid: string;
        coverageCd: string;
        componentName: string;
        deductibleAmount: DeductibleAmount;
        designatedCoverageInd: boolean;
        coverageDetails: CoverageDetail[];
    }

    export interface Currency4 {
        currencyCode: string;
        symbol: string;
        defaultFractionDigits: number;
        numericCode: number;
        displayName: string;
    }

    export interface DeductibleAmount2 {
        amount: number;
        currencyCd: string;
        doubleAmount: number;
        currency: Currency4;
        displayValue: string;
    }

    export interface Currency5 {
        currencyCode: string;
        symbol: string;
        defaultFractionDigits: number;
        numericCode: number;
        displayName: string;
    }

    export interface LimitAmount2 {
        amount: number;
        currencyCd: string;
        doubleAmount: number;
        currency: Currency5;
        displayValue: string;
    }

    export interface CoverageDetail2 {
        limitLevel: string;
        limitAmount: LimitAmount2;
        componentName: string;
    }

    export interface Coverage2 {
        oid: string;
        coverageCd: string;
        componentName: string;
        deductibleAmount: DeductibleAmount2;
        designatedCoverageInd: boolean;
        coverageDetails: CoverageDetail2[];
    }

    export interface ScheduledItem2 {
    }

    export interface Address3 {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        county: string;
        countryCd: string;
        postalCode: string;
        stateProvCd: string;
        latitude: number;
        longitude: number;
        componentName: string;
        addressTypeCd: string;
        displayValue: string;
    }

    export interface Extension3 {
    }

    export interface Email2 {
        email: string;
    }

    export interface Phone2 {
        phoneTypeCd: string;
        phone: string;
    }

    export interface Extension4 {
    }

    export interface Role2 {
        claimsPartyRoleCd: string;
        claimsPartySubRoleCd: string;
        extension: Extension4;
    }

    export interface Party2 {
        namePrefix: string;
        firstName: string;
        middleName: string;
        lastName: string;
        otherName: string;
        nameTypeCd: string;
        oid: string;
        contactPreferenceCd: string;
        displayValue: string;
        relationShipToInsuredCd: string;
        addresses: Address3[];
        componentName: string;
        extension: Extension3;
        emails: Email2[];
        phones: Phone2[];
        roles: Role2[];
        birthDt: Date;
        partyNumber: string;
        companyNumber: string;
        suffix: string;
    }

    export interface ScheduledItem {
        oid: string;
        displayValue: string;
        associatedInsurableRiskOid: string;
        componentName: string;
        coverages: Coverage2[];
        scheduledItems: ScheduledItem2[];
        party: Party2;
    }

    export interface Address4 {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        county: string;
        countryCd: string;
        postalCode: string;
        stateProvCd: string;
        latitude: number;
        longitude: number;
        componentName: string;
        addressTypeCd: string;
        displayValue: string;
    }

    export interface Extension5 {
    }

    export interface Email3 {
        email: string;
    }

    export interface Phone3 {
        phoneTypeCd: string;
        phone: string;
    }

    export interface Extension6 {
    }

    export interface Role3 {
        claimsPartyRoleCd: string;
        claimsPartySubRoleCd: string;
        extension: Extension6;
    }

    export interface Party3 {
        namePrefix: string;
        firstName: string;
        middleName: string;
        lastName: string;
        otherName: string;
        nameTypeCd: string;
        oid: string;
        contactPreferenceCd: string;
        displayValue: string;
        relationShipToInsuredCd: string;
        addresses: Address4[];
        componentName: string;
        extension: Extension5;
        emails: Email3[];
        phones: Phone3[];
        roles: Role3[];
        birthDt: Date;
        partyNumber: string;
        companyNumber: string;
        suffix: string;
    }

    export interface RiskItem {
        oid: string;
        displayValue: string;
        associatedInsurableRiskOid: string;
        componentName: string;
        coverages: Coverage[];
        scheduledItems: ScheduledItem[];
        party: Party3;
        reportedRiskItemName: string;
    }

    export interface Address5 {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        county: string;
        countryCd: string;
        postalCode: string;
        stateProvCd: string;
        latitude: number;
        longitude: number;
        componentName: string;
        addressTypeCd: string;
        displayValue: string;
    }

    export interface Extension7 {
    }

    export interface Email4 {
        email: string;
    }

    export interface Phone4 {
        phoneTypeCd: string;
        phone: string;
    }

    export interface Extension8 {
    }

    export interface Role4 {
        claimsPartyRoleCd: string;
        claimsPartySubRoleCd: string;
        extension: Extension8;
    }

    export interface Party4 {
        namePrefix: string;
        firstName: string;
        middleName: string;
        lastName: string;
        otherName: string;
        nameTypeCd: string;
        oid: string;
        contactPreferenceCd: string;
        displayValue: string;
        relationShipToInsuredCd: string;
        addresses: Address5[];
        componentName: string;
        extension: Extension7;
        emails: Email4[];
        phones: Phone4[];
        roles: Role4[];
        birthDt: Date;
        partyNumber: string;
        companyNumber: string;
        suffix: string;
    }

    export interface Policy {
        termEffectiveDate: Date;
        termExpirationDate: Date;
        inceptionDate: Date;
        componentName: string;
        riskItems: RiskItem[];
        parties: Party4[];
    }

    export interface Extension9 {
    }

    export interface Claim {
        claimNumber: string;
        additionalClaimNumber: string;
        claimStatusCd: string;
        lossDt: Date;
        lossDesc: string;
        customerNumber: string;
        reportedDt: Date;
        policyNumber: string;
        policyProductCd: string;
        lineOfBusinessCd: string;
        productVersion: number;
        causeOfLossCd: string;
        lossLocationDesc: string;
        parties: Party[];
        addresses: Address2[];
        componentName: string;
        policyProductVersion: number;
        totalIncurred: TotalIncurred;
        fileOwner: FileOwner;
        policy: Policy;
        claimsPolicyStatus: string;
        extension: Extension9;
        productCd: string;
    }

    export interface Address6 {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        county: string;
        countryCd: string;
        postalCode: string;
        stateProvCd: string;
        latitude: number;
        longitude: number;
        componentName: string;
        addressTypeCd: string;
        displayValue: string;
    }

    export interface Extension10 {
    }

    export interface Email5 {
        email: string;
    }

    export interface Phone5 {
        phoneTypeCd: string;
        phone: string;
    }

    export interface Extension11 {
    }

    export interface Role5 {
        claimsPartyRoleCd: string;
        claimsPartySubRoleCd: string;
        extension: Extension11;
    }

    export interface Party5 {
        namePrefix: string;
        firstName: string;
        middleName: string;
        lastName: string;
        otherName: string;
        nameTypeCd: string;
        oid: string;
        contactPreferenceCd: string;
        displayValue: string;
        relationShipToInsuredCd: string;
        addresses: Address6[];
        componentName: string;
        extension: Extension10;
        emails: Email5[];
        phones: Phone5[];
        roles: Role5[];
        birthDt: Date;
        partyNumber: string;
        companyNumber: string;
        suffix: string;
    }

    export interface AuthorityReport {
        reportNumber: string;
        authorityType: string;
        parties: Party5[];
        componentName: string;
    }

    export interface Address7 {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        county: string;
        countryCd: string;
        postalCode: string;
        stateProvCd: string;
        latitude: number;
        longitude: number;
        componentName: string;
        addressTypeCd: string;
        displayValue: string;
    }

    export interface Extension12 {
    }

    export interface Email6 {
        email: string;
    }

    export interface Phone6 {
        phoneTypeCd: string;
        phone: string;
    }

    export interface Extension13 {
    }

    export interface Role6 {
        claimsPartyRoleCd: string;
        claimsPartySubRoleCd: string;
        extension: Extension13;
    }

    export interface Party6 {
        namePrefix: string;
        firstName: string;
        middleName: string;
        lastName: string;
        otherName: string;
        nameTypeCd: string;
        oid: string;
        contactPreferenceCd: string;
        displayValue: string;
        relationShipToInsuredCd: string;
        addresses: Address7[];
        componentName: string;
        extension: Extension12;
        emails: Email6[];
        phones: Phone6[];
        roles: Role6[];
        birthDt: Date;
        partyNumber: string;
        companyNumber: string;
        suffix: string;
    }

    export interface Address8 {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        county: string;
        countryCd: string;
        postalCode: string;
        stateProvCd: string;
        latitude: number;
        longitude: number;
        componentName: string;
        addressTypeCd: string;
        displayValue: string;
    }

    export interface Extension14 {
    }

    export interface Loss {
        associatedRiskItemOid: string;
        riskItemOid: string;
        damageDesc: string;
        partyType: string;
        parties: Party6[];
        addresses: Address8[];
        componentName: string;
        extension: Extension14;
        oid: string;
        lossDesc: string;
    }

    export interface Claimant {
        typeCd: string;
        refId: string;
        displayValue: string;
    }

    export interface AssociatedInsurableRisk {
        oid: string;
        displayValue: string;
    }

    export interface Coverage3 {
        oid: string;
        coverageCd: string;
    }

    export interface Damage2 {
        damageNumber: string;
        displayValue: string;
    }

    export interface Currency6 {
        currencyCode: string;
        symbol: string;
        defaultFractionDigits: number;
        numericCode: number;
        displayName: string;
    }

    export interface FeatureIncurred {
        amount: number;
        currencyCd: string;
        doubleAmount: number;
        currency: Currency6;
        displayValue: string;
    }

    export interface FeatureOwner {
        typeCd: string;
        refId: string;
        displayValue: string;
    }

    export interface Currency7 {
        currencyCode: string;
        symbol: string;
        defaultFractionDigits: number;
        numericCode: number;
        displayName: string;
    }

    export interface Amount {
        amount: number;
        currencyCd: string;
        doubleAmount: number;
        currency: Currency7;
        displayValue: string;
    }

    export interface Reserve {
        amount: Amount;
        typeCd: string;
    }

    export interface Extension15 {
    }

    export interface Feature {
        coverageOid: string;
        coverageDesc: string;
        associatedInsurableRiskOid: string;
        oid: string;
        featureNumber: string;
        featureId: string;
        claimant: Claimant;
        associatedInsurableRisk: AssociatedInsurableRisk;
        coverage: Coverage3;
        damage: Damage2;
        featureIncurred: FeatureIncurred;
        statusCd: string;
        featureOwner: FeatureOwner;
        reserves: Reserve[];
        extension: Extension15;
    }

    export interface Damage {
        damageNumber: string;
        displayValue: string;
        damageType: string;
        loss: Loss;
        componentName: string;
        oid: string;
        features: Feature[];
    }

    export interface Address9 {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        county: string;
        countryCd: string;
        postalCode: string;
        stateProvCd: string;
        latitude: number;
        longitude: number;
        componentName: string;
        addressTypeCd: string;
        displayValue: string;
    }

    export interface Extension16 {
    }

    export interface Email7 {
        email: string;
    }

    export interface Phone7 {
        phoneTypeCd: string;
        phone: string;
    }

    export interface Extension17 {
    }

    export interface Role7 {
        claimsPartyRoleCd: string;
        claimsPartySubRoleCd: string;
        extension: Extension17;
    }

    export interface Profile {
        namePrefix: string;
        firstName: string;
        middleName: string;
        lastName: string;
        otherName: string;
        nameTypeCd: string;
        oid: string;
        contactPreferenceCd: string;
        displayValue: string;
        relationShipToInsuredCd: string;
        addresses: Address9[];
        componentName: string;
        extension: Extension16;
        emails: Email7[];
        phones: Phone7[];
        roles: Role7[];
        birthDt: Date;
        partyNumber: string;
        companyNumber: string;
        suffix: string;
    }

    export interface Address10 {
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        county: string;
        countryCd: string;
        postalCode: string;
        stateProvCd: string;
        latitude: number;
        longitude: number;
        componentName: string;
        addressTypeCd: string;
        displayValue: string;
    }

    export interface Extension18 {
    }

    export interface Email8 {
        email: string;
    }

    export interface Phone8 {
        phoneTypeCd: string;
        phone: string;
    }

    export interface Extension19 {
    }

    export interface Role8 {
        claimsPartyRoleCd: string;
        claimsPartySubRoleCd: string;
        extension: Extension19;
    }

    export interface Contact {
        namePrefix: string;
        firstName: string;
        middleName: string;
        lastName: string;
        otherName: string;
        nameTypeCd: string;
        oid: string;
        contactPreferenceCd: string;
        displayValue: string;
        relationShipToInsuredCd: string;
        addresses: Address10[];
        componentName: string;
        extension: Extension18;
        emails: Email8[];
        phones: Phone8[];
        roles: Role8[];
        birthDt: Date;
        partyNumber: string;
        companyNumber: string;
        suffix: string;
    }

    export interface Vendor {
        ratingCd: string;
        statusCd: string;
        profile: Profile;
        contacts: Contact[];
    }

    export interface ServiceRequest {
        oid: string;
        damageOid: string;
        serviceCd: string;
        coverageOid: string;
        vendors: Vendor[];
    }

    export interface RootObject {
        claim: Claim;
        authorityReports: AuthorityReport[];
        damages: Damage[];
        serviceRequests: ServiceRequest[];
    }

}

export namespace CreateClaimResponseSuccess {

    export interface Metadata {
        componentInstanceName: string;
        producerComponentName: string;
        producerComponentVersion: number;
        connectedToInstanceName: string;
        instanceName: string;
    }

    export interface RootObject {
        identifier: string;
        metadata: Metadata;
    }

}


export namespace CreateClaimResponseError {

    export interface Error {
    }

    export interface RootObject {
        errorCode: string;
        message: string;
        field: string;
        stackTrace: string;
        errors: Error[];
    }

}


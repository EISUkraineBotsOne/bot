export namespace GetCustomerResponse {

    export interface IndividualDetails {
        firstName: string;
        lastName: string;
        middleName: string;
        title: string;
        suffix: string;
        birthDate: Date;
        genderCd: string;
        maritalStatusCd: string;
        taxId: string;
        occupationCd: string;
        occupationDescription: string;
        tobaccoCd: string;
    }

    export interface BusinessDetails {
        legalName: string;
        businessType: string;
        dbaName: string;
        sicCode: string;
        naicsCode: string;
        legalId: string;
        dateStarted: Date;
        taxExemptInd: boolean;
        groupSponsorInd: boolean;
        numberOfContinuous: number;
        numberOfEmployees: number;
        entityType: string[];
        useAsReference: boolean;
        referenceCategories: string[];
        referenceComment: string;
    }

    export interface Address {
        id: number;
        contactMethod: string;
        contactType: string;
        preferredInd: boolean;
        doNotSolicitInd: boolean;
        comment: string;
        temporary: boolean;
        effectiveFrom: Date;
        effectiveTo: Date;
        duration: number;
        stateProvCd: string;
        postalCode: string;
        countryCd: string;
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        county: string;
    }

    export interface Chat {
        id: number;
        contactMethod: string;
        contactType: string;
        preferredInd: boolean;
        doNotSolicitInd: boolean;
        comment: string;
        chatId: string;
    }

    export interface Email {
        id: number;
        contactMethod: string;
        contactType: string;
        preferredInd: boolean;
        doNotSolicitInd: boolean;
        comment: string;
        emailId: string;
    }

    export interface Phone {
        id: number;
        contactMethod: string;
        contactType: string;
        preferredInd: boolean;
        doNotSolicitInd: boolean;
        comment: string;
        temporary: boolean;
        effectiveFrom: Date;
        effectiveTo: Date;
        duration: number;
        phoneNumber: string;
    }

    export interface SocialNet {
        id: number;
        contactMethod: string;
        contactType: string;
        preferredInd: boolean;
        doNotSolicitInd: boolean;
        comment: string;
        socialNetId: string;
    }

    export interface WebAddress {
        id: number;
        contactMethod: string;
        contactType: string;
        preferredInd: boolean;
        doNotSolicitInd: boolean;
        comment: string;
        webAddress: string;
    }

    export interface Agency {
        agencyCode: string;
    }

    export interface RootObject {
        customerNumber: string;
        customerType: string;
        customerStatus: string;
        sourceCd: string;
        ratingCd: string;
        displayValue: string;
        preferredSpokenLanguageCd: string;
        preferredWrittenLanguageCd: string;
        paperless: boolean;
        segments: string[];
        individualDetails: IndividualDetails;
        businessDetails: BusinessDetails;
        preferredContactMethod: string;
        addresses: Address[];
        chats: Chat[];
        emails: Email[];
        phones: Phone[];
        socialNets: SocialNet[];
        webAddresses: WebAddress[];
        agencies: Agency[];
    }

}


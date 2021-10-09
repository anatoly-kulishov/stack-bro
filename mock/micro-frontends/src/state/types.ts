export enum UserStepEnum {
    INFORMED_CONSENT = 'INFORMED_CONSENT',
    SCREENING = 'SCREENING',
    ACCOUNT_SETUP = 'ACCOUNT_SETUP',
    IDENTITY_AUTHENTICATION = 'IDENTITY_AUTHENTICATION',
    SCHEDULING_PREFERENCES = 'SCHEDULING_PREFERENCES',
    STUDY_DATES_APPROVAL = 'STUDY_DATES_APPROVAL',
    DEVICE_ARRIVAL = 'DEVICE_ARRIVAL',
    SETTING_UP = 'SETTING_UP',
    PARTICIPATING_IN_THE_STUDY = 'PARTICIPATING_IN_THE_STUDY',
    END_OF_STUDY_SURVEY = 'END_OF_STUDY_SURVEY',
    SCREENING_FAILED = 'SCREENING_FAILED',
    SCREENING_FAILED_YES_FUTURE = 'SCREENING_FAILED_YES_FUTURE',
    SCREENING_FAILED_NO_FUTURE = 'SCREENING_FAILED_NO_FUTURE',
    SCREENING_WAIT_CONFIRM = 'SCREENING_WAIT_CONFIRM'
}

export interface CognitoUserAttributes {
    email: string;
    email_verified: boolean;
    name: string;
    phone_number: string;
    phone_number_verified: boolean;
    profile: string;
    sub: string;
}

export interface CognitoUser {
    attributes: CognitoUserAttributes
}

export interface IUser extends CognitoUserAttributes {
    step: UserStepEnum
}

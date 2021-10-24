import {IAction} from "redux-micro-frontends";
import {UserStepEnum} from "./state/types";

export enum GlobalStoreFolders {
    AccountSetup = 'AccountSetup',
    SchedulingPreferences = 'SchedulingPreferences',
    Screening = 'Screening',
    PreScreening = 'PreScreening',
    InformedConsent = 'InformedConsent',
    API = 'API',
    ChatWidget = 'ChatWidget',
    StudyUi = 'StudyUi',
    IdentityAuth = 'IdentityAuth',
    CreateAccount = 'CreateAccount',
    EnrollmentPortal = 'EnrollmentPortal'
}

export interface GlobalStoreInterface {
    PreScreening: {
        modal: {
            isModalOpen: boolean
        }
    },
    IdentityAuth: {
        modal: {
            isModalOpen: boolean
        }
    },
    AccountSetup: {
        modal: {
            isModalOpen: boolean
        }
    },
    SchedulingPreferences: {
        modal: {
            isModalOpen: boolean
        }
    },
    Screening: {
        modal: {
            isModalOpen: boolean
        }
    },
    ChatWidget: {
        modal: {
            isModalOpen: boolean
        }
    },
    InformedConsent: {
        modal: {
            isModalOpen: boolean
        }
    },
    CreateAccount: {
        modal: {
            isCreateModalOpen: boolean
        }
    },
    API: {
        AccountSetup: {
            phoneConfirmationStatus: AccountSetupConfirmationStatus,
            addressConfirmationStatus: AccountSetupConfirmationStatus,
        },
        PreScreening: {
            result: PreScreeningResultStatus
        }
    }
}

export const openAccountSetupModalGAC = (): IAction => { // Global Action Creator for opening Account setup modal
    return {
        type: "ACCOUNT_SETUP/OPEN_MODAL",
        payload: null
    }
};

export const openSchedulingPreferencesModalGAC = (): IAction => { // Global Action Creator for opening SchedulingPreferences modal
    return {
        type: "SCHEDULING/OPEN_MODAL",
        payload: null
    }
};

export const openScreeningModalGAC = (): IAction => {
    return {
        type: "SCREENING/OPEN_MODAL",
        payload: null
    }
};

export const openPreScreeningModalGAC = (): IAction => {
    return {
        type: "PRE_SCREENING/OPEN_MODAL",
        payload: null
    }
};

export const openCreationAccountModalGAC = (): IAction => {
    return {
        type: "CREATE_ACCOUNT/OPEN_CREATE_ACCOUNT_MODAL",
        payload: null
    }
};

export const openChatWidgetGAC = (): IAction => {
    return {
        type: 'CHAT_WIDGET/OPEN_MODAL',
        payload: null
    }
}

export const openInformedConsentModalAC = (): IAction => {
    return {
        type: "INFORMED_CONSENT_PROCESS/OPEN_MODAL",
        payload: null
    }
};

export const openIdentityAuthModalGAC = (): IAction => {
    return {
        type: "IDENTITY_VERIFICATION/OPEN_MODAL",
        payload: null
    }
};

export const setStepGAC = (step: UserStepEnum) => {
    return {
        type: 'ENROLLMENT_PORTAL/SET_STEP',
        payload: step
    }
};

type AccountSetupConfirmationStatus = null | "loading" | "accepted" | "denied";
type PreScreeningResultStatus = null | "loading" | "accepted" | "denied";

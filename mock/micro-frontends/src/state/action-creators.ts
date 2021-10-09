import {SetStepAction, SetUserAction} from './actions';
import {EnrollmentPortalActionType} from "./action-types";
import {IUser, UserStepEnum} from './types';

export const setUserAC = (user: IUser | null): SetUserAction => {
    return {
        type: EnrollmentPortalActionType.ENROLLMENT_PORTAL_SET_USER,
        payload: user
    }
};
export const setStepAC = (step: UserStepEnum): SetStepAction => {
    return {
        type: EnrollmentPortalActionType.ENROLLMENT_PORTAL_SET_STEP,
        payload: step
    }
};

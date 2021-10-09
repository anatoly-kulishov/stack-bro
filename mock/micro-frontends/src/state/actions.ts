import {EnrollmentPortalActionType} from "./action-types";
import {IUser, UserStepEnum} from "./types";

export interface SetUserAction {
    type: EnrollmentPortalActionType.ENROLLMENT_PORTAL_SET_USER;
    payload: IUser | null // data from submitted form
}
export interface SetStepAction { // starts requesting to server (show spinner or smth)
    type: EnrollmentPortalActionType.ENROLLMENT_PORTAL_SET_STEP
    payload: UserStepEnum
}

export type EnrollmentPortalAction =
    | SetUserAction
    | SetStepAction

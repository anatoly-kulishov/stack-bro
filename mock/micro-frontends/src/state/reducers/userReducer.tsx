import produce from "immer";
import {EnrollmentPortalAction} from "../actions";
import {EnrollmentPortalActionType} from "../action-types";
import {IUser} from "../types";

type UserState = IUser | null

const initialState: UserState = null

const reducer = produce((state: UserState = initialState, action: EnrollmentPortalAction): UserState => {
    switch (action.type) {
        case EnrollmentPortalActionType.ENROLLMENT_PORTAL_SET_USER:
            state = action.payload;
            return state
        case EnrollmentPortalActionType.ENROLLMENT_PORTAL_SET_STEP:
            (state as IUser).step = action.payload;
            return state
        default:
            return state
    }
}, initialState);

export default reducer
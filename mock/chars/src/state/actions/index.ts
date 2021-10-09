import {ActionType} from "../action-types";

export interface SetFilterOptionsAction {
    type: ActionType.SET_FILTER_OPTIONS,
    payload: any
}

export type FilterAction =
    | SetFilterOptionsAction

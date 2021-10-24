import {SetFilterOptionsAction} from "../actions";
import {ActionType} from "../action-types";
import {FilterState} from "../reducers/filterReducer";

export const setFilterOptions = (values: FilterState): SetFilterOptionsAction => {
    return {
        type: ActionType.SET_FILTER_OPTIONS,
        payload: values
    }
};
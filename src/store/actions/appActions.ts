import {DISABLE_BUTTONS, ENABLE_BUTTONS, HIDE_LOADER, SHOW_LOADER} from "../types";

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function enable_buttons() {
    return {
        type: ENABLE_BUTTONS
    }
}

export function disable_buttons() {
    return {
        type: DISABLE_BUTTONS
    }
}
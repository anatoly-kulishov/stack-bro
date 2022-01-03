import {MIN_PASS_LENGTH, MIN_SEARCH_LENGTH} from "../constants/strings";
import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim'
import {
    NUMBER_CHARACTER_REGEX,
    PHONE_NUMBER_REGEX,
    SPECIAL_CHAR_REGEX,
    VALID_EMAIL_REGEX,
    VALID_URL_REGEX
} from "../constants/regex";

export const upperCaseCheckForPassword = (text: string) => {
    if (!isEmpty(text)) {
        return text.toLowerCase() !== text;
    }
    return false
}

export const specialCharCheckForPassword = (text: string) => {
    let regex = SPECIAL_CHAR_REGEX;
    if (!isEmpty(text)) {
        return !regex.test(text);
    }
    return false;
}

export const numberCharCheckForPassword = (text: string) => {
    if (!isEmpty(text)) {
        return NUMBER_CHARACTER_REGEX.test(text);
    }
    return false;
}

export const lowerCharCheckForPassword = (text: string) => {
    if (!isEmpty(text)) {
        return text.toUpperCase() !== text;
    }
    return false
}

export const minLengthCheckForPassword = (text: string) => {
    if (!isEmpty(text)) {
        return trim(text).length >= MIN_PASS_LENGTH;
    }
    return false;
}

export const passwordStrengthValidation = (password: string) => {
    let passStrengths = {};
    let isUpperCaseCharPresent = false;
    let isSpecialCharPresent = false;
    let isNumberPresent = false;
    let isLowerCaseCharPresent = false;
    let minEightCharPresent = false;
    if (!isEmpty(password)) {
        isUpperCaseCharPresent = upperCaseCheckForPassword(password);
        isSpecialCharPresent = specialCharCheckForPassword(password);
        isNumberPresent = numberCharCheckForPassword(password);
        isLowerCaseCharPresent = lowerCharCheckForPassword(password);
        minEightCharPresent = minLengthCheckForPassword(password);
    }
    passStrengths = {
        upperCaseChar: isUpperCaseCharPresent,
        specialChar: isSpecialCharPresent,
        numberChar: isNumberPresent,
        lowerCaseChar: isLowerCaseCharPresent,
        minChar: minEightCharPresent
    }
    return passStrengths;
}

export const scrollToGivenTop = (element: any) => {
    try {
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        }
    } catch (error) {
        console.log('error in scroll')
    }
}

export const validatePhoneNumber = (phoneNumber: string) => {
    return PHONE_NUMBER_REGEX.test(phoneNumber);
}

export const validateEmailAddress = (email: string) => {
    return VALID_EMAIL_REGEX.test(email);
}

export const validateURL = (url: string) => {
    return VALID_URL_REGEX.test(url);
}

export const minLengthCheckForSearch = (text: string) => {
    if (!isEmpty(text)) {
        return trim(text).length >= MIN_SEARCH_LENGTH;
    }
    return true;
}
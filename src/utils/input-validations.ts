import {MIN_PASS_LENGTH} from "../constants/strings";
import trim from 'lodash/trim'
import {
  NUMBER_CHARACTER_REGEX,
  PHONE_NUMBER_REGEX,
  SPECIAL_CHAR_REGEX,
  VALID_EMAIL_REGEX,
  VALID_URL_REGEX
} from "../constants/regex";

const specialCharCheckForPassword = (password: string) => {
  return !SPECIAL_CHAR_REGEX.test(password);
}

const numberCharCheckForPassword = (password: string) => {
  return NUMBER_CHARACTER_REGEX.test(password);
}

const lowerCharCheckForPassword = (password: string) => {
  return password.toUpperCase() !== password;
}

const minLengthCheckForPassword = (password: string) => {
  return trim(password).length >= MIN_PASS_LENGTH;
}

const validatePhoneNumber = (phoneNumber: string) => {
  return PHONE_NUMBER_REGEX.test(phoneNumber);
}

const validateEmailAddress = (email: string) => {
  return VALID_EMAIL_REGEX.test(email);
}

const validateURL = (url: string) => {
  return VALID_URL_REGEX.test(url);
}

export {
  specialCharCheckForPassword,
  numberCharCheckForPassword,
  lowerCharCheckForPassword,
  minLengthCheckForPassword,
  validatePhoneNumber,
  validateEmailAddress,
  validateURL
}

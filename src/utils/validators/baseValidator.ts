export type FieldValidatorType = (value: string) => string | undefined;

/**
 * Required
 * @param value
 */
export const required: FieldValidatorType = (value: any) => {
    if (value) return undefined;

    return "Field is required";
}

/**
 * Max length creator
 * @param maxLength
 */
export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value: any) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

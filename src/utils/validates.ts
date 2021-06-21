/**
 * Validate email
 * @param value
 */
export const validateEmail = (value: string): string | undefined => {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

/**
 * Validate username
 * @param value
 */
export const validatePassword = (value: string): string | undefined => {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}


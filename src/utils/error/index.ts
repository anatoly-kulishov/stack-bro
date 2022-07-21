import { FormikErrorsType } from '../../shared/types/form.types';

/**
 * Check all unhandled errors
 * @param:<PromiseRejectionEvent> reason
 */
export const catchAllUnhandledErrors = (reason: PromiseRejectionEvent) => {
  console.error(`Some error occurred "${reason}"`);
};

/**
 * @param error
 */
export const isValidInput = (error: FormikErrorsType) => {
  if (error) {
    return {
      'border-red': error,
      'outline-red': error,
    };
  }
};

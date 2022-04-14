/**
 * Check all unhandled errors
 * @param:<PromiseRejectionEvent> reason
 */
export const catchAllUnhandledErrors = (reason: PromiseRejectionEvent) => {
  console.error(`Some error occurred "${reason}"`);
};

/**
 * Check all unhandled errors
 * @param:<PromiseRejectionEvent> reason
 */
export const catchAllUnhandledErrors = (reason: PromiseRejectionEvent) => {
  /* eslint-disable no-alert */
  window.alert(`Some error occurred "${reason}"`); // ToDo: Implement search!
};

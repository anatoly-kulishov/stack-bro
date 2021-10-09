/**
 * Check All Unhandled Errors
 * @param:<PromiseRejectionEvent> reason
 */
export const catchAllUnhandledErrors = (reason: PromiseRejectionEvent) => {
    window.alert('Some error occurred');
    console.log(reason);
}
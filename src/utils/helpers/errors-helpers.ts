/**
 * Check All Unhandled Errors
 * @param reason
 */
export const catchAllUnhandledErrors = (reason: any) => {
    window.alert('Some error occurred')
    console.log(reason)
}
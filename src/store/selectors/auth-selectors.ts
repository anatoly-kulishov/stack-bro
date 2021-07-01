export const selectIsAuth = (state: any) => {
    return state.auth.isAuth
}

export const selectCurrentUserLogin = (state: any) => {
    return state.auth.login
}

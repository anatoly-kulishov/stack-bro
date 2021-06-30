import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
} as MapPropsType);

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>

        return <WrappedComponent {...restProps as WCP}/>
    }

    return connect<MapPropsType, DispatchPropsType, WCP, any>(
        mapStateToPropsForRedirect, {})
    (RedirectComponent);
}

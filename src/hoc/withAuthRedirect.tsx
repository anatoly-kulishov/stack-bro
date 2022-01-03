import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../store/reducers/rootReducer";

const mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
} as MapPropsType);

type MapPropsType = {
  isAuth: boolean
}

type DispatchPropsType = {}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

  const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = props => {
    let {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to='/'/>
    return <WrappedComponent {...restProps as WCP}/>
  }

  return connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(
    mapStateToPropsForRedirect, {})
  (RedirectComponent);
}

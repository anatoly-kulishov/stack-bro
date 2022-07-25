import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppStateType } from '../store';

const mapStateToPropsForRedirect = (state: AppStateType) =>
  ({
    isAuth: state.auth.isAuth,
  } as IMap);

interface IMap {
  isAuth: boolean;
}

interface IDispatch {}

export function withAuthRedirect<WCP>(
  WrappedComponent: React.ExoticComponent<React.ComponentPropsWithRef<() => JSX.Element>> & {
    readonly _result: () => JSX.Element;
  },
) {
  const RedirectComponent: FC<IMap & IDispatch> = props => {
    const { isAuth, ...restProps } = props;

    if (!isAuth) return <Navigate to="/" />;

    return <WrappedComponent {...(restProps as WCP)} />;
  };

  return connect<IMap, IDispatch, WCP, AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent);
}

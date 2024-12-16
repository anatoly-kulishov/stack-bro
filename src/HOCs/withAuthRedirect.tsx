import React, { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppStateType } from '../store';

const mapStateToPropsForRedirect = (state: AppStateType) =>
  ({
    isAuth: state.auth.isAuth,
  }) as IMap;

interface IMap {
  isAuth: boolean;
}

interface IDispatch {}

export function withAuthRedirect(
  WrappedComponent: React.ExoticComponent<React.ComponentPropsWithRef<() => ReactNode>> & {
    readonly _result: () => ReactNode;
  },
) {
  const RedirectComponent: FC<IMap & IDispatch> = props => {
    const { isAuth, ...restProps } = props;

    if (!isAuth) return <Navigate to="/" />;

    return <WrappedComponent {...(restProps as any)} />;
  };

  return connect<IMap, IDispatch, any, AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent);
}

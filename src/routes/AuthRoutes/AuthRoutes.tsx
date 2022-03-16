import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { publicRoutes } from '../routes';
import { IRouteType } from '../../types';
import styles from './AuthRoutes.module.scss';

export const AuthRoutes: FC = () => {
  return (
    <div className={styles.auth}>
      <div>
        <Switch>
          {publicRoutes.map((route: IRouteType, index: number) => (
            <Route key={index} path={route.path} exact={route.exact}>
              {route.component}
            </Route>
          ))}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

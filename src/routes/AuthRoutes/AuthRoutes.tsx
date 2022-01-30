import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { publicRoutes } from '../routes';
import styles from './AuthRoutes.module.scss';
import { IRouteType } from '../../types';

export const AuthRoutes: React.FC = () => {
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

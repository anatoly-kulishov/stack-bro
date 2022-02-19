/* Libs */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

/* Components */
import { NoMatch } from '../../components/NoMatch/NoMatch';
import { NavBar } from '../../components/NavBar/NavBar';
// eslint-disable-next-line import/order
import { Header } from '../../components/Header/Header';

/* Utils */
import { privateRoutes } from '../routes';
import { IRouteType } from '../../types';

/* Others */
const { Content } = Layout;

export const AppRoutes: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout className="site-layout">
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 d-none d-lg-block col-md-3 col-lg-2 pr-0">
              <NavBar />
            </div>
            <div className="col-12 col-md-9 col-xl-10">
              <Content>
                <Switch>
                  {privateRoutes.map((route: IRouteType, index: number) => (
                    <Route key={index} path={route.path} exact={route.exact}>
                      {route.component}
                    </Route>
                  ))}
                  <Route path="*">
                    <NoMatch />
                  </Route>
                </Switch>
              </Content>
            </div>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

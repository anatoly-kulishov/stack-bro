import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Layout} from 'antd';
import {privateRoutes} from "../routes";
import {IRouteType} from "../../types";
import NoMatch from "../../components/NoMatch";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

const AppRoutes: React.FC = () => {
    const {Content} = Layout;

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header/>
            <Layout className="site-layout">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-12 d-none d-lg-block col-md-3 col-lg-2 pr-0">
                            <NavBar/>
                        </div>
                        <div className="col-12 col-md-9 col-xl-10">
                            <Content>
                                <Switch>
                                    {privateRoutes.map((route: IRouteType, index: number) => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            children={route.component}
                                        />
                                    ))}
                                    <Route path="*">
                                        <NoMatch/>
                                    </Route>
                                </Switch>
                            </Content>
                        </div>
                    </div>
                </div>
            </Layout>
        </Layout>
    )
}

export default AppRoutes;
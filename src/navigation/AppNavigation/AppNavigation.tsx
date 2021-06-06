import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import {appRoutes} from "../routes";
import {Layout} from 'antd';
import NoMatch from "../../components/NoMatch";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import {IAppNavigation} from "../../interfaces";
import SideBar from "../../components/SideBar";

const AppNavigation: React.FC<IAppNavigation> = props => {
    const {setProfile} = props;
    const {Content} = Layout;

    useEffect(() => {
        setProfile(17495)
    }, [setProfile])

    return (
        <Layout style={{minHeight: '100vh'}}>
            <SideBar profile={{}}/>
            <Layout className="site-layout">
                <Header/>
                <Content style={{margin: '16px'}}>
                    <Switch>
                        {appRoutes.map((route: any, index: number) => (
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
                <Footer/>
            </Layout>
        </Layout>
    )
}

export default AppNavigation;
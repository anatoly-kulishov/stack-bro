import React from 'react';
import {Route, Switch} from "react-router-dom";
import {appRoutes} from "../routes";
import NoMatch from "../../components/NoMatch/index";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const AppNavigation: React.FC = () => {
    return (
        <>
            <Header/>
            <main className="app-main container">
                <Navbar/>
                <div className="app-content">
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
                </div>
            </main>
        </>
    )
}

export default AppNavigation;
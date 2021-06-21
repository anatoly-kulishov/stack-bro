import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {authRoutes} from "../routes";
import styles from "./AuthNavigation.module.scss";

const AuthNavigation: React.FC = () => {
    return (
        <div className={styles.auth}>
            <div>
                <Switch>
                    {authRoutes.map((route: any, index: number) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={route.component}
                        />
                    ))}
                    <Route path="*">
                        <Redirect to="/"/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default AuthNavigation;
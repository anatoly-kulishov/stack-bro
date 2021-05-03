import React from 'react';
import {Route, Switch} from "react-router-dom";
import routes from "./routes";
import NoMatch from "../components/NoMatch";

const AppNavigation: React.FC = () => {
    return (
        <Switch>
            {routes.map((route: any, index: number) => (
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
    )
}

export default AppNavigation;
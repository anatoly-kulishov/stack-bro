import React from 'react';
import {Route, Switch} from "react-router-dom";
import Dialogs from "../components/Dialogs/Dialogs";
import Profile from "../components/Profile/Profile";

const AppNavigation: React.FC = () => {
    return (
        <Switch>
            <Route path="/dialogs">
                <Dialogs/>
            </Route>
            <Route path="/">
                <Profile/>
            </Route>
        </Switch>
    )
}

export default AppNavigation;
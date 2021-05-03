import React from 'react';
import Profile from "../components/Profile";
import Dialogs from "../components/Dialogs";
import News from "../components/News";
import Music from "../components/Music";
import Settings from "../components/Settings";

const routes = [
    {
        path: "/",
        exact: true,
        component: <Profile/>
    },
    {
        path: "/dialogs",
        component: <Dialogs/>,
    },
    {
        path: "/news",
        component: <News/>,
    },
    {
        path: "/music",
        component: <Music/>,
    },
    {
        path: "/settings",
        component: <Settings/>,
    },
];


export default routes;

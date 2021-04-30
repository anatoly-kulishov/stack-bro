import React from 'react';
import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <nav className="app-sidebar">
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
            </ul>
        </nav>
    );
}

export default Sidebar;
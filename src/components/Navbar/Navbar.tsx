import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <NavLink to="/profile" exact activeClassName={styles.current}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={styles.current}>Dialogs</NavLink>
                </li>
                <li>
                    <NavLink to="/users" activeClassName={styles.current}>Users</NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={styles.current}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/music" activeClassName={styles.current}>Music</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" activeClassName={styles.current}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
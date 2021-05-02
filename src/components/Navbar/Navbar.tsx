import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <Link to="/">Profile</Link>
                </li>
                <li>
                    <Link to="/dialogs">Dialogs</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
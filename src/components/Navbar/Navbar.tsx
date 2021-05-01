import React from 'react';
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
            </ul>
        </nav>
    );
}

export default Navbar;
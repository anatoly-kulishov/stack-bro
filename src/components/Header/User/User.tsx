import React from 'react';
import styles from "./User.module.scss";
import {IHeaderUser} from "../../../interfaces";

const User: React.FC<IHeaderUser> = props => {
    const {logOut} = props;

    return (
        <div className={styles.user}>
            <div className={styles.control}>
                <span className="btn btn--danger"
                      onClick={() => logOut()}>Sign out</span>
            </div>
        </div>
    );
}

export default User;

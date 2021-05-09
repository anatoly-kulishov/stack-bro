import React from 'react';
import styles from "./User.module.scss";
import {useDispatch} from "react-redux";
import {logOut} from "../../../store/actions/authActions";

const User: React.FC = () => {
    const dispatch = useDispatch();

    const onLogOutHandler = () => {
        dispatch(logOut())
    }

    return (
        <div className={styles.user}>
            <div className={styles.info}>Кулишов Анатолий</div>
            <div className={styles.control}>
                <span className="btn btn--danger"
                      onClick={onLogOutHandler}>Выйти</span>
            </div>
        </div>
    );
}

export default User;

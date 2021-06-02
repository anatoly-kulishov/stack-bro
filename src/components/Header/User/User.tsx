import React from 'react';
import styles from "./User.module.scss";
import {useDispatch} from "react-redux";
import {logOut} from "../../../store/actions/authActions";

type IUser = {
    login: string
}

const User: React.FC<IUser> = ({login}) => {
    const dispatch = useDispatch();

    const onLogOutHandler = () => {
        dispatch(logOut())
    }

    return (
        <div className={styles.user}>
            <div className={styles.info}>{login}</div>
            <div className={styles.control}>
                <span className="btn btn--danger"
                      onClick={onLogOutHandler}>Sign out</span>
            </div>
        </div>
    );
}

export default User;

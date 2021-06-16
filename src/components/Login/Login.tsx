import React from 'react';
import styles from './Login.module.scss';
import LoginForm from "./LoginForm/LoginForm";
import {ILogin} from "../../interfaces";

const Login: React.FC<ILogin> = props => {
    const {signIn, isValidAuth} = props;

    return (
        <section>
            <div className={styles.loginBox}>
                <div className={`${styles.subtitle}`}>Log in to StackBro</div>
                <LoginForm onSubmit={signIn} isValid={isValidAuth}/>
            </div>
        </section>
    );
}

export default Login;
import React from 'react';
import styles from './Login.module.scss';
import LoginForm from "./LoginForm/LoginForm";
import {ILogin} from "../../interfaces";

const Login: React.FC<ILogin> = props => {
    const {signIn} = props;

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>StackBro</h1>
            <LoginForm onSubmit={signIn}/>
        </section>
    );
}

export default Login;
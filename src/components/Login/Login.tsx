import React from 'react';
import styles from './Login.module.scss';
import LoginForm from "./LoginForm/LoginForm";
import {LoginPropsType} from "../../types/PropsTypes";

const Login: React.FC<LoginPropsType> = props => {
    const {signIn, isValidAuth, errorText, captchaUrl} = props;

    return (
        <section>
            <div className={styles.loginBox}>
                <div className={`${styles.subtitle}`}>Log in to StackBro</div>
                <LoginForm onSubmit={signIn}
                           isValid={isValidAuth}
                           errorText={errorText}
                           captchaUrl={captchaUrl}/>
            </div>
        </section>
    );
}

export default Login;
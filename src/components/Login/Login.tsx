import React from 'react';
import {useSelector} from "react-redux";
import styles from './Login.module.scss';
import LoginForm from "./LoginForm/LoginForm";
import {signIn} from "../../store/actions/authActions";
import {
    getAuthCaptchaUrl,
    getAuthErrorText,
    getAuthIsLoading,
    getAuthIsValidAuth
} from "../../store/selectors/auth-selectors";
import WithLoading from "../common/WithLoading";

const Login: React.FC = () => {
    const isValidAuth = useSelector(getAuthIsValidAuth);
    const captchaUrl = useSelector(getAuthCaptchaUrl);
    const errorText = useSelector(getAuthErrorText);
    const isLoading = useSelector(getAuthIsLoading);

    return (
        <section>
            <div className={styles.loginBox}>
                <WithLoading isLoading={isLoading} spinnerSize={'50px'}>
                    <div className={`${styles.subtitle}`}>Log in to StackBro</div>
                    <LoginForm
                        onSubmit={signIn}
                        isValid={isValidAuth}
                        errorText={errorText}
                        captchaUrl={captchaUrl}/>
                </WithLoading>

            </div>
        </section>
    );
}

export default Login;

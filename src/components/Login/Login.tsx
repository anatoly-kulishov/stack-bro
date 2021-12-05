import React, {FC} from 'react';
import {useSelector} from "react-redux";
import styles from './Login.module.scss';
import LoginForm from "./LoginForm/LoginForm";
import {signIn} from "../../store/actions/authActions";
import {
  getAuthCaptchaUrl,
  getAuthErrorText,
  getAuthIsValidAuth
} from "../../store/selectors/auth-selectors";

const Login: FC = () => {
  const isValidAuth = useSelector(getAuthIsValidAuth);
  const captchaUrl = useSelector(getAuthCaptchaUrl);
  const errorText = useSelector(getAuthErrorText);

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

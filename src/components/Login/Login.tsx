import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { LoginForm } from './LoginForm/LoginForm';
import { WithLoading } from '../common/WithLoading/WithLoading';
import { signIn } from '../../store/actions/authActions';
import { getAuthState } from '../../store/selectors/auth-selectors';
import { SITE_TITLE, SPINNER_SIZE } from '../../constants/general';
import styles from './Login.module.scss';

export const Login: FC = () => {
  const { isValid, captchaUrl, error, isLoading } = useSelector(getAuthState);

  return (
    <section>
      <div className={styles.LoginBox}>
        <WithLoading isLoading={isLoading} spinnerSize={SPINNER_SIZE}>
          <div className={styles.Subtitle}>Log in to {SITE_TITLE}</div>
          <LoginForm onSubmit={signIn} isValid={isValid} errorText={error} captchaUrl={captchaUrl} />
        </WithLoading>
      </div>
    </section>
  );
};

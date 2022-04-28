import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { getAuthState } from '../../store/selectors/auth-selectors';
import { WithLoading } from '../common/WithLoading/WithLoading';
import { SITE_TITLE, SPINNER_SIZE } from '../../constants/general';
import { LoginForm } from './LoginForm/LoginForm';
import { useActions } from '../../store';
import styles from './Login.module.scss';

export const Login: FC = () => {
  const { isValid, captchaUrl, error, isLoading } = useSelector(getAuthState);
  const { signIn } = useActions();

  return (
    <section>
      <div className={styles.LoginBox}>
        <WithLoading isLoading={isLoading} spinnerSize={SPINNER_SIZE}>
          <div className={styles.Subtitle}>Log in to {SITE_TITLE}</div>
          <LoginForm onSubmit={signIn} isValid={isValid} errorsText={error} captchaUrl={captchaUrl} />
        </WithLoading>
      </div>
    </section>
  );
};

import Cookies from 'js-cookie';

import { authReducer, InitialStateType } from './authReducer';
import { logOut, signIn } from '../../actions/authActions';

const state: InitialStateType = {
  isLoading: true,
  isValid: true,
  error: null,
  isAuth: Boolean(Cookies.get('token')),
  userId: null,
  myProfile: null,
  captchaUrl: null,
};

it('auth', () => {
  // 1. Test data
  const profile = { email: '', password: '', captcha: '' };
  const action = signIn(
    profile,
    () => null,
    () => null,
  );

  // 2. Action
  const newState = authReducer(state, action);

  // 3. Expectation
  expect(newState.isAuth).toBe(true);
});

it('log out', () => {
  // 1. Test data
  const action = logOut();

  // 2. Action
  const newState = authReducer(state, action);
  // eslint-disable-next-line no-console
  console.log(newState);

  // 3. Expectation
  expect(newState.isLoading).toBe(false);
});

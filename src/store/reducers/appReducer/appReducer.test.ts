import appReducer from './appReducer';
import { actions } from '../../actions/appActions';

const state: any = {
  initialized: false,
  globalErrors: null as string | null,
  theme: 'light',
};

it('initialized of app should be success', () => {
  // 1. Test data
  const action = actions.initializedSuccess();

  // 2. Action
  const newState = appReducer(state, action);

  // 3. Expectation
  expect(newState.initialized).toBe(true);
});

import { AppInitialStateType, appReducer } from './appReducer';
import { actions } from '../../actions/appActions';
import { ColorThemes, Nullable } from '../../../types';
import { COLOR_THEME } from '../../../constants/localStorage';

const state: AppInitialStateType = {
  initialized: false,
  globalErrors: null as Nullable<string>,
  theme: (localStorage.getItem(COLOR_THEME) || 'light') as ColorThemes,
  spinnerSize: '50px',
};

it('initialized of app should be success', () => {
  // 1. Test data
  const action = actions.initializedSuccess();

  // 2. Action
  const newState = appReducer(state, action);

  // 3. Expectation
  expect(newState.initialized).toBe(true);
});

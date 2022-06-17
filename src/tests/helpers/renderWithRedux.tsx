import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Store } from 'redux';

import { store } from '../../store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderWithRedux = (component: JSX.Element, initialState: Store<any, any>) => {
  return render(<Provider store={initialState ?? store}>{component}</Provider>);
};

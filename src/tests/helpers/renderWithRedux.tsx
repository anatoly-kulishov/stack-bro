import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Store } from 'redux';

import { store } from '../../store';

export const renderWithRedux = (component: JSX.Element, initialState: Store<any, any>) => {
  return render(<Provider store={initialState ?? store}>{component}</Provider>);
};

import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { store } from '../../store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderTestApp = (component: JSX.Element, options: { route?: string; store?: Store<any, any> }) => {
  return render(
    <Provider store={options.store ?? store}>
      <MemoryRouter initialEntries={['/']}>{component}</MemoryRouter>
    </Provider>,
  );
};

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export const renderWithRouter = (component: JSX.Element, initialRoute = '/') => {
  return render(<MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>);
};

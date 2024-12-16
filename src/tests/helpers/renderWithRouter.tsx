import React, {ReactNode} from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export const renderWithRouter = (component: ReactNode, initialRoute = '/') => {
  return render(<MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>);
};
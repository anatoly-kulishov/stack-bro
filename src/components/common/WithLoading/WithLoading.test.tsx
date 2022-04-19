import React from 'react';
import { render, screen } from '@testing-library/react';

import { WithLoading } from './WithLoading';
import { SPINNER_SIZE } from '../../../constants/general';

describe('WithLoading', () => {
  test('spinner is displayed and dimensions converge', () => {
    render(<WithLoading isLoading={true} spinnerSize={SPINNER_SIZE} />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toMatchSnapshot();
  });

  test("spinner isn't displayed", () => {
    render(<WithLoading isLoading={false} spinnerSize={SPINNER_SIZE} />);
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });
});

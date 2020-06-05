import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import HomePage from './index';

test('can render with redux with defaults', () => {
  render(<HomePage />);
  expect(screen.asFragment(<HomePage />)).toMatchSnapshot();
});

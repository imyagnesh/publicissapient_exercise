/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '../../../utils/test-utils';
import HomePage from './index';

const props = {
  loadNews: jest.fn(),
  upVote: jest.fn(),
  hideHit: jest.fn(),
  match: {
    params: { page: null },
  },
  history: {
    push: jest.fn(),
  },
};

test('can render with redux with defaults', () => {
  const container = render(<HomePage {...props} />);
  expect(container.firstChild).toMatchSnapshot();
});

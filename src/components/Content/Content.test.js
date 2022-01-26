import React from 'react';
import { render, cleanup } from '@testing-library/react';
import axiosMock from 'axios';

import Content from './Content.component';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        icon_url: 'http://image.png',
        value: 'joke text',
      }),
  })
);

afterEach(cleanup);

describe('Testing the component elements', () => {
  test('fetches and displays data', async () => {
    const { container } = render(<Content />);
    expect(container.innerHTML).toMatch('Pick a Date');
  });
});

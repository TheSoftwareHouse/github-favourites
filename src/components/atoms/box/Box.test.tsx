import React from 'react';

import { render, waitForElement } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { Box } from './Box';

describe('Box component', () => {
  it('renders box correctly', async () => {
    const { getByText, container } = render(
      <ThemeProviderMock>
        <Box className="test-box">Test</Box>
      </ThemeProviderMock>
    );

    await waitForElement(() => getByText(/Test/i));

    expect(container.getElementsByClassName('test-box').length).toEqual(1);
  });
});

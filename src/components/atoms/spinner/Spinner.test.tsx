import React from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { Spinner } from './Spinner';

describe('Spinner component', () => {
  it('renders spinner correctly', async () => {
    const onClick = jest.fn();

    const { getByText, container } = render(
      <ThemeProviderMock>
        <Spinner/>
      </ThemeProviderMock>
    );

    await waitForElement(() => container.getElementsByClassName('spinner'));
  });
});

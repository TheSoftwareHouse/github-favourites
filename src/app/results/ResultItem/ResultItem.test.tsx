import React from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { ResultItem } from './ResultItem';
import { ApiResponse } from './ResultItem.interface';

describe('ResultItem component', () => {
  const getLanguages: () => Promise<ApiResponse> = () =>
    new Promise(function(resolve) {
      resolve({
        php: 200,
        javascript: 100,
      });
    });

  it('renders ResultItem correctly with statistics', async () => {
    const { getByText, container } = render(
      <ThemeProviderMock>
        <ResultItem getLanguages={getLanguages} name="Foo" fullName="foo/bar" url="http://foo.bar" stars={250} />
      </ThemeProviderMock>
    );

    await waitForElement(() => getByText(/Foo/i));

    expect(getByText(/250 Stars/i)).not.toEqual(null);

    await fireEvent.click(container.getElementsByClassName('box__collapse-toggle')[0]);
    await waitForElement(() => getByText(/php 67%/i));
  });
});

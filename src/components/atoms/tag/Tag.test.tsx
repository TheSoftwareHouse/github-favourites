import React from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { Tag } from './Tag';

describe('Tag component', () => {
  it('renders tag correctly', async () => {
    const onClick = jest.fn();

    const { getByText, container } = render(
      <ThemeProviderMock>
        <Tag className="test-tag" color="primary">Test</Tag>
      </ThemeProviderMock>
    );

    await waitForElement(() => getByText(/Test/i));

    expect(container.getElementsByClassName('test-tag').length).toEqual(1);
  });
});

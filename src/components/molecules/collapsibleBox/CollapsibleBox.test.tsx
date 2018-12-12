import React from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { CollapsibleBox } from './CollapsibleBox';

describe('CollapsibleBox component', () => {
  it('renders collapsible box correctly with collapsed prop', async () => {
    const onToggleCollapse = jest.fn();

    const { getByText, container } = render(
      <ThemeProviderMock>
        <CollapsibleBox className="test-box" collapsed={true} onToggleCollapse={onToggleCollapse}>Test</CollapsibleBox>
      </ThemeProviderMock>
    );

    await waitForElement(() => getByText(/Test/i));

    expect(container.getElementsByClassName('test-box box').length).toEqual(1);

    const icon = container.querySelector("*[color='primary']");

    expect(icon).not.toEqual(null);

    icon && fireEvent.click(icon);
    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('renders collapsible box correctly with not collapsed prop', async () => {
    const onToggleCollapse = jest.fn();

    const { getByText, container } = render(
      <ThemeProviderMock>
        <CollapsibleBox className="test-box" collapsed={false} onToggleCollapse={onToggleCollapse}>Test</CollapsibleBox>
      </ThemeProviderMock>
    );

    await waitForElement(() => getByText(/Test/i));

    expect(container.getElementsByClassName('test-box box').length).toEqual(1);
    expect(container.querySelectorAll("*[name='chevron-arrow-up']").length).toEqual(1);
  });
});

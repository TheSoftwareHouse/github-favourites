import React from 'react';

import { render, waitForElement } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { Header } from './Header';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, className }: { children: string, to: string, className: string }) => (
    <a href={to} className={className || ''}>
      {children}
    </a>
  ),
}));

describe('Header component', () => {
  it('renders header correctly', async () => {
    const { getByText, container } = render(
      <ThemeProviderMock>
        <Header title="PageName" />
      </ThemeProviderMock>
    );

    await waitForElement(() => getByText(/PageName/i));

    expect(container.getElementsByClassName('header__back').length).toEqual(0);
    expect(container.getElementsByClassName('header-logo').length).toEqual(1);
  });

  it('renders header correctly with back button', async () => {
    const { getByText, container } = render(
      <ThemeProviderMock>
        <Header title="PageName" backUrl="/foo" />
      </ThemeProviderMock>
    );

    await waitForElement(() => getByText(/PageName/i));

    expect(container.getElementsByClassName('header__back').length).toEqual(1);
    expect(container.getElementsByTagName('a').length).toEqual(1);
  });
});

import React from 'react';

import { render, waitForElement } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { Layout } from './Layout';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, className }: { children: string, to: string, className: string }) => (
    <a href={to} className={className || ''}>
      {children}
    </a>
  ),
}));

describe('Layout component', () => {
  it('renders Layout correctly', async () => {
    const { getByText, container } = render(
      <ThemeProviderMock>
        <Layout title="Test page" backUrl="/foo">Test</Layout>
      </ThemeProviderMock>
    );

    await waitForElement(() => getByText(/Test/i));

    expect(container.getElementsByClassName('layout').length).toEqual(1);
    expect(container.getElementsByClassName('layout__content').length).toEqual(1);
  });
});

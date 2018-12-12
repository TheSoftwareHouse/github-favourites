import React, { ReactNode } from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { Results } from './Results';
import { ApiResponse } from './Results.interface';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, className }: { children: string, to: string, className: string }) => (
    <a href={to} className={className || ''}>
      {children}
    </a>
  ),
}));

// Mock results to only count items
jest.mock('components/containers/masonryGrid/MasonryGrid', () => ({
  MasonryGrid: ({ children }: { children: any }) => <div>Items {children.length}</div>,
}));

const item = {
  stargazers_count: 10,
  name: 'foo',
  description: 'bar',
  full_name: 'foo/bar',
  html_url: 'http://example.com',
};

describe('Results components', () => {
  const fetchRepositories: (page: number, itemsPerPage: number) => Promise<ApiResponse> = (page, itemsPerPage) =>
    new Promise(function(resolve) {
      resolve({
        items: Array(20).fill(item),
      });
    });

  it('renders results page correctly', async () => {
    const { getByText, container } = render(
      <ThemeProviderMock>
        <Results fetchRepositories={fetchRepositories} />
      </ThemeProviderMock>
    );

    // Check starting items
    await waitForElement(() => getByText(/Load more/i));
    expect(getByText('Items 20')).not.toEqual(null);

    // Load more
    await fireEvent.click(getByText(/Load more/i));
    expect(getByText('Items 40')).not.toEqual(null);
  });
});

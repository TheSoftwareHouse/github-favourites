import React from 'react';

import { render, waitForElement } from 'react-testing-library';

import { MasonryGrid } from './MasonryGrid';

describe('MasonryGrid component', () => {
  it('renders masonry grid correctly', async () => {
    const { getByTestId } = render(
      <MasonryGrid rowHeight={16} colWidth="250px">
        <div data-testid="first" style={{height: '200px'}}>Test test test</div>
        <div data-testid="big">Test test test<br/>Test test test<br/>Test test test</div>
        <div data-testid="after-big">Test test test</div>
        <div data-testid="middle">Test test test</div>
        <div data-testid="last-by-one">Test test test</div>
        <div data-testid="last">Test test test</div>
      </MasonryGrid>
    );

    await waitForElement(() => getByTestId('last'));
  });
});

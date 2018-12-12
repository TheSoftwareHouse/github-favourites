import React from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { Pagination } from './Pagination';

type ResultItem = {
  name: string,
};

describe('Pagination component', () => {
  const onFetchItems: (page: number, itemsPerPage: number) => Promise<{ items: Array<ResultItem> }> = (
    page,
    itemsPerPage
  ) =>
    new Promise(function(resolve) {
      if (page === 1) {
        return resolve({
          items: [
            {
              name: 'foo',
            },
            {
              name: 'bar',
            },
          ],
        });
      } else {
        return resolve({
          items: [
            {
              name: 'baz',
            },
          ],
        });
      }
    });

  it('renders pagination HOC correctly', async () => {
    const { getByTestId, container } = render(
      <Pagination onFetchItems={onFetchItems} itemsPerPage={20}>
        {({ items, allItemsLoaded, loading, onLoadMore }) => (
          <div data-testid="pagination-container">
            {loading && <div data-testid="loading" />}
            {allItemsLoaded && <div data-testid="all-loaded" />}

            {items.map(i => (
              <div data-testid={i.name} key={i.name} className="result-item" />
            ))}

            <button data-testid="load-more" onClick={() => onLoadMore()}>
              Load more
            </button>
          </div>
        )}
      </Pagination>
    );

    await waitForElement(() => getByTestId('pagination-container'));
    expect(container.getElementsByClassName('result-item').length).toEqual(2);

    await fireEvent.click(getByTestId('load-more'));

    expect(container.getElementsByClassName('result-item').length).toEqual(3);
    expect(getByTestId('all-loaded')).not.toEqual(null);
  });
});

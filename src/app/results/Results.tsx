import React from 'react';

import { Layout, Button, Spinner, Pagination } from 'components';
import { ResultItemContainer } from './ResultItem/ResultItemContainer';

import { ResultsList, ResultsFooter } from './Results.styles';
import { ResultsProps, ResultItem } from './Results.interface';

const ITEMS_PER_PAGE = 20;

export const Results = ({ fetchRepositories }: ResultsProps) => (
  <Pagination onFetchItems={fetchRepositories} itemsPerPage={ITEMS_PER_PAGE}>
    {({ items, allItemsLoaded, loading, onLoadMore }) => (
      <Layout title="Search results" backUrl="/">
        <ResultsList rowHeight={16} colWidth="250px">
          {items.map((i, index: number) => (
            <ResultItemContainer
              key={index}
              name={`${i.name} ${i.description}`}
              fullName={i.full_name}
              url={i.html_url}
              stars={i.stargazers_count}
            />
          ))}
        </ResultsList>

        {!allItemsLoaded && !loading && (
          <ResultsFooter>
            <Button color="primary" icon="add-square-button" onClick={onLoadMore}>
              Load more
            </Button>
          </ResultsFooter>
        )}

        {!loading && items.length === 0 && <span>No data</span>}

        {loading && <Spinner />}
      </Layout>
    )}
  </Pagination>
);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { parse } from 'qs';

import client from 'api/createClient';
import { searchRepositories } from 'api/actions/searchRepositories';

import { Results } from './Results';
import { ApiResponse } from './Results.interface';

const connectedProps = (search: string) => ({
  fetchRepositories: (page: number, itemsPerPage: number) =>
    client.dispatchAction<ApiResponse>(
      searchRepositories(
        `"${parse(search.replace('?', '')).name}"`,
        {
          language: `"${parse(search).language}"`,
          pushed: '>2018-01-01',
          stars: '>9',
        },
        page,
        itemsPerPage
      )
    ),
});

export const ResultsContainer = withRouter(props => <Results {...connectedProps(props.location.search)} {...props} />);

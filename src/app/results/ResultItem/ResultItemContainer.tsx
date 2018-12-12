import React from 'react';

import client from 'api/createClient';
import { getLanguagesByRepository } from 'api/actions/getLanguagesByRepository';

import { ResultItem } from './ResultItem';
import { ResultItemContainerProps, ApiResponse } from './ResultItem.interface';

const connectedProps = (repository: string) => ({
  getLanguages: () => client.dispatchAction<ApiResponse>(getLanguagesByRepository(repository)),
});

export const ResultItemContainer = (props: ResultItemContainerProps) => (
  <ResultItem {...connectedProps(props.fullName)} {...props} />
);

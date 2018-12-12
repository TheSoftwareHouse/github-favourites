import styled from '@emotion/styled';

import { Box, MasonryGrid } from 'components';

export const SearchBox = styled(Box)`
  .input {
    margin-bottom: 8px;
  }

  ${props =>
    props.theme.notMobile(`
      flex-flow: row;
      padding: 32px;

      > * {
        margin: 0 16px;
      }
  `)}
`;

export const SearchSubmit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 32px -16px -12px;
  padding: 4px 16px 0;

  border-top: 2px solid ${props => props.theme.variable('lightColor')};

  ${props =>
    props.theme.notMobile(`
      flex: 0 0 200px;
      border-top: 0;
      margin-top: 8px;
  `)}
`;

export const FavouriteList = styled(MasonryGrid)`
  margin-top: 16px;
`;

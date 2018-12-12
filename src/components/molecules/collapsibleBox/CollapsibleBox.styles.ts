import styled from '@emotion/styled';

import { Box as BaseBox } from 'components';

export const Box = styled(BaseBox)``;

export const CollapseToggleButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0;
  margin: 16px -16px -16px -16px;

  cursor: pointer;

  border-top: 1px solid ${props => props.theme.variable('superLightColor')}
`;
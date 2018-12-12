import styled from '@emotion/styled';

export const ResultItemTitle = styled.a`
  width: 100%;
  padding-bottom: 8px;

  font-weight: 500;
  font-size: ${props => props.theme.variable('textNormal')};
  line-height: 26px;
  text-decoration: none;

  color: ${props => props.theme.variable('textColor')};

  &:hover {
    color: ${props => props.theme.variable('primaryColor')};
  }
`;

export const ResultItemLanguages = styled.div`
  margin-top: 4px;

  > * {
    margin: 4px 4px 4px 0;
  }
`;

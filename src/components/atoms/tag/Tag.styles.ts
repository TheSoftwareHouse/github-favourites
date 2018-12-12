import styled from '@emotion/styled';

export const TagWrapper = styled.div<{color: string}>`
  display: inline-flex;

  font-size: ${props => props.theme.variable('textMedium')};

  span {
    background-color: ${props => props.theme.variable(props.color)};
    padding: 4px 8px;
    border-radius: 12px;
  }
`;
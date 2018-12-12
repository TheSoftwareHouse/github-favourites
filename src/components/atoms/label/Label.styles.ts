import styled from '@emotion/styled';

export const LabelWrapper = styled.label`
  font-weight: 500;
  font-size: ${props => props.theme.variable('textMedium')};

  cursor: pointer;

  color: ${props => props.theme.variable('textLightColor')};
`;

import styled from '@emotion/styled';

export const BoxWrapper = styled.section`
  display:flex;
  flex-flow:column;
  
  padding: 16px;

  background-color: white;
  border-radius: ${props => props.theme.variable('baseBorderRadius')};
  box-shadow: ${props => props.theme.variable('baseBoxShadow')};

  word-wrap: break-word;
`;
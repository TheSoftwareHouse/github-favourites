import styled from '@emotion/styled';

export const ButtonWrapper = styled.button<{disabled?: boolean, color?: string}>`
  display: flex;
  align-items: center;

  color: ${props => props.theme.variable(props.disabled? 'textLightColor' : props.color || 'primaryColor')};
  border: 0;
  background-color: transparent;
  height: 40px;

  text-transform: uppercase;
  font-weight: 600;
  font-size: ${props => props.theme.variable('textMedium')};

  cursor: ${props => props.disabled? 'not-allowed ' : 'pointer'};
  transition: all 0.3s;

  &:active {
    transform: translateY(4px);
    filter: saturate(150%);
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }

  .icon {
    margin-right: 8px;
  }
`;

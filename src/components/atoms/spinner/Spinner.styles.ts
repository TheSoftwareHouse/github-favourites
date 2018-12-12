import styled from '@emotion/styled';
import { keyframes } from '@emotion/core'

const spinerAnimation = keyframes`
  0% { 
    transform: scale(0);
  }
  100% {
    transform: scale(1.0);
    opacity: 0;
  }
`;

export const SpinningCircle = styled.div`
  margin: 24px auto;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.variable('primaryColor')};
  animation: ${spinerAnimation} 1s infinite ease-in-out;
`;

import styled from '@emotion/styled';

export const IconWrapper = styled.div<{size?: string, color: string}>`
  svg {
    width: ${props => props.size ? props.size : '16px'};
    height: ${props => props.size ? props.size : '16px'};

    fill: ${props => props.theme.variable(props.color)};
  }
`;

import styled from '@emotion/styled';

export const InputFieldWrapper = styled.div<{filled:boolean}>`
  position: relative;
  height: 80px;
  width: 100%;

  label {
    position: absolute;
    top: ${props => props.filled ? '0' : '20px'};
    transition: all 0.25s;
    transform: ${props => props.filled ? 'none'  : 'scale(1.2)'};
    transform-origin: top left;
  }

  input {
    position: absolute;
    top: 20px;
    height: 30px;
    outline: none;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    padding: 0;

    font-size: ${props => props.theme.variable('textMedium')};
    font-weight: 500;

    border: 0;
    border-bottom: 2px solid ${props => props.theme.variable('primaryColor')};
    border-radius: 0;

    ::placeholder {
      font-weight: 400;

      color: ${props => props.theme.variable('textSuperLightColor')};
    }

    &:focus + label {
      top: 0;
      transform: none;
    }
  }
`;

export const InputChartCounter = styled.div`
  position: absolute;
  top: 60px;
  right: 0;

  font-weight: 500;
  font-size: ${props => props.theme.variable('textSmall')};
  text-align: right;

  color: ${props => props.theme.variable('textLightColor')};
`;

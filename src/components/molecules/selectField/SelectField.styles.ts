import styled from '@emotion/styled';
import css from '@emotion/core';

export const SelectFieldWrapper =
  styled.div <
  { filled: boolean } >
  `
  position: relative;
  padding-top: 50px;
  width: 100%;

  label {
    position: absolute;
    top: ${props => (props.filled ? '0' : '20px')};
    transition: all 0.25s;
    transform: ${props => (props.filled ? 'none' : 'scale(1.2)')};
    transform-origin: top left;
  }
`;

export const SelectInput =
  styled.div <
  { hasBorder: boolean } >
  `
  position: absolute;
  top: 20px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  outline: none;
  width: 100%;

  font-size: ${props => props.theme.variable('textMedium')};
  font-weight: 500;
  line-height: 30px;

  cursor: pointer;

  border: 0;
  border-bottom: ${props => (props.hasBorder ? `2px solid ${props.theme.variable('primaryColor')}` : '0')};

  .icon {
    order: -1;
  }
`;

export const SelectOptions = styled.div`
  max-height: 180px;
  overflow-y: auto;
  width: calc(100% + 32px);
  display: block;
  margin-left: -16px;

  ${props =>
    props.theme.notMobile(`
    position: absolute;
    width: 100%;
    margin-left: 0;
    z-index: 2;
    padding: 8px 0;
    
    background-color: white;
    box-shadow: ${props.theme.variable('baseBoxShadow')};
  `)};
`;

export const SelectOption =
  styled.div <
  { active: boolean } >
  `
  padding: 0 16px;

  cursor: pointer;

  font-size: ${props => props.theme.variable('textMedium')};
  font-weight: 500;
  line-height: 30px;

  color: ${props => (props.active ? props.theme.variable('primaryColor') : 'inherit')};

  &:hover:before {
    height: 30px;
    width: calc(100% + 32px);
    display: block;
    margin-left: -16px;
    margin-bottom: -30px;

    background-color: ${props => props.theme.variable('lightColor')};

    content: ' ';
  }
`;

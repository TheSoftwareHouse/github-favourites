import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  padding: 16px 20px;

  background-color: ${props => props.theme.variable('primaryLightColor')};
  box-shadow: ${props => props.theme.variable('baseBoxShadow')};

  img {
    width: 80px;
    height: 67px;
  }

  .header__back {
    margin-right: 10px;
  }

  ${props =>
    props.theme.notMobile(`
      img {
        width: 100px;
        height: 83px;
      }
  `)};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  ${props =>
    props.theme.notMobile(`
      width: 100%;
      max-width: 900px;
      margin: auto;
  `)};
`;

export const HeaderTitle = styled.h1`
  flex: 1 1 auto;

  font-size: ${props => props.theme.variable('textBig')};
  font-weight: 500;

  color: ${props => props.theme.variable('primaryDarkColor')};

  ${props =>
    props.theme.notMobile(`
      font-size: ${props.theme.variable('textSuperBig')};
  `)};
`;

import styled from '@emotion/styled';

import { Box } from 'components';

export const FavouriteBoxWrapper = styled(Box)`
  position: relative;

  a {
    font-weight: 500;
    font-size: ${props => props.theme.variable('textNormal')};
    line-height: 26px;
    text-decoration: none;
    color: ${props => props.theme.variable('textDarkColor')};

    margin-bottom: 8px;

    &:hover {
      color: ${props => props.theme.variable('primaryColor')};
    }
  }

  .favourite-box__footer .favourite-box__menu {
    display: none;
  }

  ${props =>
    props.theme.notMobile(`
      &:hover {
        background-color: ${props.theme.variable('textSuperLightColor')};
    
        .favourite-box__footer .favourite-box__menu {
          display: inline-flex;
        }
      }
  `)};
`;

export const FavouriteHoverMenu = styled.div``;

export const FavouriteFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export const FavouriteSwipeMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.variable('primaryColor')};

  transition: width 0.2s;
`;

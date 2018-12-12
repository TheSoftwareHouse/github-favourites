import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'components';

import { HeaderWrapper, HeaderContent, HeaderTitle } from './Header.styles';
import { HeaderProps } from './Header.interface';

export const Header = ({ title, backUrl }: HeaderProps) => {
  return (
    <HeaderWrapper className="header">
      <HeaderContent className="header__content">
        {backUrl && (
          <Link to={backUrl} className="header__back">
            <Icon name="arrow-pointing-to-left" color="primaryDarkColor" />
          </Link>
        )}
        <HeaderTitle className="header__title">{title}</HeaderTitle>
        <img src={require('assets/images/logo.png')} className="header-logo" alt="Logo" />
      </HeaderContent>
    </HeaderWrapper>
  );
};

import React from 'react';

import { Header } from 'components';

import { LayoutProps } from './Layout.interface';
import { LayoutWrapper, LayoutContentWrapper, LayoutContent } from './Layout.styles';

export const Layout = ({ children, title, backUrl }: LayoutProps) => {
  return (
    <LayoutWrapper className="layout">
      <Header title={title} backUrl={backUrl} />
      <LayoutContentWrapper>
        <LayoutContent className="layout__content">{children}</LayoutContent>
      </LayoutContentWrapper>
    </LayoutWrapper>
  );
};

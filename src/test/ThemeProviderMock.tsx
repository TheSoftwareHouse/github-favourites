import React, { ReactNode } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Theme } from 'theme/Theme';

export const ThemeProviderMock = ({children}: {children: ReactNode}) => (
  <ThemeProvider theme={Theme}>
    {children}
  </ThemeProvider>
)
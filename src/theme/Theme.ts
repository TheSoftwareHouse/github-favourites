import { Theme as ThemeInterface } from './Theme.interface';

const variables: { [s: string]: string } = {
  //Colors
  primaryDarkColor: '#186588',
  primaryLightColor: '#55c4f5',
  primaryColor: '#1794c2',
  lightColor: '#f5f5f5',
  superLightColor: '#f5f5f5',
  whiteColor: '#fff',
  orangeColor: '#fbe1b9',
  textColor: '#565656',
  textDarkColor: '#282828',
  textLightColor: '#9f9f9f',
  textSuperLightColor: '#dedede',
  //Styles
  baseBoxShadow: '0 2px 6px rgba(171, 178, 183, 0.5)',
  baseBorderRadius: '3px',
  //Text
  textSmall: '14px',
  textMedium: '16px',
  textNormal: '18px',
  textBig: '26px',
  textSuperBig: '32px',
  //Margins
  marginSmall: '4px',
  marginMedium: '8px',
  marginBig: '16px',
  marginSuperBig: '32px',
};

export const Theme: ThemeInterface = {
  variable: (variable: string) => variables[variable],
  notMobile: (css: string) => `@media only screen and (min-width: 768px) { ${css} }`,
};

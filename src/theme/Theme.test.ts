import { Theme } from './Theme';

describe('Theme object', () => {
  it('returns variable correctly', () => {
    expect(Theme.variable('whiteColor')).toEqual('#fff');
    expect(Theme.variable('primaryDarkColor')).toEqual('#186588');
  });

  it('returns desktop media query correctly', () => {
    expect(Theme.notMobile('display:none;')).toEqual('@media only screen and (min-width: 768px) { display:none; }');
  });
});

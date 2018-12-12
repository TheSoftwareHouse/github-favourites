export interface Theme {
    variable: Function,
    notMobile: (css:string) => string,
};
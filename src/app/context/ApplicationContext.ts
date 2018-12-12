import { createContext } from 'react';

import { ApplicationContextProps } from './ApplicationContext.interface';

export const ApplicationContext = createContext<ApplicationContextProps>({
  favourites: [],
});

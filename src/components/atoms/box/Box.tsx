import React from 'react';

import { BoxWrapper } from './Box.styles';
import { BoxProps } from './Box.interface';

export const Box = ({ children, className }: BoxProps) => (
  <BoxWrapper className={`${className || ''} box`}>{children}</BoxWrapper>
);

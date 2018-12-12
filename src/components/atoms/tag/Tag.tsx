import React from 'react';

import { TagProps } from './Tag.interface';
import { TagWrapper } from './Tag.styles';

export const Tag = ({color, className, children}:TagProps) => (
  <TagWrapper className={`${className || ''} tag`} color={color}>
    <span>{children}</span>
  </TagWrapper>
)
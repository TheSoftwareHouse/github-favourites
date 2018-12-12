import React from 'react';

import { LabelProps } from './Label.interface';
import { LabelWrapper } from './Label.styles';

export const Label = ({ title, htmlFor, className, onClick }: LabelProps) => (
  <LabelWrapper className={className || ''} htmlFor={htmlFor} onClick={onClick}>
    {title}
  </LabelWrapper>
);

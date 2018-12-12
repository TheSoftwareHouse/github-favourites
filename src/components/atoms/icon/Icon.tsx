import React from 'react';

import { IconProps } from './Icon.interface';
import { IconWrapper } from './Icon.styles';

export const Icon = ({ size, name, color, className }: IconProps) => {
  const svg = require(`!raw-loader!assets/icons/${name}.svg`);

  return (
    <IconWrapper size={size} className={`${className || ''} icon`} color={color} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

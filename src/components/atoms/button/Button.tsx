import React from 'react';

import { Icon } from 'components';

import { ButtonWrapper } from './Button.styles';
import { ButtonProps } from './Button.interface';

export const Button = ({ className, icon, color, children, disabled, onClick }: ButtonProps) => (
  <ButtonWrapper
    className={`${className ? className : ''} button${disabled ? ' button--disabled' : ''}`}
    disabled={disabled}
    onClick={() => !disabled && onClick()}
    color={color}
  >
    {icon && <Icon className="icon" name={icon} color={color || 'primaryColor'} size="12px" />}
    {children}
  </ButtonWrapper>
);

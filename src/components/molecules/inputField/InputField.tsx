import React from 'react';

import { InputFieldWrapper, InputChartCounter } from './InputField.styles';
import { InputFieldProps } from './InputField.interface';

import { Label } from 'components';

export const InputField = ({ label, input }: InputFieldProps) => (
  <InputFieldWrapper className="input" filled={!!input.value}>
    <input {...input} id={input.name} className="input__field" />
    <Label htmlFor={input.name} title={label} className="input__label" />

    {input.maxLength && (
      <InputChartCounter className="input__counter">
        {input.value.length}&nbsp;/&nbsp;{input.maxLength}
      </InputChartCounter>
    )}
  </InputFieldWrapper>
);

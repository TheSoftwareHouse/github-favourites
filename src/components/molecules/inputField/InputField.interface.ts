import { ChangeEvent } from 'react';

export interface InputFieldProps {
  label: string,
  input: {
    name: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    maxLength?: number,
    placeholder?: string,
  };
}

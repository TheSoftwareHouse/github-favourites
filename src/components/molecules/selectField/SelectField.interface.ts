export interface SelectFieldProps {
  name: string;
  label: string;
  value: string;
  options: { [k: string]: string };
  onChange: (value: string) => void,
}

export interface SelectFieldState {
  isOpened: boolean;
}

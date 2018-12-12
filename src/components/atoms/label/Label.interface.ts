export interface LabelProps {
  title: string;
  htmlFor: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void;
}

import { ReactNode } from 'react';

export interface CollapsibleBoxProps {
  className?: string,
  children: ReactNode;
  collapsed: boolean;
  onToggleCollapse: (event: React.MouseEvent<HTMLDivElement>) => void;
}

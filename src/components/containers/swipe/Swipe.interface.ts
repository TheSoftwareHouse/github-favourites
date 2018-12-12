import { ReactNode } from 'react';

export interface SwipeProps {
  children: ReactNode,
  onTouchStart: () => void,
  onTouchMove: (input: {x: number, y: number}) => void,
  onTouchEnd: () => void,
  className?: string,
}

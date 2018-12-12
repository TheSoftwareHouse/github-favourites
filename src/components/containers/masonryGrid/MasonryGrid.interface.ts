import { ReactNodeArray, RefObject } from "react";

export interface MasonryGridProps {
  rowHeight: number,
  colWidth: string,
  children: ReactNodeArray,
  className?: string,
}

export interface MasonryGridState {
  ref: RefObject<HTMLDivElement>,
  spans: Array<Number>,
}
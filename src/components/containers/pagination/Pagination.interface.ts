import { ReactNode } from "react";

interface API<T> {
  onLoadMore: Function,
  items: Array<T>,
  allItemsLoaded: boolean,
  page: number,
  loading: boolean,
}

export interface PaginationProps<T> {
  itemsPerPage: number,
  onFetchItems: (page: number, itemsPerPage: number) => Promise<{items: Array<T>}>,
  children:  (props: API<T>) => ReactNode,
}

export interface PaginationState<T> {
  items: Array<T>,
  allItemsLoaded: boolean,
  page: number,
  loading: boolean,
}

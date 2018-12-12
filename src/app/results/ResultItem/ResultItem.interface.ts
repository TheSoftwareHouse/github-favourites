export interface ApiResponse {
  [k: string]: number;
}

export interface ResultItemProps {
  name: string;
  stars: number;
  fullName: string;
  url: string;
  getLanguages: () => Promise<ApiResponse>;
}

export interface ResultItemContainerProps {
  name: string;
  stars: number;
  fullName: string;
  url: string;
}

export interface ResultItemState {
  isCollapsed: boolean;
  isLoaded: boolean;
  languages: ApiResponse;
}

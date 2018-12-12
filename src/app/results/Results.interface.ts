export interface ResultItem {
  stargazers_count: number;
  name: string;
  description: string;
  full_name: string;
  html_url: string;
}

export interface ApiResponse {
  items: Array<ResultItem>;
}

export interface ResultsProps {
  fetchRepositories: (page: number, itemsPerPage: number) => Promise<ApiResponse>;
}

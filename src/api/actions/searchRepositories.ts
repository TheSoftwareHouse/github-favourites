import { Action } from '../Action.interface';

type ActionType = (search: string, params: { [k: string]: string }, page: number, itemsPerPage: number) => Action;

export const searchRepositories: ActionType = (search, params, page, itemsPerPage) => ({
  endpoint: 'search/repositories',
  method: 'GET',
  params: {
    q: `${search} ${Object.keys(params)
      .map(p => `${p}:${params[p]}`)
      .join(' ')}`,
    sort: 'stars',
    page,
    per_page: itemsPerPage,
  },
});

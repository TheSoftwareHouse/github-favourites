import { Action } from '../Action.interface';

type ActionType = (repository: string) => Action;

export const getLanguagesByRepository: ActionType = repository => ({
  endpoint: `repos/${repository}/languages`,
  method: 'GET',
});

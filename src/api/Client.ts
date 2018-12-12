import { stringify } from 'qs';

import { Action } from './Action.interface';

export class Client {
  apiUrl: string;
  accessToken?: string;

  constructor(apiUrl: string, accessToken?: string) {
    this.apiUrl = apiUrl;
    this.accessToken = accessToken;
  }

  dispatchAction = <T>(action: Action) => {
    return fetch(this.parametrizeEndpoint(action.endpoint, action.params), {
      method: action.method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: action.body ? JSON.stringify(action.body) : undefined,
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  };

  parametrizeEndpoint = (endpoint: string, params?: object) => {
    return this.apiUrl + endpoint + '?' + stringify({...params,
      ...(this.accessToken ? {access_token: this.accessToken} : {})
    });
  };
}

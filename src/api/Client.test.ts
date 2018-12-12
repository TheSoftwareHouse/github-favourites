import { Client } from './Client';

describe('Client class', () => {
  const client = new Client('http://example.com', 'foo_token');
  const mockFetch = jest.fn();

  it('fetches with proper URL and BODY', async () => {
    window.fetch = (...params) =>
      new Promise(function(resolve) {
        mockFetch(...params);
        const response = new Response();

        resolve({
          ...response,
          ok: true,
          json: () => new Promise(resolve => resolve({})),
        });
      });

    await client.dispatchAction({
      method: 'POST',
      endpoint: '/example',
      params: {
        foo: 'bar',
      },
      body: {
        foo: 'bar',
      },
    });

    expect(mockFetch).toHaveBeenCalledWith('http://example.com/example?foo=bar&access_token=foo_token', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      mode: 'cors',
      body: '{"foo":"bar"}',
    });
  });

  it('throws exception on bad response', async () => {
    window.fetch = (...params) =>
      new Promise(function(resolve) {
        mockFetch(...params);
        const response = new Response();

        resolve({
          ...response,
          ok: false,
          json: () => new Promise(resolve => resolve({})),
          statusText: 'Api Error',
        });
      });

    expect(
      client.dispatchAction({
        method: 'POST',
        endpoint: '/example',
      })
    ).rejects.toEqual(new Error('Api Error'));
  });
});

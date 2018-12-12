import { searchRepositories } from './searchRepositories';

describe('searchRepositories', () => {
  it('creates proper action definition', async () => {
    expect(
      searchRepositories(
        'foo',
        {
          foo: 'bar',
          baz: 'foo',
        },
        1,
        20
      )
    ).toEqual({
      endpoint: `search/repositories`,
      method: 'GET',
      params: {
        page: 1,
        per_page: 20,
        q: "foo foo:bar baz:foo",
        sort: "stars",
      }
    });
  });
});

import { getLanguagesByRepository } from './getLanguagesByRepository';

describe('getLanguagesByRepository', () => {
  it('creates proper action definition', async () => {
    expect(getLanguagesByRepository('foo')).toEqual({
      endpoint: `repos/foo/languages`,
      method: 'GET',
    });
  });
});

import React, { Component } from 'react';

import { render, waitForElement } from 'react-testing-library';

import { ApplicationContext } from './ApplicationContext';

describe('Application context', () => {
  it('return default context with empty array of favourites', async () => {
    const { getByText, container } = render(
      <ApplicationContext.Provider value={{ favourites: [{ name: 'foo', language: 'bar' }] }}>
        <ApplicationContext.Consumer>
          {({ favourites }) => (
            <div>
              {favourites.map((f, i) => (
                <span key={i} data-testid={i}>
                  {f.name}:{f.language}
                </span>
              ))}
            </div>
          )}
        </ApplicationContext.Consumer>
      </ApplicationContext.Provider>
    );

    await waitForElement(() => getByText(/foo:bar/i));
  });
});

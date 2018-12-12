import React from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';
import { ApplicationContext } from '../context/ApplicationContext';

import { Search } from './Search';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, className }: { children: string, to: string, className: string }) => (
    <a href={to} className={className || ''}>
      {children}
    </a>
  ),
}));

describe('Search component', () => {
  it('renders search page correctly', async () => {
    const context = {
      favourites: [
        {
          name: 'foo',
          language: 'javascript',
        },
      ],
      onAddFavourite: jest.fn(),
      onRemoveFavourite: jest.fn(),
    };

    const { getByText, container } = render(
      <ThemeProviderMock>
        <ApplicationContext.Provider value={context}>
          <Search />
        </ApplicationContext.Provider>
      </ThemeProviderMock>
    );

    await waitForElement(() => container.getElementsByClassName('search__box'));

    // Check the list from context
    expect(container.getElementsByClassName('favourite-box').length).toEqual(1);
    expect(container.getElementsByClassName('favourite-box__title')[0].getAttribute('href')).toEqual(
      '/results?name=foo&language=javascript'
    );

    // Button unavailable
    expect(container.getElementsByClassName('search__submit-button button--disabled').length).toEqual(1);

    // Enter name/description
    const inputField = container.getElementsByClassName('input__field')[0];
    fireEvent.change(inputField, { target: { value: 'New favourite' } });

    // Select language
    fireEvent.click(container.getElementsByClassName('select-field__input')[0]);
    await waitForElement(() => container.getElementsByClassName('select-field__options'));
    fireEvent.click(container.getElementsByClassName('select-field__option')[0]);

    // Button available
    expect(container.getElementsByClassName('search__submit-button button--disabled').length).toEqual(0);
    expect(container.getElementsByClassName('search__submit-button button').length).toEqual(1);

    // Add to favourites
    await fireEvent.click(container.getElementsByClassName('search__submit-button button')[0]);
    expect(context.onAddFavourite).toHaveBeenCalledWith('New favourite', 'javascript');

    // Check reset form and button disabled
    expect(inputField.value).toEqual('');
    expect(container.getElementsByClassName('search__submit-button button--disabled').length).toEqual(1);
  });
});

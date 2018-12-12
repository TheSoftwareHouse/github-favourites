import React from 'react';
import { MemoryRouter as Router, MemoryRouter } from 'react-router-dom';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { App } from './App';

describe('App component', () => {
  it('renders app correctly', async () => {
    const { container } = render(
      <MemoryRouter>
        <ThemeProviderMock>
          <App />
        </ThemeProviderMock>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();

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

    // Check length of favourites
    expect(container.getElementsByClassName('favourite-box').length).toEqual(1);

    // Delete favourite
    await fireEvent.click(container.getElementsByClassName('favourite-box__menu__delete')[0]);
    expect(container.getElementsByClassName('favourite-box').length).toEqual(0);
  });
});

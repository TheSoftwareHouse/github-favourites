import React from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { FavouriteBox } from './FavouriteBox';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, className }: { children: string, to: string, className: string }) => (
    <a href={to} className={className || ''}>
      {children}
    </a>
  ),
}));

describe('FavouriteBox component', () => {
  it('renders favourite box correctly', async () => {
    const item = {
      name: 'Foo',
      language: 'PHP',
      onDelete: jest.fn(),
      to: 'foo',
    };

    const { getByText, container } = render(
      <ThemeProviderMock>
        <FavouriteBox {...item} />
      </ThemeProviderMock>
    );

    await waitForElement(() => getByText(/Foo/i));

    expect(getByText(/PHP/i)).not.toEqual(null);
    expect(container.getElementsByClassName('favourite-box__footer').length).toEqual(1);
    expect(container.getElementsByClassName('favourite-box__menu').length).toEqual(2);

    const swipeContainer = container.getElementsByClassName('favourite-box-swipe')[0];

    await fireEvent.touchStart(swipeContainer, {
      touches: [
        {
          pageX: 0,
          pageY: 0,
        }
      ]
    });

    await fireEvent.touchMove(swipeContainer, {
      touches: [
        {
          pageX: 100,
          pageY: 0,
        }
      ]
    });

    await fireEvent.touchEnd(swipeContainer, {
      touches: [
        {
          pageX: 200,
          pageY: 0,
        }
      ]
    });

    fireEvent.click(getByText(/Delete/i));

    expect(item.onDelete).toHaveBeenCalled();
  });
});

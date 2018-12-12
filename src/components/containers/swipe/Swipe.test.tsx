import React from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { Swipe } from './Swipe';

describe('Swipe component', () => {
  const onTouchStart = jest.fn();
  const onTouchMove = jest.fn();
  const onTouchEnd = jest.fn();

  it('renders swipe HIC correctly and dispatch actions correctly', async () => {
    const { getByTestId, container } = render(
      <Swipe onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} data-testid="swipe-element">
        <div data-testid="swipe-inner">Test</div>
      </Swipe>
    );

    const element = getByTestId('swipe-element');

    await waitForElement(() => element);

    fireEvent.touchStart(element, {
      touches: [
        {
          pageX: 0,
          pageY: 0,
        }
      ]
    });

    expect(onTouchStart).toHaveBeenCalled();

    fireEvent.touchMove(element, {
      touches: [
        {
          pageX: 100,
          pageY: 0,
        }
      ]
    });

    expect(onTouchMove).toHaveBeenCalledWith({
      x: 100,
      y: 0,
    });

    fireEvent.touchEnd(element, {
      touches: [
        {
          pageX: 200,
          pageY: 0,
        }
      ]
    });

    expect(onTouchEnd).toHaveBeenCalled();
  });
});

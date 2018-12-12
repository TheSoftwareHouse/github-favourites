import React from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { Button } from './Button';

describe('Button component', () => {
  it('renders button correctly', async () => {
    const onClick = jest.fn();
  
    const { getByText, container } = render(
      <ThemeProviderMock>
        <Button onClick={onClick}>Test</Button>
      </ThemeProviderMock>
    );
  
    await waitForElement(() => getByText(/Test/i));
  
    fireEvent.click(getByText(/Test/i));
    expect(onClick).toHaveBeenCalled();
  });

  it('renders button with icon correctly', async () => {
    const onClick = jest.fn();
  
    const { getByText, container } = render(
      <ThemeProviderMock>
        <Button onClick={onClick} icon="trash">Test</Button>
      </ThemeProviderMock>
    );
  
    await waitForElement(() => getByText(/Test/i));
  
    expect(container.getElementsByClassName('icon').length).toEqual(1);
  });

  it('blocks onClick when button is disabled', async () => {
    const onClick = jest.fn();
  
    const { getByText, container } = render(
      <ThemeProviderMock>
        <Button onClick={onClick} icon="trash" disabled={true}>Test</Button>
      </ThemeProviderMock>
    );
  
    await waitForElement(() => getByText(/Test/i));
  
    fireEvent.click(getByText(/Test/i));
    expect(onClick).toHaveBeenCalledTimes(0);
  });
})


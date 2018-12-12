import React from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { Label } from './Label';

describe('Label component', () => {
  it('renders label correctly', async () => {
    const onClick = jest.fn();

    const { getByText, container } = render(
      <ThemeProviderMock>
        <Label className="test-label" htmlFor="test" onClick={onClick} title="Test"/>
      </ThemeProviderMock>
    );

    await waitForElement(() => getByText(/Test/i));

    expect(container.getElementsByClassName('test-label').length).toEqual(1);

    fireEvent.click(getByText(/Test/i));
    
    expect(onClick).toHaveBeenCalled();
  });
});

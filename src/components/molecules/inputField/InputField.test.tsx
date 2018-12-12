import React from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { InputField } from './InputField';

describe('InputField component', () => {
  it('renders input field correctly', async () => {
    const onChange = jest.fn();

    const { container, getByPlaceholderText } = render(
      <ThemeProviderMock>
        <InputField
          label="Label"
          input={{
            name: 'name',
            value: 'test value',
            onChange: onChange,
            placeholder: 'Placeholder',
          }}
        />
      </ThemeProviderMock>
    );

    await waitForElement(() => getByPlaceholderText(/Placeholder/i));

    expect(container.getElementsByClassName('input__label').length).toEqual(1);

    fireEvent.change(getByPlaceholderText(/Placeholder/i), {target: {value: 'new value'}});

    expect(onChange).toHaveBeenCalled();
  });

  it('renders input field correctly with chartCounter', async () => {
    const onChange = jest.fn();

    const { getByText} = render(
      <ThemeProviderMock>
        <InputField
          label="Label"
          input={{
            name: 'name',
            value: 'test value',
            onChange: onChange,
            maxLength: 60,
            placeholder: 'Placeholder',
          }}
        />
      </ThemeProviderMock>
    );

    await waitForElement(() => getByText('10 / 60'));
  });
});

import React from 'react';

import { render, waitForElement, fireEvent } from 'react-testing-library';

import { ThemeProviderMock } from 'test/ThemeProviderMock';

import { SelectField } from './SelectField';

describe('SelectField component', () => {
  it('renders select field correctly and click on option dispatch onChange prop', async () => {
    const options = {
      foo: 'bar',
      baz: 'foobaz',
    };

    const onChange = jest.fn();

    const { getByText, container } = render(
      <ThemeProviderMock>
        <SelectField
          name="select"
          label="select"
          options={options}
          value={''}
          onChange={(value: string) => onChange(value)}
        />
      </ThemeProviderMock>
    );

    await waitForElement(() => container.getElementsByClassName('select-field'));

    //Toggle select options (it can be opened on click by placeholder or label)
    fireEvent.click(container.getElementsByClassName('select-field__input')[0]);
    fireEvent.click(container.getElementsByClassName('select-field__label')[0]);
    fireEvent.click(container.getElementsByClassName('select-field__input')[0]);


    await waitForElement(() => container.getElementsByClassName('select-field__options'));

    expect(container.getElementsByClassName('select-field__option').length).toEqual(2);

    fireEvent.click(container.getElementsByClassName('select-field__option')[0]);

    expect(onChange).toHaveBeenCalledWith('foo');
  });
});

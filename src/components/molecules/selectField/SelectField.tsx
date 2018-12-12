import React, { Component } from 'react';

import { SelectFieldWrapper, SelectInput, SelectOptions, SelectOption } from './SelectField.styles';
import { SelectFieldProps, SelectFieldState } from './SelectField.interface';

import { Label, Icon } from 'components';

export class SelectField extends Component<SelectFieldProps, SelectFieldState> {
  state: SelectFieldState = {
    isOpened: false,
  };

  handleSelectOption = (option: string) => {
    this.setState({
      isOpened: false,
    });

    this.props.onChange(option);
  };

  render() {
    return (
      <SelectFieldWrapper className="select-field" filled={!!this.props.value || this.state.isOpened}>
        <SelectInput
          className="select-field__input"
          onClick={() => {
            this.setState({ isOpened: !this.state.isOpened });
          }}
          hasBorder={!this.state.isOpened}
        >
          {!!this.props.value && this.props.options[this.props.value]}

          <Icon
            name={this.state.isOpened ? 'chevron-arrow-up' : 'chevron-arrow-down'}
            color="textLightColor"
            size="12px"
          />
        </SelectInput>

        <Label
          htmlFor={this.props.name}
          title={this.props.label}
          className="select-field__label"
          onClick={() => {
            this.setState({ isOpened: !this.state.isOpened });
          }}
        />

        {this.state.isOpened && (
          <SelectOptions className="select-field__options">
            {Object.keys(this.props.options).map(k => (
              <SelectOption
                onClick={() => this.handleSelectOption(k)}
                className="select-field__option"
                active={this.props.value === k}
                key={k}
              >
                {this.props.options[k]}
              </SelectOption>
            ))}
          </SelectOptions>
        )}
      </SelectFieldWrapper>
    );
  }
}

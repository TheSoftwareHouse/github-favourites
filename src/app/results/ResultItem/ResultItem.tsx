import React, { Component } from 'react';

import { CollapsibleBox, Tag, Spinner } from 'components';

import { ResultItemState, ResultItemProps } from './ResultItem.interface';
import { ResultItemTitle, ResultItemLanguages } from './ResultItem.styles';

export class ResultItem extends Component<ResultItemProps, ResultItemState> {
  state: ResultItemState = {
    isCollapsed: true,
    isLoaded: false,
    languages: {},
  };

  handleCollapse = () => {
    if (!this.state.isLoaded) {
      this.props.getLanguages().then(languages => {
        this.setState({ languages, isLoaded: true });
      }).catch(() => {
        console.warn('Limit exceeded');
      });
    }

    this.setState({ isCollapsed: !this.state.isCollapsed });
  };

  renderLanguages = () => {
    const sum = Object.keys(this.state.languages).reduce((prev, curr) => prev + this.state.languages[curr], 0);

    const countPercentage = (count: number) => Math.round((count / sum) * 100);

    return (
      <ResultItemLanguages className="result-item__languages">
        {Object.keys(this.state.languages).map(l => (
          <Tag key={l} color="primaryLightColor">{`${l} ${countPercentage(this.state.languages[l])}%`}</Tag>
        ))}
      </ResultItemLanguages>
    );
  };

  render() {
    return (
      <CollapsibleBox collapsed={this.state.isCollapsed} onToggleCollapse={this.handleCollapse} className="result-item">
        <ResultItemTitle href={this.props.url} target="_blank" className="result-item__title">
          {this.props.name}
        </ResultItemTitle>
        
        <Tag color="orangeColor" className="result-item__stars">{`${this.props.stars} Stars`}</Tag>

        {!this.state.isCollapsed && this.state.isLoaded && this.renderLanguages()}

        {!this.state.isCollapsed && !this.state.isLoaded && <Spinner />}
      </CollapsibleBox>
    );
  }
}

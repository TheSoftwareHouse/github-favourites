import React, { Component } from 'react';

import { Parent, Child } from './MasonryGrid.styles';
import { MasonryGridProps, MasonryGridState } from './MasonryGrid.interface';

export class MasonryGrid extends Component<MasonryGridProps, MasonryGridState> {
  state = { spans: [], ref: React.createRef<HTMLDivElement>() };

  computeSpans = () => {
    if (!this.state.ref.current) {
      return;
    }

    const { rowHeight } = this.props;
    const spans: Array<number> = [];

    Array.from(this.state.ref.current.children).forEach((child: Element) => {
      const span = Math.ceil(child.clientHeight / rowHeight);
      spans.push(span + 1);
    });

    this.setState({ spans });
  };

  componentDidMount() {
    this.computeSpans();
    window.addEventListener('resize', this.computeSpans);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.computeSpans);
  }

  componentDidUpdate(prevProps: MasonryGridProps) {
    if (this.props.children.length !== prevProps.children.length) {
      this.computeSpans();
    }
  }

  render() {
    return (
      <Parent ref={this.state.ref} {...this.props}>
        {this.props.children.map((child, i) => (
          <Child key={i} span={this.state.spans[i]}>
            {child}
          </Child>
        ))}
      </Parent>
    );
  }
}

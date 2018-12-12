import React, { Component } from 'react';

import { SwipeProps } from './Swipe.interface';
import { SwipeContainer } from './Swipe.styles';

export class Swipe extends Component<SwipeProps> {
  moveStart: { x: number, y: number } | null = null;

  getPosition = (event: React.TouchEvent<HTMLDivElement>) => {
    const { pageX, pageY } = event.touches[0];
    return { x: pageX, y: pageY };
  };

  handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const { x, y } = this.getPosition(event);
    this.moveStart = { x, y };
    this.props.onTouchStart();
  };

  handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!this.moveStart) {
      return;
    }

    const { x, y } = this.getPosition(event);
    const deltaX = x - this.moveStart.x;
    const deltaY = y - this.moveStart.y;

    this.props.onTouchMove({
      x: deltaX,
      y: deltaY,
    });
  };

  handeTouchEnd = () => {
    this.props.onTouchEnd();
    this.moveStart = null;
  };

  render() {
    const { children, onTouchStart, onTouchMove, onTouchEnd, ...props } = this.props;

    return (
      <SwipeContainer
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handeTouchEnd}
        onTouchMove={this.handleTouchMove}
        {...props}
      >
        {children}
      </SwipeContainer>
    );
  }
}

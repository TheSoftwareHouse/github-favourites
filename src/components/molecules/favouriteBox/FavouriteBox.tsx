import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Swipe, Tag, Button } from 'components';

import { FavouriteBoxState, FavouriteBoxProps } from './FavouriteBox.interface';
import { FavouriteBoxWrapper, FavouriteFooter, FavouriteSwipeMenu, FavouriteHoverMenu } from './FavouriteBox.styles';

const MINIMUM_SWIPE_DISTANCE = 200;

export class FavouriteBox extends Component<FavouriteBoxProps, FavouriteBoxState> {
  state: FavouriteBoxState = {
    isMenuOpened: false,
    menuWidth: 0,
  };

  onTouchStart = () => {
    if (!this.state.isMenuOpened) {
      this.setState({
        menuWidth: 0,
      });
    }
  };

  onTouchMove = (position: { x: number, y: number }) => {
    !this.state.isMenuOpened &&
      this.setState({
        menuWidth: -position.x < MINIMUM_SWIPE_DISTANCE ? -position.x : MINIMUM_SWIPE_DISTANCE,
      });

    this.state.isMenuOpened &&
      position.x > 0 &&
      this.setState({
        menuWidth: 0,
        isMenuOpened: false,
      });
  };

  onTouchEnd = () => {
    if (this.state.menuWidth < MINIMUM_SWIPE_DISTANCE) {
      this.setState({
        menuWidth: 0,
        isMenuOpened: false,
      });
    } else {
      this.setState({
        isMenuOpened: true,
      });
    }
  };

  renderDeleteButton = (color: string) => (
    <Button
      color={color}
      icon="trash"
      onClick={() => {
        this.setState({ isMenuOpened: false, menuWidth: 0 });
        this.props.onDelete();
      }}
      className="favourite-box__menu__delete"
    >
      Delete
    </Button>
  );

  render() {
    return (
      <Swipe
        className="favourite-box-swipe"
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
      >
        <FavouriteBoxWrapper className="favourite-box">
          <Link to={this.props.to} className="favourite-box__title">
            {this.props.name}
          </Link>

          <FavouriteFooter className="favourite-box__footer">
            <Tag className="favourite-box__tag" color="primaryLightColor">
              {this.props.language}
            </Tag>
            <FavouriteHoverMenu className="favourite-box__menu">
              {this.renderDeleteButton('textColor')}
            </FavouriteHoverMenu>
          </FavouriteFooter>

          <FavouriteSwipeMenu className="favourite-box__menu" style={{ width: this.state.menuWidth }}>
            {this.renderDeleteButton('whiteColor')}
          </FavouriteSwipeMenu>
        </FavouriteBoxWrapper>
      </Swipe>
    );
  }
}

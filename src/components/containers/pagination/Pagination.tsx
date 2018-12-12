import React, { Component } from 'react';

import { PaginationProps, PaginationState } from './Pagination.interface';

export class Pagination<T> extends Component<PaginationProps<T>, PaginationState<T>> {
  state: PaginationState<T> = {
    items: [],
    allItemsLoaded: false,
    page: 1,
    loading: true,
  };

  componentDidMount() {
    this.fetchItems();
  }

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
        loading: true,
      },
      () => {
        this.fetchItems();
      }
    );
  };

  fetchItems = () => {
    this.props
      .onFetchItems(this.state.page, this.props.itemsPerPage)
      .then(results => {
        this.setState({
          items: [...this.state.items, ...results.items],
          allItemsLoaded: results.items.length < this.props.itemsPerPage,
          loading: false,
        });
      })
      .catch((error:Error) => {
        console.warn(error.message);
      });
  };

  render() {
    const { onFetchItems, itemsPerPage, children, ...props } = this.props;

    return children({
      ...this.state,
      onLoadMore: this.handleLoadMore,
      ...props,
    });
  }
}

import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import { Search } from './search/Search';
import { ResultsContainer } from './results/ResultsContainer';

import { ApplicationContext } from './context/ApplicationContext';

import { AppState } from './App.interface';

export class App extends Component<any, AppState> {
  state: AppState = {
    favourites: [],
  };

  handleAddNewFavourite = (name: string, language: string) => {
    this.setState({
      favourites: [
        {
          name,
          language,
        },
        ...this.state.favourites,
      ],
    });
  };

  handleRemoveFavourite = (index: number) => {
    const favourites = this.state.favourites;
    favourites.splice(index, 1);
    this.setState({ favourites });
  };

  render() {
    return (
      <ApplicationContext.Provider
        value={{
          favourites: this.state.favourites,
          onAddFavourite: this.handleAddNewFavourite,
          onRemoveFavourite: this.handleRemoveFavourite,
        }}
      >
        <Route path="/" exact component={Search} />
        <Route path="/results/" component={ResultsContainer} />
      </ApplicationContext.Provider>
    );
  }
}
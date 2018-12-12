import React, { Component } from 'react';
import { stringify } from 'qs';

import { Layout, InputField, SelectField, Button, FavouriteBox } from 'components';
import { languages as options } from 'dictionaries/languages';
import { ApplicationContext } from '../context/ApplicationContext';

import { SearchBox, SearchSubmit, FavouriteList } from './Search.styles';
import { SearchState } from './Search.interface';

export class Search extends Component<any, SearchState> {
  state: SearchState = {
    nameValue: '',
    languageValue: '',
  };

  handleAddNewItem = () => {
    this.setState({
      languageValue: '',
      nameValue: '',
    });
  };

  render() {
    return (
      <ApplicationContext.Consumer>
        {({ favourites, onRemoveFavourite, onAddFavourite }) => (
          <Layout title="Search favourites">
            <SearchBox className="search__box">
              <InputField
                label="Repo name or description"
                input={{
                  name: 'name',
                  value: this.state.nameValue,
                  onChange: event => this.setState({ nameValue: event.target.value }),
                  maxLength: 60,
                }}
              />

              <SelectField
                name="language"
                label="Language"
                options={options}
                value={this.state.languageValue}
                onChange={language => this.setState({ languageValue: language })}
              />

              <SearchSubmit className="search__submit">
                <Button
                  className="search__submit-button"
                  icon="add-square-button"
                  disabled={!this.state.nameValue || !this.state.languageValue}
                  onClick={() => {
                    onAddFavourite && onAddFavourite(this.state.nameValue, this.state.languageValue);
                    this.handleAddNewItem();
                  }}
                >
                  Add to list
                </Button>
              </SearchSubmit>
            </SearchBox>

            <FavouriteList rowHeight={16} colWidth="250px" className="search__favourite-list">
              {favourites.map((i, index: number) => (
                <FavouriteBox
                  key={index}
                  name={i.name}
                  language={options[i.language]}
                  onDelete={() => onRemoveFavourite && onRemoveFavourite(index)}
                  to={`/results?${stringify(i)}`}
                />
              ))}
            </FavouriteList>
          </Layout>
        )}
      </ApplicationContext.Consumer>
    );
  }
}

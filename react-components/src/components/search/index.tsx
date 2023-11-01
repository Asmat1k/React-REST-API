import React from 'react';

import styles from './search.module.scss';

import { ApiProps } from '../../types/types';

interface SearchState {
  value: string;
}

interface SearchProps {
  onClick: (param: ApiProps) => void;
  onLoading: () => void;
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('lastSearch')
        ? localStorage.getItem('lastSearch')!
        : '',
    };
  }

  async componentDidMount() {
    await this.handleButtonClick();
  }

  handleInputEvent(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  async handleButtonClick() {
    localStorage.setItem('lastSearch', this.state.value);

    this.props.onLoading();
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${this.state.value.trim()}`
      );
      const json = await response.json();
      this.props.onClick(json);
    } catch (error) {
      console.log(error);
    } finally {
      this.props.onLoading();
    }
  }

  render() {
    return (
      <section className={styles.search}>
        <input
          type="text"
          className={styles.input}
          placeholder="Type StarWars character..."
          maxLength={20}
          value={this.state.value}
          onChange={(e) => this.handleInputEvent(e)}
        />
        <button
          className={styles.button}
          onClick={() => this.handleButtonClick()}
        >
          Search
        </button>
      </section>
    );
  }
}

export default Search;

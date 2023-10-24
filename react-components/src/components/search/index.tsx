import React from 'react';
import styles from './search.module.scss';

class Search extends React.Component {
  inputState = {
    value: '',
  };

  handleInputEvent(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <section className={styles.search}>
        <input
          type="text"
          className={styles.input}
          placeholder="Type StarWars character..."
          maxLength={20}
          onChange={(e) => this.handleInputEvent(e)}
        />
        <button className={styles.button} onClick={() => console.log('click')}>
          Search
        </button>
      </section>
    );
  }
}

export default Search;

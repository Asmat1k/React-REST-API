import React from 'react';
import styles from './search.module.scss';

class Search extends React.Component {
  render() {
    return (
      <section className={styles.search}>
        <input className={styles.input} type="text" />
        <button className={styles.button}>Search</button>
      </section>
    );
  }
}

export default Search;

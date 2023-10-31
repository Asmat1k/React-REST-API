import React, { useState } from 'react';

import styles from './search.module.scss';

import { ApiProps } from '../../types/types';

interface SearchProps {
  updateData: (param: ApiProps) => void;
  updateLoading: () => void;
}

function Search({ updateData, updateLoading }: SearchProps) {
  const [value, setValue] = useState<string>(
    localStorage.getItem('lastSearch')
      ? localStorage.getItem('lastSearch')!
      : ''
  );

  function handleInputEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  async function handleButtonClick() {
    localStorage.setItem('lastSearch', value);

    updateLoading();
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${value.trim()}`
      );
      const json: ApiProps = await response.json();
      updateData(json);
    } catch (error) {
      console.log(error);
    } finally {
      updateLoading();
    }
  }

  return (
    <section className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="Type StarWars character..."
        maxLength={20}
        value={value}
        onChange={(e) => handleInputEvent(e)}
      />
      <button className={styles.button} onClick={() => handleButtonClick()}>
        Search
      </button>
    </section>
  );
}

export default Search;

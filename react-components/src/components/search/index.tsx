import React, { useContext, useEffect, useState } from 'react';

import styles from './search.module.scss';

import searchApi from '../../api/api';
import Context from '../../context';

function Search() {
  const { updateLoadingState, updateDataState } = useContext(Context);

  const [value, setValue] = useState<string>(
    localStorage.getItem('lastSearch')
      ? localStorage.getItem('lastSearch')!
      : ''
  );

  useEffect(() => {
    handleButtonClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleInputEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  async function handleButtonClick() {
    localStorage.setItem('lastSearch', value);

    updateLoadingState();
    const json = await searchApi(value);
    updateDataState(json!);
    updateLoadingState();
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

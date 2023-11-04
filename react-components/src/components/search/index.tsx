import React, { useContext, useEffect, useState } from 'react';

import styles from './search.module.scss';

import searchApi from '../../api/api';
import Context from '../../context';
import { useNavigate } from 'react-router-dom';

function Search() {
  const { updateLoadingState, updateDataState, updateNumberState } =
    useContext(Context);

  const navigate = useNavigate();
  const [value, setValue] = useState<string>(
    localStorage.getItem('lastSearch')
      ? localStorage.getItem('lastSearch')!
      : ''
  );

  const [number, setNumber] = useState<number>(10);

  useEffect(() => {
    handleButtonClick();
    navigate('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleInputEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleInputNumberEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setNumber(+event.target.value);
  }

  function handleBlur() {
    handleButtonClick();
  }

  async function handleButtonClick(
    event?: React.MouseEvent<HTMLButtonElement>
  ) {
    if (event) event.preventDefault();
    updateNumberState(number);

    localStorage.setItem('lastSearch', value);

    updateLoadingState();
    const json = await searchApi(value);
    updateDataState(json!);

    updateLoadingState();
  }

  return (
    <form className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="Type StarWars character..."
        maxLength={20}
        value={value}
        onChange={(e) => handleInputEvent(e)}
      />
      <input
        className={styles.number}
        type="number"
        min="1"
        max="10"
        value={number}
        onChange={(e) => handleInputNumberEvent(e)}
        onBlur={() => handleBlur()}
      />
      <button className={styles.button} onClick={(e) => handleButtonClick(e)}>
        Search
      </button>
    </form>
  );
}

export default Search;

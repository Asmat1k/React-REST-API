import { useContext } from 'react';
import styles from './pagination.module.scss';
import Context from '../../context';
import searchApi from '../../api/api';

function Pagination() {
  const { data, updateDataState, updateLoadingState } = useContext(Context);
  const { response } = data;

  async function handleButtonClick(next?: boolean) {
    const value = localStorage.getItem('lastSearch')!;
    updateLoadingState();
    const json = await searchApi(
      value,
      next ? response.next : response.previous
    );
    updateDataState(json!);
    updateLoadingState();
  }

  return (
    <div className={styles.wrapper}>
      <button
        disabled={!response.previous}
        className={styles.button}
        onClick={() => {
          handleButtonClick(false);
        }}
      >
        &lt;
      </button>
      <div className={styles.count}>1</div>
      <button
        disabled={!response.next}
        className={styles.button}
        onClick={() => handleButtonClick(true)}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './pagination.module.scss';
import Context from '../../context';
import searchApi from '../../api/api';

function Pagination() {
  const { data, updateDataState, updateLoadingState } = useContext(Context);
  const { response } = data;

  const navigate = useNavigate();
  let nextPageNum: number;
  if (response.next) {
    nextPageNum = +response.next.slice(response.next.length - 1) - 1;
  }

  async function handleButtonClick(next?: boolean) {
    if (response.next) {
      navigate(`/?page=${next ? nextPageNum + 1 : nextPageNum - 1}`);
    }

    updateLoadingState();
    const json = await searchApi(
      next ? getQueryFromURL(response.next) : getQueryFromURL(response.previous)
    );
    updateDataState(json!);
    updateLoadingState();
  }

  function getQueryFromURL(URL: string) {
    return URL.slice(URL.indexOf('?'));
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

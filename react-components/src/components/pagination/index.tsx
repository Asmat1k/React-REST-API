import { useNavigate } from 'react-router-dom';
import styles from './pagination.module.scss';
import searchApi from '../../api/api';

import { updateLoading, updateResponse } from '../../store/reducers/dataSlice';
import { useDispatch } from 'react-redux';
import { ApiProps } from '../../types/types';
import { useAppSelector } from '../../hooks/redux';

function Pagination() {
  const response = useAppSelector((state) => state.dataReducer.response);

  const dispatch = useDispatch();
  const updateDataState = (json: ApiProps) => dispatch(updateResponse(json));
  const updateLoadingState = () => dispatch(updateLoading());

  const navigate = useNavigate();
  let nextPageNum: number;
  if (response.next) {
    nextPageNum = +response.next.slice(response.next.length - 1) - 1;
  }

  async function handleButtonClick(next?: boolean) {
    navigate(`/?page=${next ? nextPageNum + 1 : nextPageNum - 1}`);

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

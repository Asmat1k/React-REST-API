import styles from './list.module.scss';

import { ApiItem } from '../../types/types';
import Item from '../item';
import Pagination from '../pagination';
import { useContext } from 'react';
import Context from '../../utils/context/context';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

function List() {
  const navigate = useNavigate();
  const location = useLocation();

  const { data } = useContext(Context);
  const { response } = data;

  const number = useAppSelector((state) => state.dataReducer.number);
  const isLoading = useAppSelector((state) => state.dataReducer.isLoading);

  if (isLoading) {
    return (
      <div data-testid="loading-spinner" className={styles.loading_wrapper}>
        <div className={styles.loading}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  function handleBlockClick() {
    if (location.pathname.includes('details')) {
      navigate('/');
    }
  }

  const { results } = response;

  if (results && results.length > 0) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.data}>
          <div onClick={() => handleBlockClick()}>
            <ul className={styles.list}>
              {results.map((character: ApiItem, index: number) => {
                if (index < number) {
                  return <Item data={character} key={index} myKey={index} />;
                }
              })}
            </ul>
          </div>
          <Pagination />
        </div>
      </div>
    );
  }
  return <div className={styles.empty}>Nothing was found...</div>;
}

export default List;

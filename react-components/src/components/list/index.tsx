import styles from './list.module.scss';

import { ApiItem } from '../../types/types';
import Item from '../item';
import Pagination from '../pagination';
import { useContext } from 'react';
import Context from '../../context';

function List() {
  const { data } = useContext(Context);
  const { response, isLoading } = data;

  if (isLoading) {
    return (
      <div className={styles.loading_wrapper}>
        <div className={styles.loading}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  const { results } = response;

  if (results && results.length > 0) {
    return (
      <section className={styles.data}>
        <ul className={styles.list}>
          {results.map((character: ApiItem, index: number) => (
            <Item data={character} key={index} myKey={index} />
          ))}
        </ul>
        <Pagination />
      </section>
    );
  }
  return <div className={styles.empty}>Nothing was found...</div>;
}

export default List;

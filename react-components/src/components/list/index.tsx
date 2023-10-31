import styles from './list.module.scss';

import { ApiItem, ApiProps } from '../../types/types';
import Item from '../item';
import Pagination from '../pagination';

interface ListProps {
  data: ApiProps;
  isLoading: boolean;
}

function List({ data, isLoading }: ListProps) {
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

  const { results } = data;

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

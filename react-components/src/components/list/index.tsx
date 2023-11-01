import React from 'react';

import styles from './list.module.scss';

import { ApiProps } from '../../types/types';
import Item from '../item';

interface ListProps {
  data: ApiProps;
  isLoading: boolean;
}

class List extends React.Component<ListProps> {
  constructor(props: ListProps) {
    super(props);
  }

  render() {
    const { isLoading } = this.props;
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

    const { results } = this.props.data;

    if (results && results.length > 0) {
      return (
        <section className={styles.data}>
          <ul className={styles.list}>
            {results.map((character, index) => (
              <Item data={character} key={index} myKey={index} />
            ))}
          </ul>
        </section>
      );
    }
    return <div className={styles.empty}>Nothing was found...</div>;
  }
}

export default List;

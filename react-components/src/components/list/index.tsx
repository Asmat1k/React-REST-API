import React from 'react';
import styles from './list.module.scss';

interface ListProps {
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
    return <div className={styles.list}></div>;
  }
}

export default List;

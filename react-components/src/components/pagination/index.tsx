import styles from './pagination.module.scss';

function Pagination() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>&lt;</div>
      <div className={styles.count}>1</div>
      <div className={styles.button}>&gt;</div>
    </div>
  );
}

export default Pagination;

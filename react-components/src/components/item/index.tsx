import styles from './item.module.scss';
import { ApiItem } from '../../types/types';
import { Link } from 'react-router-dom';

interface ItemProps {
  data: ApiItem;
  myKey: number;
}

function Item({ data, myKey }: ItemProps) {
  return (
    <Link to={`details/${data.name}`} className={styles.link}>
      <li key={myKey} className={styles.item}>
        <h3>{data.name}</h3>
        <div>Year: {data.birth_year}</div>
        <div>Skin: {data.skin_color}</div>
        <div>Height: {data.height}</div>
        <div>Mass: {data.mass}</div>
      </li>
    </Link>
  );
}

export default Item;

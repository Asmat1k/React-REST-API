import React from 'react';
import styles from './item.module.scss';
import { ApiItem } from '../../types/types';

interface ItemProps {
  data: ApiItem;
  myKey: number;
}

class Item extends React.Component<ItemProps> {
  constructor(props: ItemProps) {
    super(props);
  }

  render() {
    const { data, myKey } = this.props;
    return (
      <li key={myKey} className={styles.item}>
        <h3 className="">{data.name}</h3>
        <div className="">Year: {data.birth_year}</div>
        <div className="">Skin: {data.skin_color}</div>
        <div className="">Height: {data.height}</div>
        <div className="">Mass: {data.mass}</div>
      </li>
    );
  }
}

export default Item;

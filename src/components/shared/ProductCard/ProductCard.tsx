import React,{FC} from 'react';
import {Link} from 'react-router-dom';
import {IProduct} from '../../../Types/products';
import styles from './ProductCard.module.scss';

const ProductCard:FC<IProduct> = ({id,name,price,currencySymbol,imageLocation}:IProduct) => {
  return (
    <Link to={`/products/${id}`} className={styles.card}>
      <img className={styles.logo} src={imageLocation} alt={name}/>
      <h3>Title: {name}</h3>
      <h4>Price: {`${price}${currencySymbol}`}</h4>
    </Link>
  )
}

export default ProductCard

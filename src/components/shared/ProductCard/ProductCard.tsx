import React,{FC} from 'react';
import {Link} from 'react-router-dom';
import {IProduct} from '../../../Types/products';
import styles from './ProductCard.module.scss';

const ProductCard:FC<IProduct> = ({id,name,price,currencySymbol,imageLocation}:IProduct) => {
  return (
    <Link to={`/products/${id}`} className={styles.card}>
      <img className={styles.logo} src={imageLocation} alt={name}/>
      <p className={styles.info}><span>Title: &nbsp; </span><h3> {name}</h3></p>
      <p className={styles.info}><span>Price: &nbsp; </span><h3>{`${price}${currencySymbol}`}</h3></p>
    </Link>
  )
}

export default ProductCard

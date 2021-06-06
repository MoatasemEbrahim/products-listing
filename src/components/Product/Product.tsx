import React,{FC,useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import productsApi from '../../apis/productsAPI';
import {IProduct} from '../../Types/products';
import Loader from '../shared/Loader/Loader';
import styles from './Product.module.scss';

const Product:FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [productData, setProductData] = useState<IProductData>();
  const {id} = useParams();

  useEffect(()=>{
    (async()=>{
      try {
        setLoading(true);
        const data = await productsApi.getOneProduct(id);
        setProductData(data);
      } catch (error) {
        console.warn(error.message);
      } finally {
        setLoading(false);
      }
    })()
  },[id])

  if(loading) return <Loader />

  if(!productData) return <h3>No Data</h3>

  const {name,price,currencySymbol,imageLocation,description} = productData || {};

  const handleClick = e => alert(id)

  return (
    <div className={styles.product}>
      <img className={styles.logo} src={imageLocation} alt={name}/>
      <h3>{name}</h3>
      <h4>{`${price}${currencySymbol}`}</h4>
      <p>{description}</p>
      <div className={styles.actions}>
        <button onClick={handleClick} className={styles.btn}>Add to Card</button>
        <button onClick={handleClick} className={`${styles.btn} ${styles['buy-now-btn']}`}>Buy Now</button>
      </div>
    </div>
  )
}

export default Product;

interface IProductData extends IProduct {
  description: string
}

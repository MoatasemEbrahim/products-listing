import React,{FC,useState,useEffect} from 'react';
import productsAPI from '../../apis/productsAPI';
import {IProduct} from '../../Types/products';
import ProductCard from '../shared/ProductCard/ProductCard';
import Loader from '../shared/Loader/Loader';
import styles from './Products.module.scss';

const Products:FC = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    (async()=>{
      try {
        const data = await productsAPI.getProducts();
        setProducts(data)
      } catch (error) {
        console.warn(error.message)
      } finally {
        setLoading(false)
      }
    })()
  },[])

  if(loading) return <Loader />

  return (
    <div className={styles.products}>
      {products.map(({id,name,price,currencySymbol,imageLocation}) => 
        <ProductCard 
          id={id}
          name={name}
          price={price}
          currencySymbol={currencySymbol}
          imageLocation={imageLocation}
        />
      )}
    </div>
  )
}

export default Products

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './Productcard';
import classes from './product.module.css'
import Loader from '../loader/Loader';
const Product = () => {
    const [products, setProducts] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true)
        axios.get('https://fakestoreapi.com/products').then((res)=> {
            setProducts(res.data);
            setIsLoading(false)
        })
        .catch((err) =>{
          console.error("error fetching products:", err);
        })
        setIsLoading(false)
    }, []);


  return (
    <>
    {isLoading || !products ? (<Loader />) : ( <section className={classes.products_container}>
    
        {products.map((singleProduct) => {
          return <ProductCard product={singleProduct} key={singleProduct.id} />;
        })}
    
    </section>
  )}
    </>
  )
};

export default Product

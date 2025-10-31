import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './Productcard';
import classes from './product.module.css'
const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res)=> {
            setProducts(res.data);
        })
        .catch((err) =>{
          console.error("error fetching products:", err);
        })
    }, []);


  return (
    <section className={classes.products_container}>
    
        {products.map((singleProduct) => {
          return <ProductCard product={singleProduct} key={singleProduct.id} />;
        })}
    
    </section>
  );
};

export default Product

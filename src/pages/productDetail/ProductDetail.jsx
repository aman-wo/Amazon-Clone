import React, { useState, useEffect } from 'react'
import classes from './productDetail.module.css'
import LayOut from '../../components/layOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import Productcard from '../../components/product/Productcard';
import Loader from '../../components/loader/Loader';

const ProductDetail = () => {
  const {productId} = useParams()
  console.log(productId)
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
 useEffect(() => {
   setIsLoading(true);

   axios
     .get(`${productUrl}/products/${productId}`)
     .then((res) => {
       setProduct(res.data);
       setIsLoading(false); // ✅ stop loading after success
     })
     .catch((err) => {
       console.log(err);
       setIsLoading(false); // ✅ stop loading after error
     });
 }, [productId]);
  return (
    <LayOut>
      {isLoading || !product ? <Loader /> : <Productcard product={product} flex={true} renderDesc={true} renderAdd={true} />}
    </LayOut>
  );
}

export default ProductDetail

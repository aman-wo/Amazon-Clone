import React, { useState, useEffect } from 'react'
import classes from './productDetail.module.css'
import LayOut from '../../components/layOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import Productcard from '../../components/product/Productcard';

const ProductDetail = () => {
  const {productId} = useParams()
  console.log(productId)
  const [product, setProduct] = useState(null)
 useEffect(() => {
   axios
     .get(`${productUrl}/products/${productId}`)
     .then((res) => setProduct(res.data))
     .catch((err) => console.log(err));
 }, [productId]);
  return (
    <LayOut>
      {product ? <Productcard product={product} /> : <p>Loading...</p>}
    </LayOut>
  );
}

export default ProductDetail

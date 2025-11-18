import React, { useEffect, useState } from 'react'
import classes from './results.module.css'
import LayOut from '../../components/layOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import Productcard from '../../components/product/Productcard'
import Loader from '../../components/loader/Loader'
const Results = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {categoryName} =useParams()
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res) => {setResults(res.data);
      setIsLoading(false)
    })
    .catch((err) => console.log(err))
    setIsLoading(false)
  }, [categoryName]);
 
  return (
    <LayOut>
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <section>
            <h1 style={{ padding: "30px" }}>Results</h1>
            <p style={{ padding: "30px" }}>Category / {categoryName}</p>
            <hr />
            <div className={classes.products_container}>
              {results?.map((product) => (
                <Productcard key={product.id} product={product} renderAdd={true} />
              ))}
            </div>
          </section>
        )}
      </>
    </LayOut>
  );
}

export default Results

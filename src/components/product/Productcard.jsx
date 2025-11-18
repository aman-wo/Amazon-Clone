import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../currencyFormat/CurrencyFormat';
import classes from './Product.module.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../dataProvider/DataProvider';
import { Type } from '../../utility/action.type';

const Productcard = ({product, flex, renderDesc, renderAdd}) => {
    const {image, title, id, price, rating, description} = product;

   const [state, dispatch]=useContext(DataContext)
console.log(state)
   const addTocart = ()=>{
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        price,
        rating,
        description,
      },
    });
    
   }
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3 className={classes.title}>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "720px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating
            name="full rated"
            defaultValue={rating?.rate}
            precision={0.1}
          />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}

          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addTocart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Productcard

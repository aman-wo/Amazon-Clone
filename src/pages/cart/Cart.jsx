import React, { useContext } from 'react'
import classes from './cart.module.css'
import LayOut from '../../components/layOut/LayOut'
import { DataContext } from '../../components/dataProvider/DataProvider'

import Productcard from '../../components/product/Productcard'
import CurrencyFormat from '../../components/currencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import { Type } from '../../utility/action.type'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
const Cart = () => {
  const [{basket, user}, dispatch] = useContext(DataContext)
  const total = basket.reduce((amount,item)=>{
   return item.price * item.amount + amount
  },0)

  const increment = (item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }

  const decrement =(id)=>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps ! No items in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_product}>
                  <Productcard
                    key={i}
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                   <div className={classes.btn_container}>
                    <button className={classes.btn}   onClick={() => increment(item)}><SlArrowUp size={15}/></button>
                    <span>{item.amount}</span>
                    <button className={classes.btn} onClick={() => decrement(item.id)}><SlArrowDown size={15}/></button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox"></input>
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart

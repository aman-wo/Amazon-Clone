import React, { useContext } from 'react'
import { IoIosSearch } from "react-icons/io";
import { GiDeliveryDrone } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import classes from "./header.module.css";
import Lowerheader from './Lowerheader';
import  { DataContext } from '../dataProvider/DataProvider';
import { auth } from '../../utility/firebase';

const Header = () => {

  const [{user, basket}, dispatch]=useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount
  }, 0)
  return (
    <section className={classes.fixed}>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}

          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
        </div>
        {/* delivery */}
        <div className={classes.delivery}>
          <span>
            <IoLocationSharp />
          </span>

          <p>Deliver to</p>
          <span>Ethiopia</span>
        </div>

        <div className={classes.search}>
          {/* search */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="search product" />
          {/* icon */}
          <IoIosSearch size={25} />
        </div>
        <div className={classes.order_container}>
          <a href="#" className={classes.language}>
            <img
              src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2477519645.jpg"
              alt=""
            />

            <select>
              <option value="">EN</option>
            </select>
          </a>
          {/* three components */}
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={()=>auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <span>Hello, Sign In</span>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
           
          </Link>
          {/* orders */}
          <Link to="/orders">
            <p>returns</p>
            <span>& orders</span>
          </Link>
          {/* cart */}
          <Link to="/cart" className={classes.cart}>
            {/* icon */}
            <GiDeliveryDrone size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <Lowerheader />
    </section>
  );
}

export default Header

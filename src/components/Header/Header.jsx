import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { GiDeliveryDrone } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";

import classes from "./header.module.css";
import Lowerheader from './Lowerheader';
const Header = () => {
  return (
    <>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}

          <a href="#">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
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
          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          {/* orders */}
          <a href="">
            <p>returns</p>
            <span>& orders</span>
          </a>
          {/* cart */}
          <a href='' className={classes.cart}>
            {/* icon */}
            <GiDeliveryDrone size={35} />
            <span>0</span>
          </a>
        </div>
      </section>
      <Lowerheader />
    </>
  );
}

export default Header

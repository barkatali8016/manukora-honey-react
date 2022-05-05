import React, { useState } from "react";
import classes from "./Header.module.css";
import Cart from "../Cart/Cart";
const Header = (props) => {
  const [cartIsHide, setCartIsHide] = useState(true);
  const cartHandler = () => {
    setCartIsHide(!cartIsHide);
  };
  return (
    <header className={classes.header}>
      <div className={classes["left-nav"]}>
        <img
          className={classes.logo}
          src={process.env.PUBLIC_URL + "/logo_header.png"}
          alt="Logo"
        />
        <ul className={classes.navigation}>
          <li className={classes.link}>
            <a href="#">Shop</a>
          </li>
          <li className={classes.link}>
            {" "}
            <a href="#">Learn</a>
          </li>
          <li className={classes.link}>
            {" "}
            <a href="#">Reviews</a>
          </li>
        </ul>
      </div>
      <div className={classes["right-nav"]}>
        <button className={`${classes["search-btn"]} ${classes.btn}`}>
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <button className={`${classes["person-btn"]} ${classes.btn}`}>
          <ion-icon name="person"></ion-icon>
        </button>
        <button
          onClick={cartHandler}
          className={`${classes["cart-btn"]} ${classes.btn}`}
        >
          <ion-icon name="cart"></ion-icon> ( 1 )
        </button>
      </div>
      {!cartIsHide && <Cart />}
    </header>
  );
};
export default Header;

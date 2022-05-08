import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import CartedProduct from "./CartedProduct";
import SuggestedProduct from "./SuggestedProduct";
const CartBackdrop = (props) => {
  return (
    <div
      onClick={props.onCloseClick}
      className={classes["cart-backdrop"]}
    ></div>
  );
};
const CartOverlay = (props) => {
  return (
    <div className={classes["cart-overlay"]}>
      <header className={classes["cart-header"]}>
        <h1>Your Cart</h1>
        <button
          onClick={props.onCloseClick}
          className={classes["cart-close-btn"]}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </header>
      <section className={classes["cart-body"]}>
        <div className={classes["progress-section"]}>
          <p className={classes["cart-text"]}>
            You are $26.00 USD away from{" "}
            <span className={classes["cart-bold-text"]}>FREE SHIPPING.</span>
          </p>
          <div className={classes["cart-progress-holder"]}>
            <div className={classes["cart-progressbar"]}>
              <div className={classes["cart-progress"]}></div>
            </div>
          </div>
        </div>
        <div className={classes["cart-products-section"]}>
          <div className={classes["cart-product-list"]}>
            <CartedProduct />
            <CartedProduct />
          </div>
          <div className={classes["product-suggestion-section"]}>
            <h4 className={classes["suggested-heading"]}>
              Frequently bought together
            </h4>
            <div className={classes["suggestion-list"]}>
              <SuggestedProduct />
              <SuggestedProduct />
            </div>
          </div>
        </div>
      </section>
      <footer className={classes["cart-footer"]}>
        <div className={classes["sms-section"]}>
          <div className={classes["sms-input-grp"]}>
            <input
              className={classes["sms-input"]}
              type="checkbox"
              id="checkboxSms"
              name="vehicle1"
              value="Bike"
            />
            <label className={classes["input-label"]} for="checkboxSms">
              Manage your orders via SMS
            </label>
          </div>
          <div className={classes["recharge-sms"]}>
            <ion-icon name="sparkles-outline"></ion-icon> rechargeSMS
          </div>
        </div>
        <div className={classes["price-section"]}>
          <h6>Subtotal (1 item)</h6>
          <h6>$56.00 USD</h6>
        </div>
        <div className={classes["btn-checkout"]}>
          <button>
            <ion-icon name="lock-closed"></ion-icon> Checkout
          </button>
        </div>
        <div className={classes["btn-shopping"]}>
          <button>Continue Shopping</button>
        </div>
      </footer>
    </div>
  );
};
const Cart = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <CartBackdrop onCloseClick={props.onCloseClick} />,
        document.getElementById("cart-backdrop-root")
      )}
      {ReactDOM.createPortal(
        <CartOverlay onCloseClick={props.onCloseClick} />,
        document.getElementById("cart-overlay")
      )}
    </>
  );
};
export default Cart;

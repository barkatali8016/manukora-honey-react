import classes from "./CartedProduct.module.css";
const CartedProduct = (props) => {
  return (
    <div className={classes["carted-product"]}>
      <div className={classes["cart-product"]}>
        <img
          className={classes["carted-img"]}
          src={process.env.PUBLIC_URL + "./Products/img1.jpeg"}
          alt="Carted Products"
        />
        <div className={classes["cart-product-text"]}>
          <div className={classes["cart-product-title"]}>
            Mānuka Honey MGO 100+
          </div>
          <button className={classes["cart-trash-btn"]}>
            <ion-icon name="trash-outline"></ion-icon>
          </button>
          <div className={classes["cart-product-desc"]}>8.82 oz (250g)</div>
          <div className={classes["cart-btn-holder"]}>
            <button
              className={`${classes["cart-btn"]} ${classes["cart-minus-btn"]}`}
            >
              -
            </button>
            <button
              className={`${classes["cart-btn"]} ${classes["cart-text-btn"]}`}
            >
              1
            </button>
            <button
              className={`${classes["cart-btn"]} ${classes["cart-plus-btn"]}`}
            >
              +
            </button>
          </div>
          <div className={classes["product-price"]}>$15.00 USD</div>
        </div>
      </div>
      <div className={classes["btn-subscribe"]}>
        <button>Upgrade to Subscription & Save 20%</button>
      </div>
    </div>
  );
};
export default CartedProduct;

import classes from "./Product.module.css";
const Product = (props) => {
  return (
    <div className={classes.product}>
      <img
        alt="product details"
        className={classes["product-img"]}
        src={process.env.PUBLIC_URL + "/Products/img1.jpeg"}
      />
      <div className={classes["product-text"]}>
        <p className={classes["product-title"]}>
          <a href="#">Mānuka Honey MGO 850+ (UMF 20+)</a>
        </p>
        <p className={classes["product-ratting"]}>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          (727)
        </p>
        <p className={classes["product-price"]}>From $70 USD</p>
      </div>
      <div className={classes["product-cta"]}>
        <button
          className={`${classes["cta-btn"]} ${classes["cart-btn"]}`}
          type="button"
        >
          Add to cart
        </button>
        <button
          className={`${classes["cta-btn"]} ${classes["explore-more-btn"]}`}
          type="button"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};
export default Product;

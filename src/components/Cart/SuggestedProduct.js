import classes from "./SuggestedProduct.module.css";
const SuggestedProduct = (props) => {
  return (
    <div className={classes["suggested-product"]}>
      <div className={classes["suggested-img-holder"]}>
        <img
          src={process.env.PUBLIC_URL + "./Products/img1.jpeg"}
          className={classes["carted-img"]}
          alt="Product details"
        />
      </div>
      <div className={classes["suggested-text-holder"]}>
        <p className={classes["cart-product-title"]}>Manukora Dose Spoon</p>
        <p className={classes["cart-product-price"]}>$5.00 USD</p>
      </div>
      <div className={classes["suggested-btn-holder"]}>
        <button className={classes["suggested-add-btn"]}>Add</button>
      </div>
    </div>
  );
};
export default SuggestedProduct;

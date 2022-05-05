import classes from "./ProductsList.module.css";
import Product from "./Product/Product";
const ProductsList = (props) => {
  return (
    <section className={classes["section-products-list"]}>
      <div className="container">
        <h1 className={classes["product-heading"]}>Shop Mānuka Honey</h1>
        <div className={classes["product-list"]}>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <button type="button" className={classes["btn-shop"]}>
          SHOP MĀNUKA HONEY
        </button>
      </div>
    </section>
  );
};
export default ProductsList;

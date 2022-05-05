import classes from "./Cart.module.css";
const Cart = (props) => {
  return (
    <div className={classes["cart-backdrop"]}>
      <div className={classes["cart-overlay"]}>
        <header className={classes["cart-header"]}>
          <h1>Your Cart</h1>
          <button className={classes["cart-close-btn"]}>
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
              <div className={classes["carted-product"]}>
                <div className={classes["cart-product"]}>
                  <img
                    className={classes["carted-img"]}
                    src={process.env.PUBLIC_URL + "./Products/img1.jpeg"}
                    alt="Carted Products Image"
                  />
                  <div className={classes["cart-product-text"]}>
                    <div className={classes["cart-product-title"]}>
                      Mānuka Honey MGO 100+
                    </div>
                    <button className={classes["cart-trash-btn"]}>
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                    <div className={classes["cart-product-desc"]}>
                      8.82 oz (250g)
                    </div>
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
              <div className={classes["carted-product"]}>
                <div className={classes["cart-product"]}>
                  <img
                    className={classes["carted-img"]}
                    src={process.env.PUBLIC_URL + "./Products/img1.jpeg"}
                    alt="Carted Products Image"
                  />
                  <div className={classes["cart-product-text"]}>
                    <div className={classes["cart-product-title"]}>
                      Mānuka Honey MGO 100+
                    </div>
                    <button className={classes["cart-trash-btn"]}>
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                    <div className={classes["cart-product-desc"]}>
                      8.82 oz (250g)
                    </div>
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
              <div className={classes["carted-product"]}>
                <div className={classes["cart-product"]}>
                  <img
                    className={classes["carted-img"]}
                    src={process.env.PUBLIC_URL + "./Products/img1.jpeg"}
                    alt="Carted Products Image"
                  />
                  <div className={classes["cart-product-text"]}>
                    <div className={classes["cart-product-title"]}>
                      Mānuka Honey MGO 100+
                    </div>
                    <button className={classes["cart-trash-btn"]}>
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                    <div className={classes["cart-product-desc"]}>
                      8.82 oz (250g)
                    </div>
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
            </div>
            <div className={classes["product-suggestion-section"]}>
              <h4 className={classes["suggested-heading"]}>
                Frequently bought together
              </h4>
              <div className={classes["suggestion-list"]}>
                <div className={classes["suggested-product"]}>
                  <div className={classes["suggested-img-holder"]}>
                    <img
                      src={process.env.PUBLIC_URL + "./Products/img1.jpeg"}
                      className={classes["carted-img"]}
                      alt="Product Image"
                    />
                  </div>
                  <div className={classes["suggested-text-holder"]}>
                    <p className={classes["cart-product-title"]}>
                      Manukora Dose Spoon
                    </p>
                    <p className={classes["cart-product-price"]}>$5.00 USD</p>
                  </div>
                  <div className={classes["suggested-btn-holder"]}>
                    <button className={classes["suggested-add-btn"]}>
                      Add
                    </button>
                  </div>
                </div>
                <div className={classes["suggested-product"]}>
                  <div className={classes["suggested-img-holder"]}>
                    <img
                      src={process.env.PUBLIC_URL + "./Products/img1.jpeg"}
                      className={classes["carted-img"]}
                      alt="Product Image"
                    />
                  </div>
                  <div className={classes["suggested-text-holder"]}>
                    <p className={classes["cart-product-title"]}>
                      Manukora Dose Spoon
                    </p>
                    <p className={classes["cart-product-price"]}>$5.00 USD</p>
                  </div>
                  <div className={classes["suggested-btn-holder"]}>
                    <button className={classes["suggested-add-btn"]}>
                      Add
                    </button>
                  </div>
                </div>
                <div className={classes["suggested-product"]}>
                  <div className={classes["suggested-img-holder"]}>
                    <img
                      src={process.env.PUBLIC_URL + "./Products/img1.jpeg"}
                      className={classes["carted-img"]}
                      alt="Product Image"
                    />
                  </div>
                  <div className={classes["suggested-text-holder"]}>
                    <p className={classes["cart-product-title"]}>
                      Manukora Dose Spoon
                    </p>
                    <p className={classes["cart-product-price"]}>$5.00 USD</p>
                  </div>
                  <div className={classes["suggested-btn-holder"]}>
                    <button className={classes["suggested-add-btn"]}>
                      Add
                    </button>
                  </div>
                </div>
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
    </div>
  );
};
export default Cart;

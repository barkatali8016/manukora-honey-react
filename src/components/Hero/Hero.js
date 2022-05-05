import classes from "./Hero.module.css";

const Hero = (props) => {
  return (
    <section className={classes["hero-section"]}>
      <div className={"container " + classes["hero-text__section"]}>
        <h1 className={classes["heading-primary"]}>
          Super honey from a special place
        </h1>
        <p className={classes["hero-text"]}>
          Delicious raw Mānuka honey, unique to the unspoiled wild bush of New
          Zealand. 100% traceable with high levels of MGO, associated with
          antibacterial activity.
        </p>
        <button type="button" className={classes["hero-cta-btn"]}>
          SHOP MĀNUKA HONEY
        </button>
      </div>
    </section>
  );
};
export default Hero;

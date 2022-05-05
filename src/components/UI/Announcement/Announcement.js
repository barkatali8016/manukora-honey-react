import React, { useEffect, useState } from "react";
import classes from "./Announcement.module.css";
const Announcement = (props) => {
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setIsHide(!isHide);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [isHide]);
  return (
    <section className={classes["section-announcement"]}>
      {!isHide && (
        <p className={classes["announcement-text"]}>
          Become a subscriber and save 20% |{" "}
          <a href="#" className={classes["announcement-subscribe-link"]}>
            Subscribe Today
          </a>{" "}
        </p>
      )}
      {isHide && (
        <p className={classes["announcement-text"]}>
          FREE SHIPPING FOR ORDERS OVER $50
        </p>
      )}
    </section>
  );
};

export default Announcement;

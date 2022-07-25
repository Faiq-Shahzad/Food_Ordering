import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button type="button">Your Cart</button>
        <FontAwesomeIcon icon={{prefix:'fa', iconName:'cart-shopping'}} />
      </header>
      <div className={styles["main-image"]}>
        <img
          src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
          alt="Food Cover"
          width="100%"
          height="500rem"
        />
      </div>
    </div>
  );
};

export default Header;

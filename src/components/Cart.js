import React from "react";
import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onHideCart}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>abcd</h2>
        </header>
        <div className={styles.content}>
          <p>abcd </p>
        </div>
        <div className={styles.footer}>
          <button type="button" className={styles.cancelBtn} onClick={props.onHideCart}>
            Close
          </button>
          <button type="button" className={styles.orderBtn} onClick={console.log("Ordering!!")}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

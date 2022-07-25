import React from "react";
import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onHide}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>abcd</h2>
        </header>
        <div className={styles.content}>
          <p>abcd </p>
        </div>
        <footer className={styles.actions}>
          <button type="button" onClick={props.onHide}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Cart;

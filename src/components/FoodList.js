import React, { useState } from "react";
import styles from "./FoodList.module.css";

const FoodList = (props) => {

  const [amount, setAmount] = useState(props.items.amount);

  const addHandler = (event) =>{
    console.log("Abc");
  } 

  return (
    <div className={styles.list}>
      {props.items.map((food) => (
        <>
          <div className={styles.food}>
            <div className={styles.leftdiv}>
              <h3>{food.title}</h3>
              <p style={{ fontStyle: "italic" }}>{food.description}</p>
              <h3 style={{color: "green"}}>${food.price}</h3>
            </div>
            <div className={styles.rightdiv} style={{justifyContent: "right", width:"10%"}}>
              <div>
                <h4>Quantity</h4>
                <input type="number" value={amount} onChange={{}}/>
              </div>
              <button type="submit" onClick= {addHandler} >+ Add</button>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default FoodList;

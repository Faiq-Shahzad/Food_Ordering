import { useState } from "react";
import Header from "./components/Header";
import Quote from "./components/Quote";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState(false);

  const showCartHandler = (event) =>{
    setCart(true);
  }

  const hideCartHandler = (event) =>{
    setCart(false);
  }

  const dummyFood = [
    {
      id: "f1",
      title: "Sushi",
      description: "Finest Fish and Veggies",
      amount: "1",
      price: "16.50",
    },
    {
      id: "f2",
      title: "Chicken Karhai",
      description: "Spicy chicken with gravy",
      amount: "1",
      price: "10.50",
    },
    {
      id: "f3",
      title: "Burger",
      description: "For Burgers",
      amount: "1",
      price: "12.25",
    },
    {
      id: "f4",
      title: "Ramen",
      description: "Spciy Noodles and Broth Along with multiple Toppings",
      amount: "1",
      price: "20.99",
    },
  ];

  return (
    <div>
      {cart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Quote />
      <FoodList items={dummyFood} />
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  let cartcntx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();
    let quantity = document.getElementById("amount_" + props.id).value
    cartcntx.addItem({...props.item, quantity:quantity} );
    console.log(quantity)
  };


  return (
    <form className={classes.form} >
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;

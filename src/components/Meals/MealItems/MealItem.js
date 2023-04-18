import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  let Price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{Price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} item={props}/>
      </div>
    </li>
  );
};

export default MealItem;

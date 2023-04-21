import { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

import deleteIcon from "./delete.jpg";

const CartItem = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price.toFixed(2)}</span>&nbsp;
          &nbsp;
          <span className={classes.amount}>x {props.quantity}</span>&nbsp;
          &nbsp;
          <div className={classes.summary1}>
            <span className={classes.amount}>
              ${(props.price * props.quantity).toFixed(2)}
            </span>
          </div>
          <div>
            <img
              onClick={() => {
                cartContext.removeItem(props);
              }}
              className={classes.deleteIcon}
              src={deleteIcon}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => {
            cartContext.decreaseItem(props);
          }}
        >
          −
        </button>
        <button
          onClick={() => {
            cartContext.increaseItem(props);
          }}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;

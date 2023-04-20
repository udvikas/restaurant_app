import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <CartItem
          id={item.id}
          key={item.key}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}

    </ul>
  );
  // Name: {item.name}, Price: {item.price}, Quantity: {item.quantity}
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {(cartcntx.totalAmount).toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

import { useContext } from 'react';
import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';

const CartItem = (props) => {
   const cartContext = useContext(CartContext);

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price.toFixed(2)}</span>&nbsp; &nbsp;
          <span className={classes.amount}>x {props.quantity}</span>&nbsp; &nbsp;
          <span className={classes.amount}>${(props.price * props.quantity).toFixed(2)}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => {cartContext.removeItem(props)}}>−</button>
        <button onClick={() => {cartContext.increaseItem(props)}}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

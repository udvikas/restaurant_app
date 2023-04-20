import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setUpdateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    let dummyItem = [...items];
    console.log(' empty dummy item',dummyItem)

    let Id = dummyItem.findIndex((i) => i.id === item.id )
    console.log(Id)
    if(Id === -1){
    setUpdateItems([...items, item]);

    } else {
      dummyItem[Id].quantity = Number(dummyItem[Id].quantity) + Number(item.quantity)
      // dummyItem[Id].totalAmount = Number(dummyItem[Id].totalAmount) + Number(item.totalAmount)
      setUpdateItems(dummyItem);
      console.log('dummy item',dummyItem)
    }

};

  const removeItemToCartHandler = (item) => {
    let itemsCopy = [...items];
    console.log(' empty dummy item',itemsCopy)

    let Id = itemsCopy.findIndex((i) => i.id === item.id )

    if (Id !== -1 && itemsCopy[Id].quantity < 2 ) {
      itemsCopy.splice(Id, 1);
      setUpdateItems(itemsCopy);
    } else {
      itemsCopy[Id].quantity--;
      setUpdateItems(itemsCopy);
    }

  };

 const increaseItemHandler = (item) => {
  let itemsCopy = [...items];
  console.log('empty dummy item',itemsCopy);

  let Id = itemsCopy.findIndex((i) => i.id === item.id );

  if (Id !== -1) {
    itemsCopy[Id].quantity++;
    setUpdateItems(itemsCopy);
  }
};




  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice = totalPrice + Number(item.price * item.quantity);
  })

  const cartContext = {
    items: items,
    totalAmount: totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    increaseItem: increaseItemHandler,
  };
  
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

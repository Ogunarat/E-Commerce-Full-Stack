import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cart) => {
    setCartItems((prevCart) => [
      ...prevCart,
      {
        ...cart,
        quantity: cart.quantity ? cart.quantity : 1,
      },
    ]);
  };
  const removeCart = (itemId) => {
    const cartFormItems = cartItems.filter((cartItem) => {
      return cartItem._id !== itemId;
    });
    setCartItems(cartFormItems);
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeCart, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};

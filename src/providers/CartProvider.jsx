import { PropTypes } from "prop-types";
import { useReducer, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cartReducer = (cart, action) => {
    switch (action.type) {
      case "add": {
        if (cart.find((item) => item.product._id === action.product._id))
          return cart.map((item) =>
            item.product._id === action.product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        else
          return [
            ...cart,
            {
              product: action.product,
              quantity: 1,
            },
          ];
      }
      case "subtract": {
        if (
          cart.find(
            (item) =>
              item.product._id === action.product._id && item.quantity > 1
          )
        ) {
          return cart.map((item) =>
            item.product._id === action.product._id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          );
        } else if (
          cart.find(
            (item) =>
              item.product._id === action.product._id && item.quantity === 1
          )
        )
          return cart.filter((item) => item.product._id !== action.product._id);
        return cart;
      }
      default: {
        throw Error("Invalid action type");
      }
    }
  };

  const amountReducer = (amount, action) => {
    switch (action.type) {
      case "add": {
        return parseFloat((amount + action.productPrice).toFixed(10));
      }
      case "subtract": {
        if (amount === 0) return 0;
        return parseFloat((amount - action.productPrice).toFixed(10));
      }
      default: {
        throw Error("Invalid action type");
      }
    }
  };

  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const [amount, dispatchAmount] = useReducer(amountReducer, 0);

  return (
    <CartContext.Provider
      value={{ cart, dispatchCart, amount, dispatchAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.any,
};

export default CartProvider;

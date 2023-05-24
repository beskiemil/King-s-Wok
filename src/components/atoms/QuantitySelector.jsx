import { PropTypes } from "prop-types";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "providers/CartProvider";
import Button from "./Button";

const QuantitySelector = ({ product }) => {
  const { cart, dispatchCart, dispatchAmount } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (action) => {
    dispatchCart(action);
    dispatchAmount(action);
  };

  useEffect(() => {
    if (cart && cart.find((item) => item.product._id === product._id))
      setQuantity(
        cart.find((item) => item.product._id === product._id).quantity
      );
    else setQuantity(0);
  }, [cart, product]);

  return (
    <div className="flex items-baseline bg-white text-xl">
      <Button
        text="-"
        onClick={() => handleQuantityChange({ type: "subtract", product })}
      />
      <div className="w-8 bg-white text-center text-black">{quantity}</div>
      <Button
        text="+"
        onClick={() => handleQuantityChange({ type: "add", product })}
      />
    </div>
  );
};

QuantitySelector.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default QuantitySelector;

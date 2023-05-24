import { useContext, useEffect, useState } from "react";

import { CartContext } from "providers/CartProvider";
import QuantitySelector from "components/atoms/QuantitySelector";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    var a = 0;
    if (cart.length > 0)
      cart.forEach((item) => {
        a += parseFloat((item.product.price * item.quantity).toFixed(10));
      });
    setSum(parseFloat(a.toFixed(10)));
  }, [cart]);

  return (
    <>
      {cart.length > 0 && (
        <div className="bg-greenGrey bg-opacity-90 p-4 text-white">
          <h1 className="text-center text-3xl">Koszyk</h1>
          {cart &&
            cart.map(({ product }) => (
              <div
                key={product._id}
                className="flex h-32 items-center gap-5 p-4 text-white"
              >
                <img
                  src={"http://localhost:3000/" + product.image}
                  className="h-20 w-20 rounded-[20px] object-cover object-center"
                />
                <h2 className="text-2xl">{product.name}</h2>
                <div className="ml-auto">
                  <QuantitySelector product={product} />
                </div>
              </div>
            ))}
          <div className="flex justify-center">
            <h3 className="">Suma: {sum}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;

import { PropTypes } from "prop-types";
import { useContext } from "react";

import QuantitySelector from "components/atoms/QuantitySelector";
import { ProductContext } from "providers/ProductProvider";
import ErrorPage from "views/ErrorPage";

const ProductBar = ({ productIndex }) => {
  const { data, status, error } = useContext(ProductContext).products;

  if (status === "loading") return <p>loading...</p>;
  if (status === "error") return <ErrorPage error={error} />;

  const product = data[productIndex];
  return (
    <div className="flex h-40 items-center gap-5 bg-greenGrey bg-opacity-90 p-4 text-white">
      <img
        src={"http://localhost:3000/" + product.image}
        className="h-32 w-32 rounded-[30px] object-cover object-center"
        alt={product.name}
      ></img>
      <div className="flex w-2/5 flex-col justify-between">
        <h1 className="text-2xl">{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      <div className="ml-auto">
        <QuantitySelector product={product} />
      </div>
    </div>
  );
};

ProductBar.propTypes = {
  productIndex: PropTypes.number.isRequired,
};

export default ProductBar;

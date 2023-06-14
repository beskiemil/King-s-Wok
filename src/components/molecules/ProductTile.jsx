import { PropTypes } from "prop-types";

import Button from "components/atoms/Button";

const ProductTile = ({ img, name, description }) => {
  return (
    <div className="flex w-96 flex-col items-center justify-center gap-3 bg-greenGrey bg-opacity-90 px-14 py-10 text-white">
      <img
        src={img}
        className="h-64 w-64 rounded-[50px] object-cover object-center"
        alt={name}
      />
      <h1 className="self-start text-2xl">{name}</h1>
      <p>{description}</p>
      <Button text="ZAMÓW" />
    </div>
  );
};

export default ProductTile;

ProductTile.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

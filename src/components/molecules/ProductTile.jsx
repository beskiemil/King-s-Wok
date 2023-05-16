import { PropTypes } from "prop-types";

import Button from "components/atoms/Button";

const ProductTile = ({ img, name, description }) => {
  return (
    <div className="flex w-96 flex-col items-center justify-center bg-greenGrey px-14 py-10">
      <img
        src={img}
        className="h-64 w-64 rounded-[50px] object-cover object-center"
      />
      <h1 className="">{name}</h1>
      <p>{description}</p>
      <Button text="ZAMÓW" />
    </div>
  );
};

ProductTile.PropTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductTile;

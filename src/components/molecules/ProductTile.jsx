import { PropTypes } from "prop-types";

import Button from "components/atoms/Button";

const ProductTile = ({ img, name, description }) => {
  return (
    <div className="flex w-4/5 flex-row items-center justify-center gap-6 bg-greenGrey bg-opacity-90 px-10 py-10 text-white md:gap-8 lg:w-80 lg:flex-col lg:gap-3 xl:w-96">
      <img
        src={"http://localhost:3000/" + img}
        className="h-[15rem] w-[15rem] rounded-[50px] object-cover object-center"
        alt={name}
      />
      <div className="flex flex-col gap-4 md:gap-6">
        <h1 className="self-start text-2xl">{name}</h1>
        <p className="text-md">{description}</p>
        <Button text="ZAMÓW" />
      </div>
    </div>
  );
};

export default ProductTile;

ProductTile.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

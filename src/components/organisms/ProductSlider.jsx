import { useContext } from "react";

import ErrorPage from "views/ErrorPage";
import ProductTile from "components/molecules/ProductTile";
import { ProductContext } from "providers/ProductProvider";

const ProductSlider = () => {
  const { data, status, error } = useContext(ProductContext).products;

  if (status === "loading") return <p>loading...</p>;
  if (status === "error") return <ErrorPage error={error} />;

  return (
    <>
      <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:justify-around lg:gap-0">
        {data.length > 0 &&
          data
            .slice(0, 3)
            .map((product) => (
              <ProductTile
                key={`product-tile-${product.name}`}
                img={product.image}
                name={product.name}
                description={product.description}
              />
            ))}
      </div>
    </>
  );
};

export default ProductSlider;

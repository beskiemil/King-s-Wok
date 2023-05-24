import { ProductContext } from "providers/ProductProvider";
import { useContext } from "react";

import ProductBar from "components/molecules/ProductBar";
import ErrorPage from "./ErrorPage";
import ShoppingCart from "components/organisms/ShoppingCart";

const MenuPage = () => {
  const { data, status, error } = useContext(ProductContext).products;

  if (status === "loading") return <p>loading...</p>;
  if (status === "error") return <ErrorPage error={error} />;
  return (
    <>
      <div className="col-span-2 col-start-2 flex flex-col gap-8">
        {data.length > 0 &&
          data.map((product, index) => (
            <ProductBar productIndex={index} key={product.name} />
          ))}
      </div>
      <div className="col-span-2 mx-auto w-4/6">
        <ShoppingCart />
      </div>
    </>
  );
};

export default MenuPage;

import { PropTypes } from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const ProductContext = createContext({});

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

const ProductProvider = ({ children }) => {
  const fetchProducts = async () => {
    const response = await fetch(`${API_ENDPOINT}/products`);
    if (!response.ok) throw new Error("Could not fetch products");
    return response.json();
  };
  const products = useQuery(["products"], fetchProducts);

  const fetchProduct = async (id) => {
    const response = await fetch(`${API_ENDPOINT}/products/${id}`);
    if (!response.ok) throw new Error("Could not fetch products");
    return response.json();
  };

  const useProduct = (id) => useQuery(["product", id], () => fetchProduct(id));

  return (
    <ProductContext.Provider value={{ products, useProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

ProductProvider.propTypes = {
  children: PropTypes.any,
};

import { PropTypes } from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const PostContext = createContext({});

const ProductProvider = ({ children }) => {
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    if (!response.ok) throw new Error("Could not fetch products");
    return response.json();
  };
  const posts = useQuery("posts", fetchProducts);

  const fetchProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    if (!response.ok) throw new Error("Could not fetch products");
    return response.json();
  };

  const usePost = (id) => useQuery(["post", id], () => fetchProduct(id));

  return (
    <PostContext.Provider value={{ posts, usePost }}>
      {children}
    </PostContext.Provider>
  );
};

export default ProductProvider;

ProductProvider.propTypes = {
  children: PropTypes.any,
};

import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Filter = ({ products, category }) => {
  const searchQuery = useSelector((state) => state.products.searchQuery);
  return (
    <div className="card-row">
      {searchQuery === ""
        ? // filter
          products.map((product) =>
            product.category === category || !category ? (
              <ProductCard key={product.id} product={product} />
            ) : null
          )
        : // search
          products.map((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ? (
              <ProductCard key={product.id} product={product} />
            ) : null
          )}
    </div>
  );
};

export default Filter;

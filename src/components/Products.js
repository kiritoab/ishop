import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../features/products";
import SkeletonCustomized from "./common/SkeletonCustomized";
import Filter from "./common/Filter";

const Products = () => {
  const products = useSelector((state) => state.products.products);

  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const showSkeleton = () => {
    return <SkeletonCustomized />;
  };

  const showProducts = () => {
    return <Filter products={products} category={category} />;
  };

  const btnDecorator = () => {
    return category === null ? "btn btn-dark" : "btn btn-outline-dark";
  };

  const womenBtnDecorator = () => {
    return category === "women's clothing"
      ? "btn btn-dark"
      : "btn btn-outline-dark";
  };

  // const handleClicked = (e) => {
  //   setCategory(e.target.id);
  //   buttonDecorator(e.target.id);
  // };

  // const buttonDecorator = (buttonID) => {
  //   return category === buttonID ? "btn btn-dark" : "btn btn-outline-dark";
  // };

  const menBtnDecorator = () => {
    return category === "men's clothing"
      ? "btn btn-dark"
      : "btn btn-outline-dark";
  };

  const jeweleryBtnDecorator = () => {
    return category === "jewelery" ? "btn btn-dark" : "btn btn-outline-dark";
  };

  const electronicsBtnDecorator = () => {
    return category === "electronics" ? "btn btn-dark" : "btn btn-outline-dark";
  };

  // const renderButton = (category) => {
  //   let className = "btn btn-dark"
  //   category === "women's clothing" ? className
  // }

  return (
    <div className="main">
      <div className="buttons">
        <button
          className={btnDecorator()}
          onClick={() => {
            setCategory(null);
          }}
        >
          All
        </button>
        <button
          className={womenBtnDecorator()}
          onClick={() => {
            setCategory("women's clothing");
          }}
        >
          Women
        </button>
        <button
          className={menBtnDecorator()}
          onClick={() => {
            setCategory("men's clothing");
          }}
        >
          Men
        </button>
        <button
          className={jeweleryBtnDecorator()}
          onClick={() => {
            setCategory("jewelery");
          }}
        >
          Jewelery
        </button>
        <button
          className={electronicsBtnDecorator()}
          onClick={() => {
            setCategory("electronics");
          }}
        >
          Electronics
        </button>
      </div>
      {products.length > 0 ? showProducts() : showSkeleton()}
    </div>
  );
};

export default Products;

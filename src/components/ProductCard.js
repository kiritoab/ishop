import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FiTag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { getProducts } from "../features/products";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = (product) => {
    //POST product in CART
    // console.log(product);
    dispatch({ type: "products/addToCart", payload: product });
  };

  return (
    <div className="card-box" key={product.id}>
      <div className="card-top">
        <FiTag className="card-tag" />
        <span className="card-category">{product.category.toUpperCase()}</span>
      </div>

      <div>
        <p className="card-title">{product.title.substring(0, 42)}...</p>
      </div>

      <div className="card-img-container">
        <Link to={"/products/" + product.id}>
          <img className="card-image" src={product.image} alt={product.title} />
        </Link>
      </div>

      <div className="card-bottom">
        <span className="card-price">
          <strong>${product.price}</strong>
        </span>
        <BsFillCartPlusFill
          className="card-cart"
          onClick={() => handleClick(product)}
          cursor="pointer"
        />
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products";
import { Link } from "react-router-dom";

const Cart = () => {
  // let [totalPrice, setTotalPrice] = useState(0);
  const productsInCart = useSelector((state) => state.products.cart);
  const [productCount, setProductCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleDelete = (id) => {
    console.log("THIS IS ID", id);
    // setProducts(updatedProducts);
    dispatch({ type: "products/delProductFromCart", payload: id });
  };

  const handleDeleteAll = () => {
    dispatch({ type: "products/delAllFromCart" });
  };

  // const renderCount = (product) => {
  //   if (productsInCart?.includes(product)) {
  //     setProductCount(productCount + 1);
  //   }
  //   return productCount;
  // };
  //console.log(productsInCart);

  // console.log(loading);
  return (
    <div className="cart-container">
      <div className="cart-top-container">
        {/* <p className="cart-title">Cart</p> */}
        <HiShoppingCart className="cart-cart" cursor="pointer" />
      </div>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Units</th>
            <th></th>
            <th>
              <button
                className="btn btn-dark"
                onClick={() => {
                  handleDeleteAll();
                }}
              >
                Delete All
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {productsInCart.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.title}</td>
                <td>
                  <img
                    className="cart-image"
                    alt={product.category}
                    src={product.image}
                  ></img>
                </td>
                <td>${product.price}</td>
                <td>{productCount}</td>
                <td>
                  <AiFillDelete
                    className="cart-delete"
                    style={{ cursor: "pointer" }}
                    // onClick={() => handleDelete(product.id)}
                    onClick={() => handleDelete(product.id)}
                  ></AiFillDelete>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/*Payment checkout */}
      <br />
      <Link to="checkout" className="btn btn-dark">
        Buy Now
      </Link>
    </div>
  );
};

export default Cart;

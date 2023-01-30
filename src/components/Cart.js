import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products";

const Cart = () => {
  // const [products, setProducts] = useState([]);
  // let [totalPrice, setTotalPrice] = useState(0);
  const productsInCart = useSelector((state) => state.products.cart);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const url = "https://fakestoreapi.com/products/";

  
  useEffect(() => {
    dispatch(getProducts());
    // setTimeout(() => {
    //   fetch(url)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw Error("Can not connect to the server!.");
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       // console.log(data);
    //       setProducts(data);
    //       setLoading(true);
    //     })
    //     .catch((e) => {
    //       console.log(e.message);
    //       setLoading(true);
    //     });
    // }, 2000);
  }, []);

  const handleDelete = (id) => {
    console.log("THIS IS ID", id)
    // setProducts(updatedProducts);
    dispatch({ type: "products/delProductFromCart", payload: id });
  };

  const handleDeleteAll = () => {
    dispatch({ type: "products/delAllFromCart" });
  };
  console.log(productsInCart);

  console.log(loading);
  return !loading ? (
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
                <td>{product.rating.count}</td>
                <td>
                  <AiFillDelete
                    className="cart-delete"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(product.id)}
                  ></AiFillDelete>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="three-dots">...</p>
  );
};

export default Cart;

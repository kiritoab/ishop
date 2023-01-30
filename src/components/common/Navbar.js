import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const productsInCart = useSelector((state) => state.products.cart);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <a className="logo" href="/">iShop</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTog" aria-controls="navbarTog" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarTog">
      <ul className="navbar-nav">
        <li className="navitem active">
          <NavLink className="navlinks" to="/">Home</NavLink>
        </li>
        <li className="navitem">
          <NavLink className="navlinks" to="/cart"> Cart </NavLink>
        </li>
        <li className="navitem">
          <a className="navlinks" href="#footer">Contacts</a>
        </li>
        <li className="navitem">
          <NavLink className="navlinks" to="/login"> Login </NavLink>
        </li>
      </ul>
      <form className="search">
        <input className="form-control" type="search" placeholder="Search"></input>
      </form>
    </div></div>
  </nav>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <span>
    //       <NavLink className="navbar-brand" to="/">
    //         iShop
    //       </NavLink>
    //     </span>
    //     <span>
    //       <NavLink className="nav-link active" aria-current="page" to="/">
    //         Home
    //       </NavLink>
    //     </span>
    //     <span>
    //       <NavLink className="nav-link" to="/cart">
    //         Cart
    //       </NavLink>
    //       <div className="cart-counter">
    //         <span>{productsInCart.length}</span>
    //       </div>
    //     </span>
    //    <span>
    //       <a className="nav-link" href= "#footer"> Contacts </a>
    //     </span>
    //     <span>
    //       <NavLink className="nav-link" to="/login">
    //         Login
    //       </NavLink>
    //     </span>
 
    //   </div>
    // </nav>
  );
};



export default Navbar;

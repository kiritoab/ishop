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
  );
};



export default Navbar;

import React, { Component } from "react";
// import React from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const productsInCart = useSelector((state) => state.products.cart);
  
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <span>
//           <NavLink className="navbar-brand" to="/">
//             iShop
//           </NavLink>
//         </span>
//         <span>
//           <NavLink className="nav-link active" aria-current="page" to="/">
//             Home
//           </NavLink>
//         </span>
//         <span>
//           <NavLink className="nav-link" to="/cart">
//             Cart
//           </NavLink>
//           <div className="cart-counter">
//             <span>{productsInCart.length}</span>
//           </div>
//         </span>
//         <span>
//           <NavLink className="nav-link" to="/">
//             About us
//           </NavLink>
//         </span>
//         <span>
//           <NavLink className="nav-link" to="/">
//             Contact us
//           </NavLink>
//         </span>
//       </div>
//     </nav>
//   );
// };

class Navbar extends Component {
  state={ clicked: false};
  handleClick = ()=>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  return (
    <>
    <nav>
      <div id="logo"><a href="/">iShop</a></div>
      <div id="container">
        <ul id="navbar" className={this.state.clicked? "#navbar active": "navbar"}>
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Cart</a>           
            {/* <div className="cart-counter">
              <span>{productsInCart.length}</span>
            </div> */}
          </li>
          <li><a href="#footer">Contacts</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
      <div id="mobile" onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked? "fas fa-times":"fas fa-bars"}></i>    
      </div>
    </nav>
    </>
  );
}
}

export default Navbar;

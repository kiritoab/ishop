import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Search from "./Search";


const Navbars=()=> {
  const productsInCart = useSelector((state) => state.products.cart);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Navbar className='nav' bg="" expand="lg">
      <Container fluid className='nav1'>
        <Navbar.Brand id='logo' href="/">iShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
            <NavLink className="navlinks" to="/">Home</NavLink>
            <NavLink className="navlinks" to="/cart">Cart</NavLink>
            <a className="navlinks" href="#footer">Contacts</a>
            <NavLink className="navlinks" to="/login">Login</NavLink>
          </Nav>
          <Form className="search">
              <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
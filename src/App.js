import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbars from "./components/common/Navbars";
import ProductsDetails from "./components/ProductDetails";
import NotFound from "./components/common/NotFound";
import Cart from "./components/Cart";
import Copyrights from "./components/common/Copyrights";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "https://kit.fontawesome.com/eabc1575b6.js";
import Checkout from "./components/common/Checkout";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"

function App() {
  return (
    <div>
      <Navbars/>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="products/:id" element={<ProductsDetails />}></Route>
        <Route path="cart/checkout" element={<Checkout />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Copyrights />
    </div>
  );
}

export default App;

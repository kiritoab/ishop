import { createSlice } from "@reduxjs/toolkit";

export const getProducts = () => (dispatch) => {
  fetch("https://fakestoreapi.com/products/")
    .then((response) => {
      if (!response.ok) {
        throw Error("Can't connect to the server!");
      }
      return response.json();
    })
    .then((data) => {
      dispatch({ type: "products/setProducts", payload: data });
    })
    .catch((e) => {
      console.log(e.message);
    });
};

const initialState = {
  products: [],
  cart: [],
};

// just tryna solve omar's github problems ! Nothing serious guys relax
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      // console.log("action", action);
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      // console.log("action", action);
      state.cart = [...state.cart, action.payload];
    },
    delProductFromCart: (state, action) => {
      // console.log("action", action);
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },
    delAllFromCart: (state) => {
      // console.log("action");
      state.cart = [];
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

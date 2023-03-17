import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hidden: true,
  cartItens: [],
  quantity: 0,
  totalCount: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //removeItem: (state, action) => { },
    removeAll: (state) => {
      state.cartItens = 0;
      state.itensInCart = [];
      state.totalCount = 0;
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    showCart: (state) => {
      state.hidden = !state.hidden;
    }
  }
})


export const { addItem, showCarte, removeAll, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

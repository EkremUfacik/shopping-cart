import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    products: [],
    loading: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },

    fetchSuccess: (state) => {
      state.loading = false;
    },

    addProduct: (state, { payload }) => {
      state.products.push(payload);
    },
    incQuantity: (state, { payload }) => {
      state.products.find((item) => item.id === payload).quantity += 1;
    },
    decQuantity: (state, { payload }) => {
      state.products.find((item) => item.id === payload).quantity -= 1;
    },
    removeProduct: (state, { payload }) => {
      state.products = state.products.filter((item) => item.id !== payload);
    },
  },
});

export const {
  addProduct,
  incQuantity,
  decQuantity,
  removeProduct,
  fetchStart,
  fetchSuccess,
} = cartSlice.actions;

export default cartSlice.reducer;

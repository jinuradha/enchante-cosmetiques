import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.item_code === action.payload);
      console.log(itemIndex);
      if (itemIndex > -1) {
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

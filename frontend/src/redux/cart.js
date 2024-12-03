import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart : (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        // If the item already exists, increase its quantity
        existingItem.quantity ++;
      } else {
        // Add a new item with an initial quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart : (state, action) => {
      state.items = state.items.filter (item => item.id !== action.payload);
    },

    incrementQuantity : (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if(item){
        item.quantity++;
      }
    },

    decrementQuantity : (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if(item && item.quantity > 1){
        item.quantity--;
      }
    },

  },
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;
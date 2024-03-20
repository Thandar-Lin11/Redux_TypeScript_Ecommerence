import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  productName: string; // Corrected property name
  quantity: number;
  image: string;
  badge: boolean;
  price: string;
  color: string;
}

interface CoralState {
  userInfo: any[]; // Adjust type as needed
  products: Product[];
}

const initialState: CoralState = {
  userInfo: [],
  products: [],
};

export const coralSlice = createSlice({
  name: "coral",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  resetCart,
} = coralSlice.actions;

export default coralSlice.reducer;

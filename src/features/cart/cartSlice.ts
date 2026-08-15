import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// Cart persists to localStorage so a page refresh doesn't wipe it —
// falls back to an empty cart if nothing is stored yet or JSON is invalid.
const CART_STORAGE_KEY = "cart-app/cart";

function loadInitialState(): CartState {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (raw) return { items: JSON.parse(raw) as CartItem[] } as CartState;
  } catch {
    // Ignore corrupted storage and start fresh.
  }
  return { items: [] };
}

const initialState: CartState = loadInitialState();

function persist(state: CartState) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Adds a product to the cart, or increases quantity if it's already there.
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity: 1,
        });
      }
      persist(state);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      persist(state);
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
      persist(state);
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Quantity hitting 0 removes the item rather than lingering at 0.
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
      persist(state);
    },

    clearCart: (state) => {
      state.items = [];
      persist(state);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

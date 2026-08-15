import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  productIds: number[];
}

const WISHLIST_STORAGE_KEY = "cart-app/wishlist";

function loadInitialState(): WishlistState {
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (raw) return { productIds: JSON.parse(raw) as number[] };
  } catch {
    // Ignore corrupted storage and start fresh.
  }
  return { productIds: [] };
}

const initialState: WishlistState = loadInitialState();

function persist(state: WishlistState) {
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(state.productIds));
}

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // Adds the product if it isn't already wishlisted, removes it if it is.
    toggleWishlist: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.productIds.includes(id)) {
        state.productIds = state.productIds.filter((pid) => pid !== id);
      } else {
        state.productIds.push(id);
      }
      persist(state);
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
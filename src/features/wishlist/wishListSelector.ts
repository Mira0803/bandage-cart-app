import type { RootState } from "../../app/store";

export const selectWishlistIds = (state: RootState) => state.wishlist.productIds;

export const selectWishlistCount = (state: RootState) => state.wishlist.productIds.length;

export const selectIsWishlisted = (id: number) => (state: RootState) =>
  state.wishlist.productIds.includes(id);
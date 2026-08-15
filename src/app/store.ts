import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import notificationReducer from "../features/notification/notificationSlice";
import wishlistReducer from "../features/wishlist/wishListSlice";
import { productsApi } from "../services/productsApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    notification: notificationReducer,
    wishlist: wishlistReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // RTK Query's middleware enables caching, invalidation, polling, etc.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
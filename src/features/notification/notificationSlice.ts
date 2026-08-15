import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToastItem {
  title: string;
  price: number;
  thumbnail: string;
}

interface NotificationState {
  toast: ToastItem | null;
}

const initialState: NotificationState = { toast: null };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showAddedToBasketToast: (state, action: PayloadAction<ToastItem>) => {
      state.toast = action.payload;
    },
    hideToast: (state) => {
      state.toast = null;
    },
  },
});

export const { showAddedToBasketToast, hideToast } = notificationSlice.actions;
export default notificationSlice.reducer;
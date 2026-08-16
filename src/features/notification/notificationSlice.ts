import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Generalized so any flow (checkout, add-to-cart, errors, etc.) can trigger
// the same toast with its own copy, rather than one action tied to a single
// use case.
export interface ToastContent {
  title: string;
  description: string;
  thumbnail?: string;
}

interface NotificationState {
  toast: ToastContent | null;
}

const initialState: NotificationState = { toast: null };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ToastContent>) => {
      state.toast = action.payload;
    },
    hideToast: (state) => {
      state.toast = null;
    },
  },
});

export const { showToast, hideToast } = notificationSlice.actions;
export default notificationSlice.reducer;
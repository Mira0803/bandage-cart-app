import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { hideToast } from "../../features/notification/notificationSlice";
import "./AddedToBasketToast.css";

const AUTO_DISMISS_MS = 4000;

export default function AddedToBasketToast() {
  const toast = useAppSelector((state) => state.notification.toast);
  const dispatch = useAppDispatch();

  // Auto-dismiss after a few seconds, but reset the timer whenever a new
  // toast is shown while one is already on screen.
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => dispatch(hideToast()), AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
  }, [toast, dispatch]);

  if (!toast) return null;

  return (
    <div className="toast-backdrop" role="status" aria-live="polite">
      <div className="toast">
        <div className="toast__header">
          <h2 className="toast__title">{toast.title}</h2>
          <button
            type="button"
            className="toast__close"
            aria-label="Dismiss"
            onClick={() => dispatch(hideToast())}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="toast__body">
          {toast.thumbnail && <img className="toast__thumb" src={toast.thumbnail} alt="" />}
          <p className="toast__description">{toast.description}</p>
        </div>
      </div>
    </div>
  );
}
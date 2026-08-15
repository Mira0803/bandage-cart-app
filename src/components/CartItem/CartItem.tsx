import type { CartItem as CartItemType } from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../app/hooks";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../features/cart/cartSlice";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import "./CartItem.css";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();
  const lineTotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img className="cart-item__thumb" src={item.thumbnail} alt={item.title} />

      <div className="cart-item__details">
        <p className="cart-item__title">{item.title}</p>
        <p className="cart-item__price">${item.price.toFixed(2)}</p>
      </div>

      <QuantitySelector
        quantity={item.quantity}
        onIncrease={() => dispatch(increaseQuantity(item.id))}
        onDecrease={() => dispatch(decreaseQuantity(item.id))}
      />

      <span className="cart-item__total">${lineTotal.toFixed(2)}</span>

      <button
        type="button"
        className="cart-item__remove"
        onClick={() => dispatch(removeFromCart(item.id))}
        aria-label={`Remove ${item.title} from cart`}
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
  );
}

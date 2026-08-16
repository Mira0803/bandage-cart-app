import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectCartItems, selectCartTotal } from "../../features/cart/cartSelectors";
import { clearCart } from "../../features/cart/cartSlice";
import { showToast } from "../../features/notification/notificationSlice";
import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button";
import "./Cart.css";

export default function Cart() {
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();

  // No real payment flow exists yet — this just demonstrates the
  // notification pattern at the point a real checkout would confirm
  // the order, using the cart's own state as the summary content.
  function handleCheckout() {
    const itemCount = items.reduce((count, item) => count + item.quantity, 0);
    dispatch(
      showToast({
        title: "Order placed successfully!",
        description: `${itemCount} item${itemCount === 1 ? "" : "s"} • Total €${total.toFixed(2)}`,
      })
    );
  }

  if (items.length === 0) {
    return (
      <div className="container cart-empty">
        <h1 className="cart-empty__title">Your cart is empty</h1>
        <p className="cart-empty__text">Looks like you haven't added anything yet.</p>
        <Link to="/shop">
          <Button variant="solid">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container cart">
      <h1 className="cart__title">Your Cart</h1>

      <div className="cart__list">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart__summary">
        <div className="cart__summary-row">
          <span>Subtotal</span>
          <span className="cart__summary-total">${total.toFixed(2)}</span>
        </div>
        <p className="cart__summary-note">Shipping and taxes calculated at checkout.</p>

        <Button variant="solid" fullWidth onClick={handleCheckout}>
          Checkout
        </Button>
        <Button variant="ghost" fullWidth onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}
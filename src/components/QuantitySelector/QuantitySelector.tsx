import "./QuantitySelector.css";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="quantity-selector">
      <button
        type="button"
        className="quantity-selector__btn"
        onClick={onDecrease}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="quantity-selector__value" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        className="quantity-selector__btn"
        onClick={onIncrease}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

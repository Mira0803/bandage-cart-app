import type { Product } from "../../types/product";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToCart } from "../../features/cart/cartSlice";
import { toggleWishlist } from "../../features/wishlist/wishListSlice";
import { selectIsWishlisted } from "../../features/wishlist/wishListSelector";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  /** Optional small tag rendered under the image (e.g. a brand/collection code). */
  tag?: string;
}

export default function ProductCard({ product, tag }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const isWishlisted = useAppSelector(selectIsWishlisted(product.id));

  const hasDiscount = product.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;
  const isOutOfStock = product.stock === 0;
  const reviewCount = product.reviews?.length ?? 0;
  const filledStars = Math.round(product.rating);

  function handleAddToCart() {
    if (isOutOfStock) return;
    dispatch(addToCart(product));
  }

  function handleToggleWishlist() {
    dispatch(toggleWishlist(product.id));
  }

  return (
    <div className={`product-card ${isOutOfStock ? "product-card--oos" : ""}`}>
      <div className="product-card__media">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />

        {/* Hover-only overlays */}
        {isOutOfStock ? (
          <span className="product-card__oos-badge">Out of stock</span>
        ) : (
          hasDiscount && (
            <span className="product-card__discount-badge">
              -{Math.round(product.discountPercentage)}%
            </span>
          )
        )}

        <div className="product-card__icon-actions">
          <button type="button" className="product-card__icon-btn" aria-label="Compare">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 3l4 4-4 4M3 7h8M17 21l-4-4 4-4M21 17h-8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className={`product-card__icon-btn ${isWishlisted ? "product-card__icon-btn--active" : ""}`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={isWishlisted}
            onClick={handleToggleWishlist}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={isWishlisted ? "var(--color-discount)" : "none"}
              aria-hidden="true"
            >
              <path
                d="M12 20s-7-4.4-9.3-8.6C1.2 8.3 2.7 5 6 5c2 0 3.3 1.1 4 2.2C10.7 6.1 12 5 14 5c3.3 0 4.8 3.3 3.3 6.4C19 15.6 12 20 12 20z"
                stroke={isWishlisted ? "var(--color-discount)" : "currentColor"}
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {tag && <p className="product-card__tag">{tag}</p>}

      <div className="product-card__body">
        {product.brand && <p className="product-card__brand">{product.brand}</p>}
        <p className="product-card__title">{product.title}</p>

        <div className="product-card__price-row">
          {hasDiscount && !isOutOfStock && (
            <span className="product-card__price--old">€ {product.price.toFixed(2)}</span>
          )}
          <span className="product-card__price">
            € {(isOutOfStock ? product.price : discountedPrice).toFixed(2)}
          </span>
        </div>

        <div className="product-card__rating">
          <span className="product-card__stars" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24">
                <path
                  d="M12 2l3.1 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.9 5.6 21.4l1.5-7.1L1.7 9.4l7.2-.8z"
                  fill={i < filledStars ? "var(--color-text-dark)" : "var(--color-star-empty)"}
                />
              </svg>
            ))}
          </span>
          <span className="product-card__rating-value">
            {product.rating.toFixed(1)} ({reviewCount})
          </span>
        </div>
      </div>

      <div className="product-card__actions">
        <button
          type="button"
          className="product-card__add-btn"
          onClick={handleAddToCart}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? "Out of Stock" : "Add to Basket"}
        </button>
      </div>
    </div>
  );
}
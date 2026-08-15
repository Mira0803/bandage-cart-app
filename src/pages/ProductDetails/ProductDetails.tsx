import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/productsApi";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../features/cart/cartSlice";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const dispatch = useAppDispatch();

  const { data: product, isLoading, isError } = useGetProductByIdQuery(productId, {
    skip: Number.isNaN(productId),
  });

  if (isLoading) {
    return <Loader label="Loading product..." />;
  }

  if (isError || !product) {
    return (
      <div className="container product-details-state">
        <p>We couldn't find that product.</p>
      </div>
    );
  }

  const hasDiscount = product.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <div className="container product-details">
      <div className="product-details__media">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-details__info">
        <p className="product-details__category">{product.category}</p>
        <h1 className="product-details__title">{product.title}</h1>

        <div className="product-details__price-row">
          {hasDiscount && (
            <span className="product-details__price--old">${product.price.toFixed(2)}</span>
          )}
          <span className="product-details__price">${discountedPrice.toFixed(2)}</span>
        </div>

        <p className="product-details__description">{product.description}</p>
        <p className="product-details__stock">
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>

        <Button
          variant="solid"
          disabled={product.stock === 0}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

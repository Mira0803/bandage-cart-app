import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../services/productsApi";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import "./ProductGrid.css";

interface ProductGridProps {

  limit?: number;

  fetchLimit?: number;

  showLoadMore?: boolean;

  searchQuery?: string;

  loadMoreTo?: string;
}

export default function ProductGrid({
  limit = 20,
  fetchLimit,
  showLoadMore = false,
  searchQuery = "",
  loadMoreTo,
}: ProductGridProps) {
  const [visibleCount, setVisibleCount] = useState(limit);
  const navigate = useNavigate();
  const { data, isLoading, isError, refetch } = useGetProductsQuery({
    // Search needs the full batch to filter against, not just the first page.
    limit: fetchLimit ?? (showLoadMore || searchQuery ? 100 : limit),
  });

  if (isLoading) {
    return <Loader label="Loading products..." />;
  }

  if (isError) {
    return (
      <div className="product-grid-state">
        <p>Something went wrong while loading products.</p>
        <button className="product-grid-state__retry" onClick={() => refetch()}>
          Try again
        </button>
      </div>
    );
  }

  if (!data || data.products.length === 0) {
    return (
      <div className="product-grid-state">
        <p>No products found.</p>
      </div>
    );
  }

  const filteredProducts = searchQuery
    ? data.products.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : data.products;

  if (filteredProducts.length === 0) {
    return (
      <div className="product-grid-state">
        <p>No products match "{searchQuery}".</p>
      </div>
    );
  }

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  
  const hasMore = showLoadMore && !searchQuery && (
    loadMoreTo ? visibleProducts.length < data.total : visibleCount < filteredProducts.length
  );

  function handleLoadMore() {
    if (loadMoreTo) {
      navigate(loadMoreTo);
    } else {
      setVisibleCount((c) => c + limit);
    }
  }

  return (
    <>
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasMore && (
        <div className="product-grid__load-more">
          <Button variant="outline" onClick={handleLoadMore}>
            LOAD MORE PRODUCTS
          </Button>
        </div>
      )}
    </>
  );
}
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import "./Shop.css";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return (
    <div className="shop container">
      <div className="shop__header">
        <h1 className="shop__title">Shop</h1>
        <p className="shop__subtitle">
          {query ? `Showing results for "${query}"` : "Browse our full product catalog"}
        </p>
      </div>
      <ProductGrid limit={30} searchQuery={query} showLoadMore={!query} />
    </div>
  );
}
// Shape returned by DummyJSON for a single product.
// Only fields the app actually uses are declared — keeps the type honest
// about what the UI depends on instead of mirroring the entire API payload.
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand?: string;
  thumbnail: string;
  images: string[];
  // Only the count is used (to show "(54)" next to the star rating on cards),
  // so we don't bother typing the full review object shape.
  reviews?: unknown[];
}

// Shape returned by GET /products (and /products/search, /products/category/:slug)
export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
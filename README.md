# Cart App

A small e-commerce front end built with React + Vite + TypeScript, Redux Toolkit for
cart state, and RTK Query for fetching products from the DummyJSON API
(https://dummyjson.com/docs/products).

## Stack

- React 19 + Vite + TypeScript
- Redux Toolkit (cartSlice) for cart state, persisted to localStorage
- RTK Query (productsApi) for fetching/caching products
- React Router for page navigation
- Vanilla CSS with a small design-token file (src/styles/variables.css)

## Getting started

```
npm install
npm run dev       # starts local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── app/            store.ts, hooks.ts — Redux store + typed hooks
├── components/      Navbar, Footer, ProductCard, ProductGrid,
│                     CartItem, QuantitySelector, Button, Loader
├── features/cart/   cartSlice.ts — add/remove/quantity/clear + localStorage persistence
├── services/        productsApi.ts — RTK Query endpoints (getProducts, getProductById)
├── pages/           Home, Shop, ProductDetails, Cart
├── types/           product.ts
├── styles/          variables.css (design tokens), responsive.css (breakpoints/grid)
├── index.css
├── App.tsx           routes + page shell
└── main.tsx          entry point, wraps <App /> in <Provider>
```

## Routes

| Path             | Page           |
|------------------|----------------|
| /                | Home (landing) |
| /shop            | Shop (product listing) |
| /product/:id     | Product details |
| /cart            | Cart |

## Deploying to Netlify

Option A — CLI
```
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

Option B — Git integration (recommended)
1. Push this project to a GitHub repo.
2. In Netlify: Add new site -> Import an existing project, connect the repo.
3. Build settings:
   - Build command: npm run build
   - Publish directory: dist
4. Deploy.

Because this app uses client-side routing (React Router), a public/_redirects file
is included so refreshing on /shop or /cart doesn't 404 on Netlify:

```
/*    /index.html   200
```

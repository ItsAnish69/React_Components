# React Redux Shop

A Vite-powered React project that demonstrates a small shopping flow with Redux Toolkit. The app fetches products from the DummyJSON API, lets users add or remove items from a cart, and shows a dedicated cart page with item totals.

## Features

- Product listing page that loads products asynchronously from `https://dummyjson.com/products`.
- Add-to-cart and remove-from-cart actions handled through Redux Toolkit.
- Cart page that shows the current item count, item details, per-item remove actions, and the total cart price.
- Cart persistence through `localStorage`, so cart items survive page refreshes.
- React Router-based navigation between the product page and the cart page.

## Project Structure

- `src/App.jsx` defines the app routes and renders the shared header.
- `src/Header.jsx` renders the top navigation and cart link.
- `src/Product.jsx` displays the fetched products and cart action buttons.
- `src/CartList.jsx` renders the cart contents, count, and total price.
- `src/Redux/Store.jsx` configures the Redux store.
- `src/Redux/Slice.jsx` manages cart state and localStorage updates.
- `src/Redux/ProductSlice.jsx` fetches product data from the API.

## Cart Flow

1. Products are fetched on the home page when the product component mounts.
2. Clicking Add to cart stores the selected product in the Redux cart slice.
3. The cart slice writes the current cart array to `localStorage` after each change.
4. The cart page reads from Redux state, shows the number of items, and calculates the total price from the current cart array.
5. Removing an item updates both Redux state and `localStorage`.

## Getting Started

Install dependencies inside the `frontend` folder and start the dev server:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` creates a production build.
- `npm run preview` previews the production build locally.
- `npm run lint` runs ESLint across the project.

## Notes

- The cart page computes the total price directly from the Redux cart items.
- Product cards switch between Add to cart and Remove from cart based on whether the item already exists in the cart.
- The app is currently a practice project focused on Redux state management, API fetching, and route-based navigation.

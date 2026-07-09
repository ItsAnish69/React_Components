//admin dashboard

import React from "react";
// import MainLayout from "./components/layout/Main.jsx";

// export default function App() {
//   return <MainLayout />;
// }

// for redux toolkit practice

import Header from "./Header";
import ProductCard from "./Product";
import { useDispatch } from "react-redux";
import Slice, { resetItem } from "./Redux/Slice"

export default function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="flex flex-col gap-5 m-5">
        <h1 className="text-5xl font-bold">redux toolkit tutorial</h1>
        <button className="mt-5 w-35 bg-blue-600 text-white py-2 rounded-lg hover:bg-black transition"
        onClick={() => dispatch(resetItem())}>
          Clear Cart
        </button>
      </div>
      <ProductCard />
    </>
  );
}

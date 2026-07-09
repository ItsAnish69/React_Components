//admin dashboard

import React from "react";
// import MainLayout from "./components/layout/Main.jsx";

// export default function App() {
//   return <MainLayout />;
// }



// for redux toolkit practice

import Header from "./Header"
import ProductCard from "./Product";

export default function App(){
  return (
    <>
    <Header />
    <h1 className="text-5xl font-bold m-8">redux toolkit tutorial</h1>
    <ProductCard />
    </>
  )
}
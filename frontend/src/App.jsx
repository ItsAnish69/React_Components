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
import Slice, { resetItem } from "./Redux/Slice";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import CartList from './CartList'

export default function App() {
  const dispatch = useDispatch();
  return (
    <>
      <BrowserRouter>
            <Header />  
        <Routes>
          <Route path='/' element={<ProductCard />}></Route>
          <Route path='/cart-list' element={<CartList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";

import Loader from "./components/Loader";

import Products from "./pages/Products";

const Cart = lazy(() => import("./pages/Cart"));

const Checkout = lazy(() => import("./pages/Checkout"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Products />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

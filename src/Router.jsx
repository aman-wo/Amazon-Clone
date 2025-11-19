import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Auth from "./pages/auth/Auth";
import Payment from './pages/payment/Payment'
import Orders from './pages/orders/Orders'
import Cart from './pages/cart/Cart'
import Results from './pages/results/Results'
import ProductDetail from './pages/productDetail/ProductDetail'
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/payments" element={<Payment />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route
          path="/products/category/:categoryName"
          element={<Results />}
        ></Route>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default Routing

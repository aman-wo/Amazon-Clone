import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/landing/Landing'
import SignUp from './pages/auth/SignUp'
import Payment from './pages/payment/Payment'
import Orders from './pages/orders/Orders'
import Cart from './pages/cart/Cart'
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/auth' element={<SignUp />}></Route>
        <Route path='/payments' element={<Payment />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </Router>
  )
}

export default Routing

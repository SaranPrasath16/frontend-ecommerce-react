import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import VerifyOtp from "./components/VerifyOtp";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import CheckoutWaitingPage from "./pages/CheckoutWaitingPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<VerifyOtp />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/productlist" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout-waiting" element={<CheckoutWaitingPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;

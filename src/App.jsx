import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import VerifyOtp from "./components/VerifyOtp";
import HomePage from "./pages/UserPages/HomePage";
import ProductPage from "./pages/UserPages/ProductPage";
import ProductListPage from "./pages/UserPages/ProductListPage";
import CartPage from "./pages/UserPages/CartPage";
import CheckoutWaitingPage from "./pages/UserPages/CheckoutWaitingPage";
import OrderSuccessPage from "./pages/UserPages/OrderSuccessPage";
import OrderHistory from "./pages/UserPages/OrderHistory";
import CheckoutPage from "./pages/UserPages/CheckoutPage";
import UsersListPage from "./pages/SuperAdminPages/UsersListPage";

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
        <Route path="/ordershistory" element={<OrderHistory />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/userlist" element={<UsersListPage />} />
      </Routes>
    </Router>
  );
}

export default App;

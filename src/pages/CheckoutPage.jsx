import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutItemCard from "../components/CheckoutItemCard";
import UserInfoBox from "../components/UserInfoBox";
import OrderSummary from "../components/CheckoutSummaryBox";

const Container = styled.div`
  padding: 2rem 5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const ItemList = styled.div`
  margin-bottom: 2rem;
`;

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];
  const totalAmount = location.state?.totalAmount || 0;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Checkout | QuickPikk";
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/assets/title_logo.png";
    }
  }, []);
  const handlePayNow = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("jwt");

      // Capture response from backend API
      const response = await axios.post(
        "http://localhost:8080/api/user/checkout",
        { cartItems },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      navigate("/checkout-waiting", { state: response.data });
    } catch (error) {
      alert("Checkout failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!cartItems.length) {
    return (
      <>
        <Header />
        <Container>
          <p>No items selected for checkout. Please go back to cart.</p>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <h2>Checkout Details</h2>
        <UserInfoBox />
        <ItemList>
          <h3>Checkout Items</h3>
          {cartItems.map((item) => (
            <CheckoutItemCard key={item.productId} cartItem={item} />
          ))}
        </ItemList>
        <OrderSummary
          totalAmount={totalAmount}
          onPayNow={handlePayNow}
          loading={loading}
        />
      </Container>
      <Footer />
    </>
  );
};

export default CheckoutPage;

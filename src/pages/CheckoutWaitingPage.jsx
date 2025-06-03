import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.div`
  padding: 3rem 5rem;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const CheckoutWaitingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Checkout | QuickPikk";
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/assets/quickpikklogo.png";
    }

    const timer = setTimeout(() => {
      navigate("/order-success");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Header />
      <Container>
        <h2>Checkout</h2>
        <p>
          The payment link has been sent to your registered email. Please check
          your email and complete the payment to proceed.
        </p>
        <p>Waiting for payment confirmation...</p>
      </Container>
      <Footer />
    </>
  );
};

export default CheckoutWaitingPage;

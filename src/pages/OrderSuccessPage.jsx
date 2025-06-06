import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.div`
  padding: 3rem 5rem;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const OrderSuccessPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const invoiceStatus = queryParams.get("razorpay_invoice_status");
  const paymentId = queryParams.get("razorpay_payment_id");

  React.useEffect(() => {
    document.title = "Order Success | QuickPikk";
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/assets/title_logo.png";
    }
  }, []);

  const renderContent = () => {
    if (invoiceStatus === "paid") {
      return (
        <>
          <Title>Payment Successful</Title>
          <Message>
            Thank you for your purchase. Your payment (ID: {paymentId}) was
            successful.
            <br />
            Your order ID will be shared with you shortly.
          </Message>
        </>
      );
    } else {
      return (
        <>
          <Title>Payment Failed</Title>
          <Message>
            Unfortunately, your payment could not be completed.
            <br />
            Please try again or contact support if the amount was deducted.
          </Message>
        </>
      );
    }
  };

  return (
    <>
      <Header />
      <Container>{renderContent()}</Container>
      <Footer />
    </>
  );
};

export default OrderSuccessPage;

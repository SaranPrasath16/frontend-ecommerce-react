import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.div`
  padding: 3rem 5rem;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const OrderSuccessPage = () => {
  React.useEffect(() => {
    document.title = "Order Success | QuickPikk";
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/assets/quickpikklogo.png";
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h2>Order Successful!</h2>
        <p>
          Thank you for your purchase. Your order has been placed successfully.
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default OrderSuccessPage;

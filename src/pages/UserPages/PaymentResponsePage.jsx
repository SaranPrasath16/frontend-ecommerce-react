import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Container = styled.div`
  max-width: 700px;
  margin: 3rem auto;
  padding: 2.5rem;
  background: #f9f9f9;
  border-radius: 16px;
  box-shadow: ${(props) =>
    props.success
      ? "0 4px 20px rgba(39, 174, 96, 0.3)" // green shadow
      : "0 4px 20px rgba(231, 76, 60, 0.3)"}; // red shadow
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => (props.success ? "#27ae60" : "#e74c3c")};
`;

const Message = styled.p`
  font-size: 1.15rem;
  color: #555;
  margin-bottom: 2rem;
`;

const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #444;
`;

const DetailItem = styled.li`
  margin-bottom: 1rem;
  strong {
    color: #2c3e50;
  }
`;

const BackButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c80b4;
  }
`;

const PaymentResponsePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { payment, order } = location.state || {};

  useEffect(() => {
    document.title = "Payment Response | QuickPikk";
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/assets/title_logo.png";
    }
  }, []);

  const handleBackHome = () => {
    navigate("/homepage");
  };

  const isSuccess = payment && order;

  return (
    <>
      <Header />
      <Container success={isSuccess}>
        {isSuccess ? (
          <>
            <Title success>Payment Successful</Title>
            <Message>
              Thank you for your order! Here are your payment and order details:
            </Message>
            <DetailsList>
              <DetailItem>
                <strong>Order ID:</strong> {order.orderId}
              </DetailItem>
              <DetailItem>
                <strong>Total Amount:</strong> ₹{order.totalAmount}
              </DetailItem>
              <DetailItem>
                <strong>Items Count:</strong> {order.noOfItems}
              </DetailItem>
              <DetailItem>
                <strong>Order Status:</strong> {order.orderStatus}
              </DetailItem>
              <DetailItem>
                <strong>Payment Status:</strong> {order.paymentStatus}
              </DetailItem>
              <DetailItem>
                <strong>Transaction ID:</strong> {payment.transcationId}
              </DetailItem>
              <DetailItem>
                <strong>Payment Method:</strong> {payment.paymentMethod}
              </DetailItem>
            </DetailsList>
          </>
        ) : (
          <>
            <Title>Payment Failed</Title>
            <Message>
              Unfortunately, your payment could not be completed.
              <br />
              Please try again or contact support if the amount was deducted.
            </Message>
          </>
        )}
        <BackButton onClick={handleBackHome}>Back to Homepage</BackButton>
      </Container>
      <Footer />
    </>
  );
};

export default PaymentResponsePage;

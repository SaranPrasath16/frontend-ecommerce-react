import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Container = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const PaymentLink = styled.a`
  display: inline-block;
  background-color: #27ae60;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    background-color: #219150;
  }
`;

const DirectPayNote = styled.p`
  text-align: center;
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 2rem;
`;

const PaymentIdText = styled.p`
  font-size: 0.95rem;
  color: #777;
  margin-bottom: 2rem;
  text-align: center;
`;

const OutOfStockSection = styled.div`
  background-color: #fff3f3;
  border: 1px solid #f5c6cb;
  padding: 1rem 1.5rem;
  border-radius: 8px;
`;

const OutOfStockTitle = styled.h3`
  color: #d9534f;
  margin-bottom: 0.75rem;
`;

const OutOfStockList = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #a94442;
`;

const CheckoutWaitingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentLinkUrl, paymentId, message, outOfStockItems } =
    location.state || {};

  useEffect(() => {
    if (!paymentId) return;

    const intervalId = setInterval(async () => {
      try {
        const response = await axios.get(
          `/api/user/checkpayment?payment_Id=${paymentId}`,
          {
            headers: {
              Authorization: localStorage.getItem("jwt"),
            },
          }
        );

        if (response.data) {
          clearInterval(intervalId); // stop polling
          navigate("/paymentresponse", { state: response.data }); // navigate with data
        }
      } catch (error) {
        console.error("Error while checking payment:", error);
      }
    }, 5000); // every 5 seconds

    return () => clearInterval(intervalId); // cleanup
  }, [paymentId, navigate]);

  return (
    <>
      <Header />
      <Container>
        <Title>Checkout Processing</Title>
        {message && <Message>{message}</Message>}
        {paymentLinkUrl && (
          <>
            <div style={{ textAlign: "center" }}>
              <PaymentLink
                href={paymentLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pay Now
              </PaymentLink>
            </div>
            <DirectPayNote>
              If you want to pay without visiting your email inbox, use this
              link above.
            </DirectPayNote>
          </>
        )}
        {paymentId && <PaymentIdText>Payment ID: {paymentId}</PaymentIdText>}
        {outOfStockItems && outOfStockItems.length > 0 && (
          <OutOfStockSection>
            <OutOfStockTitle>Out of Stock Items:</OutOfStockTitle>
            <OutOfStockList>
              {outOfStockItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </OutOfStockList>
          </OutOfStockSection>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default CheckoutWaitingPage;

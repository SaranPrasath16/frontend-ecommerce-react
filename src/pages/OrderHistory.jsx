import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderHistoryCard from "../components/OrderHistoryCard";
import axios from "axios";

const Container = styled.div`
  padding: 1rem 5rem;
  max-width: 900px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    document.title = "Order History | QuickPikk";
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/assets/title_logo.png";
    }

    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const res = await axios.get("api/user/orders", {
          headers: { Authorization: token },
        });
        setOrders(res.data.orderList || []);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {orders.length > 0 ? (
          orders.map((order) => (
            <OrderHistoryCard key={order.orderId} order={order} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No orders found.</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default OrderHistoryPage;

import React from "react";
import { SummaryBox, SummaryTitle, Row, PlaceOrderButton } from "./styles";

const OrderSummary = ({ totalAmount, onPayNow, loading }) => {
  return (
    <SummaryBox>
      <SummaryTitle>Billing Summary</SummaryTitle>

      <Row>
        <span>Cart Total</span>
        <span>₹{totalAmount.toFixed(2)}</span>
      </Row>

      <Row>
        <span>GST</span>
        <span>
          <span style={{ color: "#28a745" }}>Free</span>{" "}
          <strike style={{ color: "#aaa", fontSize: "0.9rem" }}>
            ₹{(totalAmount * 0.18).toFixed(2)}
          </strike>
        </span>
      </Row>

      <Row>
        <span>Shipping</span>
        <span>
          <span style={{ color: "#28a745" }}>Free</span>{" "}
          <strike style={{ color: "#aaa", fontSize: "0.9rem" }}>₹100.00</strike>
        </span>
      </Row>

      <Row bold>
        <span>Total Amount</span>
        <span>₹{totalAmount.toFixed(2)}</span>
      </Row>

      <PlaceOrderButton onClick={onPayNow} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </PlaceOrderButton>
    </SummaryBox>
  );
};

export default OrderSummary;

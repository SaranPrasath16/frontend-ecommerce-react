import React from "react";
import { SummaryBox, SummaryTitle, Row, PlaceOrderButton } from "./styles";

const CartSummaryBox = ({ totalAmount, onCheckout, checkingOut }) => {
  return (
    <SummaryBox>
      <SummaryTitle>Billing Details</SummaryTitle>

      <Row>
        <span>
          Cart Total <small>(Excl. of all taxes)</small>
        </span>
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
        <span>Shipping Charges</span>
        <span>
          <span style={{ color: "#28a745" }}>Free</span>{" "}
          <strike style={{ color: "#aaa", fontSize: "0.9rem" }}>₹100.00</strike>
        </span>
      </Row>

      <Row bold>
        <span>Total Amount</span>
        <span>₹{totalAmount.toFixed(2)}</span>
      </Row>

      <PlaceOrderButton onClick={onCheckout} disabled={checkingOut}>
        {checkingOut ? "Processing..." : "PROCEED TO CHECKOUT"}
      </PlaceOrderButton>
    </SummaryBox>
  );
};

export default CartSummaryBox;

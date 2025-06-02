import React from "react";
import {
  CardWrapper,
  HeaderRow,
  OrderId,
  UserId,
  CartItemsList,
  CartItem,
  ItemName,
  ItemQuantity,
  ItemPrice,
  SummaryRow,
  StatusRow,
  StatusItem,
  OrderDate,
} from "./styles";

const OrderHistoryCard = ({ order }) => {
  return (
    <CardWrapper>
      <HeaderRow>
        <OrderId>Order ID: {order.orderId}</OrderId>
        <UserId>User ID: {order.userId}</UserId>
      </HeaderRow>

      <CartItemsList>
        {order.cartItems.map((item, index) => (
          <CartItem key={index}>
            <ItemName title={item.name}>{item.name}</ItemName>
            <ItemQuantity>Qty: {item.quantity}</ItemQuantity>
            <ItemPrice>₹{item.price}</ItemPrice>
          </CartItem>
        ))}
      </CartItemsList>

      <SummaryRow>
        <div>Total Items: {order.noOfItems}</div>
        <div>Total Amount: ₹{order.totalAmount}</div>
      </SummaryRow>

      <StatusRow>
        <StatusItem success={order.paymentStatus === "Paid"}>
          Payment: {order.paymentStatus}
        </StatusItem>
        <StatusItem success={order.orderStatus === "Delivered"}>
          Status: {order.orderStatus}
        </StatusItem>
      </StatusRow>

      <OrderDate>
        Ordered on:{" "}
        {new Date(order.orderDateTime.replace(" ", "T")).toLocaleString()}
      </OrderDate>
    </CardWrapper>
  );
};

export default OrderHistoryCard;

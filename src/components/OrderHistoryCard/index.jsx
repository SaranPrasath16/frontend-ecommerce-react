import React, { useState } from "react";
import axios from "axios";
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
  ReviewButton,
  ModalOverlay,
  ModalContent,
  ModalClose,
  FormInput,
  FormTextarea,
  SubmitButton,
} from "./styles";

const OrderHistoryCard = ({ order }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState({
    productId: "",
    rating: "",
    comment: "",
    images: [],
  });

  const openModal = (productId) => {
    setReviewData((prev) => ({ ...prev, productId }));
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setReviewData((prev) => ({ ...prev, images: Array.from(e.target.files) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");

    const formData = new FormData();
    formData.append("product_Id", reviewData.productId);
    formData.append("user_Rating", reviewData.rating);
    formData.append("user_Comment", reviewData.comment);
    reviewData.images.forEach((file) =>
      formData.append("user_Image_Urls", file)
    );

    try {
      await axios.post(
        "http://localhost:8080/api/user/product/review",
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Review submitted successfully!");
      setIsModalOpen(false);
      setReviewData({
        productId: "",
        rating: "",
        comment: "",
        images: [],
      });
    } catch (err) {
      console.error("Review submission failed:", err);
      alert("Failed to submit review.");
    }
  };

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
            <ReviewButton onClick={() => openModal(item.productId)}>
              Add Review
            </ReviewButton>
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

      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalClose onClick={() => setIsModalOpen(false)}>
              &times;
            </ModalClose>
            <h3>Submit Review</h3>
            <form onSubmit={handleSubmit}>
              <FormInput
                type="number"
                name="rating"
                placeholder="Rating (0 to 5)"
                value={reviewData.rating}
                onChange={handleChange}
                required
                min="0"
                max="5"
                step="0.1"
              />
              <FormTextarea
                name="comment"
                placeholder="Your comment"
                value={reviewData.comment}
                onChange={handleChange}
                required
              />
              <FormInput
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
              <SubmitButton type="submit">Submit Review</SubmitButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </CardWrapper>
  );
};

export default OrderHistoryCard;

import React from "react";
import { AddToCartButton as StyledButton } from "./styles";
import axios from "axios";

const AddToCartButton = ({ productId, onSuccess }) => {
  const handleAddToCart = async (e) => {
    e.stopPropagation();

    const token = localStorage.getItem("jwt");
    if (!token) {
      alert("Please login to add products to the cart.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/api/user/cart",
        {
          productId: productId,
          quantity: 1,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      alert("Product added to cart!");
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Add to cart failed:", error);
      alert("Failed to add product to cart.");
    }
  };

  return <StyledButton onClick={handleAddToCart}>Add to Cart</StyledButton>;
};

export default AddToCartButton;

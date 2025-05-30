import React from "react";
import {
  CardWrapper,
  ImageColumn,
  ProductImage,
  InfoColumn,
  ProductName,
  ProductPrice,
  ButtonColumn,
  AddToCartButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const imageUrl =
    Array.isArray(product.imageUrls) && product.imageUrls.length > 0
      ? product.imageUrls[0]
      : "/assets/default.png";

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
          productId: product.productId,
          quantity: 1,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      alert("Product added to cart!");
    } catch (error) {
      console.error("Add to cart failed:", error);
      alert("Failed to add product to cart.");
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${product.productId}`);
  };

  return (
    <CardWrapper onClick={handleCardClick}>
      <ImageColumn>
        <ProductImage src={imageUrl} alt={product.productName} />
      </ImageColumn>

      <InfoColumn>
        <ProductName title={product.productName}>
          {product.productName}
        </ProductName>
        <ProductPrice>₹{product.productPrice}</ProductPrice>
      </InfoColumn>

      <ButtonColumn>
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
      </ButtonColumn>
    </CardWrapper>
  );
};

export default ProductCard;

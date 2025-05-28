import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.p`
  color: #2e7d32;
  font-weight: bold;
`;

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.productId}`);
  };

  return (
    <Card onClick={handleClick}>
      <ProductImage src={product.imageUrls[0]} alt={product.productName} />
      <ProductInfo>
        <ProductName>{product.productName}</ProductName>
        <ProductPrice>₹{product.productPrice.toLocaleString()}</ProductPrice>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;

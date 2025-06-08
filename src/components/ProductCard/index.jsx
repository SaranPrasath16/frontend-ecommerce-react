import React from "react";
import {
  CardWrapper,
  ImageColumn,
  ProductImage,
  InfoColumn,
  ProductName,
  ProductPrice,
  ButtonColumn,
} from "./styles";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import EditButton from "./EditButton"; // Import your EditButton component

const ProductCard = ({ product, buttonType = "addToCart" }) => {
  const navigate = useNavigate();

  const imageUrl =
    Array.isArray(product.imageUrls) && product.imageUrls.length > 0
      ? product.imageUrls[0]
      : "/assets/default.png";

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

      <ButtonColumn onClick={(e) => e.stopPropagation()}>
        {buttonType === "edit" ? (
          <EditButton product={product} />
        ) : (
          <AddToCartButton productId={product.productId} />
        )}
      </ButtonColumn>
    </CardWrapper>
  );
};

export default ProductCard;

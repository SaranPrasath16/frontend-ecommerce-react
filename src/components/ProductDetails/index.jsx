import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  LeftColumn,
  RightColumn,
  ImageWrapper,
  ProductImage,
  PrevButton,
  NextButton,
  Thumbnails,
  Thumbnail,
  ButtonGroup,
  ActionButton,
  ProductTitle,
  Price,
  Description,
  ReviewList,
} from "./styles";

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const response = await axios.get("/api/user/search/productid", {
          params: { product_Id: productId },
          headers: { Authorization: token },
        });

        if (Array.isArray(response.data) && response.data.length > 0) {
          setProduct(response.data[0]);
        } else {
          console.warn("Product not found in response");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const imageUrls = Array.isArray(product?.imageUrls) ? product.imageUrls : [];

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imageUrls.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.post(
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
      console.log("Added to cart:", response.data);
      alert("Product added to cart!");
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  const handleBuyNow = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.post(
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
      console.log("Buy Now added to cart:", response.data);
      alert("Proceeding to checkout...");
      // Optional: Navigate to checkout page
    } catch (error) {
      console.error("Failed to proceed with buy now:", error);
      alert("Failed to proceed with buy now.");
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <LeftColumn>
        <ImageWrapper>
          {imageUrls.length > 0 && (
            <>
              <ProductImage
                src={imageUrls[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
              />
              {imageUrls.length > 1 && (
                <>
                  <PrevButton onClick={handlePrev}>&lt;</PrevButton>
                  <NextButton onClick={handleNext}>&gt;</NextButton>
                </>
              )}
            </>
          )}
        </ImageWrapper>

        <Thumbnails>
          {imageUrls.map((url, index) => (
            <Thumbnail
              key={index}
              src={url}
              alt={`Thumbnail ${index + 1}`}
              selected={index === currentImageIndex}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </Thumbnails>

        <ButtonGroup>
          <ActionButton onClick={handleAddToCart}>Add to Cart</ActionButton>
          <ActionButton primary onClick={handleBuyNow}>
            Buy Now
          </ActionButton>
        </ButtonGroup>
      </LeftColumn>

      <RightColumn>
        <ProductTitle>{product.productName}</ProductTitle>
        <Price>₹{product.productPrice?.toLocaleString()}</Price>
        <Description>{product.productDescription}</Description>

        <h3>Reviews</h3>
        {Array.isArray(product.reviews) && product.reviews.length > 0 ? (
          <ReviewList>
            {product.reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.userName}</strong>: {review.comment} <br />
                <span>Rating: {review.rating}</span>
                <br />
                {review.userImageUrls?.[0] && (
                  <img
                    src={review.userImageUrls[0]}
                    alt={review.userName}
                    width="50"
                    style={{ borderRadius: "50%" }}
                  />
                )}
              </li>
            ))}
          </ReviewList>
        ) : (
          <p>No reviews yet.</p>
        )}
      </RightColumn>
    </Container>
  );
};

export default ProductDetail;

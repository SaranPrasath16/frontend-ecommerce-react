import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, ImageWrapper, Image, Details } from "./styles";

const CheckoutItemCard = ({ cartItem }) => {
  const [productDetails, setProductDetails] = useState(null);
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/user/search/productid",
          {
            params: { product_Id: cartItem.productId },
            headers: { Authorization: token },
          }
        );
        const data = res.data?.[0];
        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [cartItem.productId, token]);

  if (!productDetails) {
    return <Card>Loading product details...</Card>;
  }

  const { productName, productPrice, imageUrls } = productDetails;
  const productImage = imageUrls?.[0] || "/assets/default.png";

  return (
    <Card>
      <ImageWrapper>
        <Image src={productImage} alt={productName} />
      </ImageWrapper>
      <Details>
        <h4 title={productName}>{productName}</h4>
        <p>Qty: {cartItem.quantity}</p>
        <p>Price: ₹{(productPrice * cartItem.quantity).toFixed(2)}</p>
      </Details>
    </Card>
  );
};

export default CheckoutItemCard;

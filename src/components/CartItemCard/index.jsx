import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Image,
  ImageWrapper,
  Details,
  QtyInput,
  RemoveText,
  SideActions,
  ToggleWrapper,
  ToggleLabel,
  ToggleInput,
  ToggleSlider,
  TotalPrice,
} from "./styles";

const CartItemCard = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [selected, setSelected] = useState(cartItem.selectedForPayment);
  const [productDetails, setProductDetails] = useState(null);

  const { productId } = cartItem;
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/user/search/productid",
          {
            params: { product_Id: productId },
            headers: {
              Authorization: token,
            },
          }
        );
        const data = res.data?.[0];
        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId, token]);

  const updateCartItem = async (updatedQuantity, updatedSelected) => {
    try {
      await axios.put(
        "http://localhost:8080/api/user/cart",
        {
          productId,
          quantity: updatedQuantity,
          selectedForPayment: updatedSelected,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  const handleQuantityChange = async (e) => {
    const newQty = parseInt(e.target.value);
    if (newQty < 1) return;
    setQuantity(newQty);
    await updateCartItem(newQty, selected);
  };

  const handleToggleSelect = async () => {
    const newSelected = !selected;
    setSelected(newSelected);
    await updateCartItem(quantity, newSelected);
  };

  const handleRemove = async () => {
    try {
      await axios.delete("http://localhost:8080/api/user/cart", {
        params: { product_Id: productId },
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  if (!productDetails) {
    return (
      <Card>
        <Details>
          <p>Loading product details...</p>
        </Details>
      </Card>
    );
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
        <p>Price: ₹{productPrice.toFixed(2)}</p>
        <div>
          Quantity:
          <QtyInput
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <RemoveText onClick={handleRemove}>Remove</RemoveText>
      </Details>
      <SideActions>
        <TotalPrice isSelected={selected}>
          Total: ₹{(productPrice * quantity).toFixed(2)}
        </TotalPrice>
        <ToggleWrapper>
          <ToggleLabel>
            <ToggleInput
              type="checkbox"
              checked={selected}
              onChange={handleToggleSelect}
            />
            <ToggleSlider />
          </ToggleLabel>
          <span>{selected ? "Selected" : "Not Selected"}</span>
        </ToggleWrapper>
      </SideActions>
    </Card>
  );
};

export default CartItemCard;

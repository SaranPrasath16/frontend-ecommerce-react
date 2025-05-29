import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartItemCard from "../components/CartItemCard";

const Container = styled.div`
  padding: 2rem 5rem;
  background-color: #f9f9f9;
  max-width: 900px;
  margin: 0 auto;
`;

const Summary = styled.div`
  margin-top: 2rem;
  text-align: right;
`;

const CheckoutBtn = styled.button`
  margin-top: 1rem;
  background-color: #28a745;
  color: white;
  padding: 10px 25px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const res = await fetch("http://localhost:8080/api/user/cart", {
          headers: {
            Authorization: token,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch cart");
        const data = await res.json();
        setCart(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prev) => {
      const updatedItems = prev.cartItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );
      return { ...prev, cartItems: updatedItems };
    });
    // TODO: Call backend API to update quantity
  };

  const handleRemove = (productId) => {
    setCart((prev) => {
      const filteredItems = prev.cartItems.filter(
        (item) => item.productId !== productId
      );
      return { ...prev, cartItems: filteredItems };
    });
    // TODO: Call backend API to remove item
  };

  if (loading) {
    return (
      <>
        <Header />
        <Container>
          <p>Loading cart...</p>
        </Container>
        <Footer />
      </>
    );
  }

  if (!cart || cart.cartItems.length === 0) {
    return (
      <>
        <Header />
        <Container>
          <h2>My Cart</h2>
          <p>Your cart is empty.</p>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <h2>My Cart</h2>
        {cart.cartItems.map((item) => (
          <CartItemCard
            key={item.productId}
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        ))}

        <Summary>
          <h3>Subtotal: ₹{cart.totalAmount.toFixed(2)}</h3>
          <CheckoutBtn>Proceed to Checkout</CheckoutBtn>
        </Summary>
      </Container>
      <Footer />
    </>
  );
};

export default CartPage;

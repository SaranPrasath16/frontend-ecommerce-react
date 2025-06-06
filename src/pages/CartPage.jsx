import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartItemCard from "../components/CartItemCard";
import CartSummaryBox from "../components/CartSummaryBox";
import FeaturedProductsSection from "../components/FeaturedProducts/FeaturedProducts";
import AddressBox from "../components/AddressBox";

const Container = styled.div`
  padding: 2rem 5rem;
  background-color: #f9f9f9;
  max-width: 1200px;
  margin: 0 auto;
`;

const TwoColumnLayout = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CartList = styled.div`
  flex: 0 0 70%;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkingOut, setCheckingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "MyCart | QuickPikk";
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/assets/title_logo.png";
    }

    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const res = await axios.get("api/user/cart", {
          headers: {
            Authorization: token,
          },
        });
        setCart(res.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleCheckout = async () => {
    setCheckingOut(true);
    try {
      const selectedItems = cart.cartItems.filter(
        (item) => item.selectedForPayment === true
      );

      if (selectedItems.length === 0) {
        alert("Please select at least one item for checkout.");
        setCheckingOut(false);
        return;
      }

      navigate("/checkout", {
        state: {
          cartItems: selectedItems,
          totalAmount: cart.totalAmount,
        },
      });
    } catch (error) {
      alert("Failed to initiate checkout: " + error.message);
    } finally {
      setCheckingOut(false);
    }
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
        <AddressBox />
        <TwoColumnLayout>
          <CartList>
            {cart.cartItems.map((cartItem) => (
              <CartItemCard key={cartItem.productId} cartItem={cartItem} />
            ))}
          </CartList>
          <CartSummaryBox
            totalAmount={cart.totalAmount}
            onCheckout={handleCheckout}
            checkingOut={checkingOut}
          />
        </TwoColumnLayout>
      </Container>
      <FeaturedProductsSection title="You may like this" />
      <Footer />
    </>
  );
};

export default CartPage;

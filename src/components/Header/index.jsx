import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";
import CartButton from "./CartButton";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 70px;
  padding: 0 5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex: 1;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  white-space: nowrap;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Header = () => {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("jwt");

        const response = await axios.get("/api/user/cart", {
          headers: {
            Authorization: token,
          },
        });

        const items = response.data.cartItems || [];
        setItemCount(items.length);
        setCartItems(items);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  return (
    <HeaderWrapper>
      <LeftSection>
        <Logo>QuickPikk</Logo>
        <SearchBar />
      </LeftSection>
      <RightSection>
        <LoginButton />
        <CartButton itemCount={itemCount} cartItems={cartItems} />
      </RightSection>
    </HeaderWrapper>
  );
};

export default Header;

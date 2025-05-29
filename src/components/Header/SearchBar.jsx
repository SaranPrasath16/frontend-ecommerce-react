import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #dde9fd;
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;
  max-width: 600px;
  height: 40px;
`;

const SearchIcon = styled(FaSearch)`
  color: #7d7d7d;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  color: #212121;

  &::placeholder {
    color: #7d7d7d;
  }
`;

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    const trimmed = query.trim();
    if (!trimmed) {
      alert("Please enter a search term.");
      return;
    }

    const lower = trimmed.toLowerCase();

    let product_Id = "";
    let product_Name = "";
    let product_Category = "";

    if (trimmed.startsWith("PRODUCT_")) {
      product_Id = trimmed;
    } else if (
      [
        "headphones",
        "laptop",
        "mobiles",
        "stationery",
        "television",
        "camera",
        "electronics",
        "books",
        "home and furniture",
      ].some((cat) => lower.includes(cat))
    ) {
      product_Category = trimmed;
    } else {
      product_Name = trimmed;
    }

    const params = new URLSearchParams({
      product_Id,
      product_Name,
      product_Category,
    });

    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.get(
        `/api/user/search?${params.toString()}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const products = response.data;

      if (Array.isArray(products) && products.length > 0) {
        navigate("/productlist", { state: { products } });
      } else {
        alert("No products found.");
      }
    } catch (error) {
      console.error("Search error:", error);
      alert("Something went wrong while searching.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchWrapper>
      <SearchIcon onClick={handleSearch} />
      <Input
        type="text"
        placeholder="Search for Products, Brands and More"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </SearchWrapper>
  );
};

export default SearchBar;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SortFilterBar from "../components/SortFilterBar";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

const Container = styled.div`
  padding: 1rem 5rem;
  background-color: #f9f9f9;
`;

const ProductListPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    document.title = "ProductList | QuickPikk";
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/assets/title_logo.png";
    }
    const passedProducts = location.state?.products;

    if (passedProducts && Array.isArray(passedProducts)) {
      setProducts(passedProducts);
      setOriginalProducts(passedProducts);
    } else {
      console.warn("No products passed from category");
    }
  }, [location.state]);

  const handleSortChange = async (sortValue) => {
    let url = "";
    if (sortValue === "price-low") {
      url = "http://localhost:8080/api/user/sort/byprice/low-to-high";
    } else if (sortValue === "price-high") {
      url = "http://localhost:8080/api/user/sort/byprice/high-to-low";
    } else {
      return;
    }

    try {
      const token = localStorage.getItem("jwt");
      const res = await axios.post(url, originalProducts, {
        headers: {
          Authorization: token,
        },
      });
      setProducts(res.data);
    } catch (error) {
      console.error("Sorting failed:", error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <SortFilterBar onSortChange={handleSortChange} />
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ProductListPage;

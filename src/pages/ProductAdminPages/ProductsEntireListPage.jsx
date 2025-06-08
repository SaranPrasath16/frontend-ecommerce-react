import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import SortFilterBar from "../../components/SortFilterBar";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import axios from "axios";

const Container = styled.div`
  padding: 1rem 5rem;
  background-color: #f9f9f9;
`;

const ProductsEntireListPage = () => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    document.title = "All Products | QuickPikk";
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/assets/title_logo.png";
    }

    const fetchAllProducts = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const res = await axios.get(
          "http://localhost:8080/api/admin/productadmin/product",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setProducts(res.data);
        setOriginalProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchAllProducts();
  }, []);

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
            <ProductCard
              key={product.productId}
              product={product}
              buttonType="edit"
            />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No products found.</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ProductsEntireListPage;

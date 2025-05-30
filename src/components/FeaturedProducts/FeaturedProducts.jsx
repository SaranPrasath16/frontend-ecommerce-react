import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductCard from "./ProductCard";

const FeaturedSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedProducts = ({ title = "Featured Products" }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/randomproducts")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <FeaturedSection>
      <Heading>{title}</Heading>
      <ProductsWrapper>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductsWrapper>
    </FeaturedSection>
  );
};

export default FeaturedProducts;

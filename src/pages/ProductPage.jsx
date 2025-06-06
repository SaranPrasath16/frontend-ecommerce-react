import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetails";
import Footer from "../components/Footer";

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ProductPage = () => {
  const { id } = useParams();

  useEffect(() => {
    document.title = "Product | Quickpick";

    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/assets/title_logo.png";
    }
  }, []);

  return (
    <ProductPageContainer>
      <Header />
      <ProductDetail productId={id} />
      <Footer />
    </ProductPageContainer>
  );
};

export default ProductPage;

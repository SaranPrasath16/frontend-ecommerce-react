import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BannerSection from "../components/BannerSection";
import CategorySection from "../components/CategorySection";
import FeaturedProductsSection from "../components/FeaturedProducts/FeaturedProducts";
import Footer from "../components/Footer";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HomePage = () => {
  useEffect(() => {
    document.title = "Home | Quickpick";

    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/assets/quickpikklogo.png";
    }
  }, []);

  return (
    <HomePageContainer>
      <Header />
      <BannerSection />
      <CategorySection />
      <FeaturedProductsSection title="Featured Products" />
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;

import React from "react";
import styled from "styled-components";
import {
  MdLaptopMac,
  MdPhoneIphone,
  MdHome,
  MdFaceRetouchingNatural,
} from "react-icons/md";
import { FaTshirt } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const categories = [
  { name: "Electronics", icon: <GiElectric /> },
  { name: "Mobiles", icon: <MdPhoneIphone /> },
  { name: "Laptop", icon: <MdLaptopMac /> },
  { name: "Fashion and Clothing", icon: <FaTshirt /> },
  { name: "Beauty and Personal Care", icon: <MdFaceRetouchingNatural /> },
  { name: "Home and Furniture", icon: <MdHome /> },
];

const SectionWrapper = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #2c3e50;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.5rem;
`;

const CategoryCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryIcon = styled.div`
  font-size: 48px;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const CategoryLabel = styled.div`
  text-align: center;
  font-weight: 600;
  color: #2c3e50;
`;

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = async (categoryName) => {
    console.log("Clicked category:", categoryName);
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.get(
        `http://localhost:8080/api/user/search/category`,
        {
          params: { product_Category: categoryName },
          headers: {
            Authorization: token,
          },
        }
      );

      const products = response.data;
      console.log("Fetched products:", products);
      const uniqueProducts = Array.isArray(products)
        ? products.filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.productId === item.productId)
          )
        : [];

      navigate("/productlist", { state: { products: uniqueProducts } });
    } catch (error) {
      console.error("Failed to fetch products by category:", error);
    }
  };

  return (
    <SectionWrapper>
      <Title>Shop by Category</Title>
      <CategoryGrid>
        {categories.map((cat, index) => (
          <CategoryCard
            key={index}
            onClick={() => handleCategoryClick(cat.name)}
          >
            <CategoryIcon>{cat.icon}</CategoryIcon>
            <CategoryLabel>{cat.name}</CategoryLabel>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </SectionWrapper>
  );
};

export default CategorySection;

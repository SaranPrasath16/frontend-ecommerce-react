import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; 
  max-width: 100%;
  border: 1px solid #eee;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageColumn = styled.div`
  flex: 0 0 10%;
  display: flex;
  justify-content: center;
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;

export const InfoColumn = styled.div`
  flex: 0 0 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  overflow: hidden;
`;

export const ProductName = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 0.25rem 0;
  color: #333;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  color: green;
  margin: 0;
`;

export const ButtonColumn = styled.div`
  flex: 0 0 10%;
  display: flex;
  justify-content: center;
`;

export const AddToCartButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1a252f;
  }
`;


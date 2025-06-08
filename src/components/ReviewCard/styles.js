import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  max-width: 100%;
`;

export const ProductName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.6rem;
`;

export const Rating = styled.div`
  color: #ffa500;
  font-size: 1rem;
  margin-bottom: 0.6rem;
`;

export const Comment = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 1rem;
`;

export const ImageSlider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 0.5rem;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`;

export const UserImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
  border: 1px solid #ddd;
`;

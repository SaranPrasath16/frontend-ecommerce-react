import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


export const LeftColumn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RightColumn = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
  border-radius: 10px;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 2;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const PrevButton = styled(NavButton)`
  left: 0;
`;

export const NextButton = styled(NavButton)`
  right: 0;
`;

export const Thumbnails = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border: 2px solid ${({ selected }) => (selected ? "#333" : "#ccc")};
  cursor: pointer;
  border-radius: 6px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: ${({ primary }) => (primary ? "#1976d2" : "#555")};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: ${({ primary }) => (primary ? "#1565c0" : "#333")};
  }
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
`;

export const Price = styled.h2`
  color: #2e7d32;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 1rem;
  }
`;

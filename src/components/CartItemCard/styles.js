import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
  align-items: center;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #eee;
`;

export const Details = styled.div`
  flex: 1;
`;

export const QtyInput = styled.input`
  width: 50px;
  margin-left: 0.5rem;
`;

export const RemoveBtn = styled.button`
  margin-top: 0.5rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

import styled from "styled-components";

export const SummaryBox = styled.div`
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const SummaryTitle = styled.h4`
  color: #999;
  text-transform: uppercase;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.bold ? "1rem" : "0.75rem")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: 1rem;
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  background-color: #178e8e;
  color: white;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

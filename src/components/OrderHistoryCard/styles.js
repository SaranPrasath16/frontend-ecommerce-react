import styled from "styled-components";

export const CardWrapper = styled.div`
  background: white;
  margin-bottom: 1.5rem;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  cursor: default;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const OrderId = styled.h3`
  margin: 0;
`;

export const UserId = styled.span`
  color: #555;
  font-size: 0.9rem;
  align-self: center;
`;

export const CartItemsList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 1rem;
  max-height: 150px;
  overflow-y: auto;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.95rem;
`;

export const ItemName = styled.span`
  flex: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


export const ItemQuantity = styled.span`
  flex: 1;
  text-align: center;
`;

export const ItemPrice = styled.span`
  flex: 1;
  text-align: right;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-weight: 600;
`;

export const StatusRow = styled.div`
  margin-top: 0.75rem;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
`;

export const StatusItem = styled.span`
  color: green;
  font-weight: 600;
`;

export const OrderDate = styled.div`
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: #666;
  text-align: right;
`;

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
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.95rem;
  gap: 0.5rem;
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

export const ReviewButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.3rem 0.6rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
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
  color: ${(props) => (props.success ? "green" : "#c00")};
  font-weight: 600;
`;

export const OrderDate = styled.div`
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: #666;
  text-align: right;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 400px;
  position: relative;
`;

export const ModalClose = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
  border: 1px solid #ccc;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
  border: 1px solid #ccc;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

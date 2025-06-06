import styled from "styled-components";

export const CardWrapper = styled.div`
  background: white;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const UserName = styled.h3`
  margin: 0;
`;

export const UserId = styled.span`
  font-size: 0.85rem;
  color: #555;
`;

export const Email = styled.div`
  font-size: 0.9rem;
  color: #333;
  margin: 0.25rem 0;
`;

export const Mobile = styled.div`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const RoleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-top: 0.5rem; 
`;


export const Tag = styled.span`
  background-color: ${({ color }) => color || "#888"};
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

export const ActionButton = styled.button`
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ delete: isDelete }) => (isDelete ? "#e53935" : "#1976d2")};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

export const Address = styled.div`
  margin-top: 0.25rem;
  font-size: 0.9rem;
  color: #444;
`;

import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`;

const Select = styled.select`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: 2px solid #2c3e50;
  border-radius: 8px;
  background-color: white;
  color: #2c3e50;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='10' height='7' viewBox='0 0 10 7' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%232c3e50' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 10px 7px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &:focus {
    border-color: #1a252f;
    box-shadow: 0 0 6px #1a252f;
    outline: none;
  }
`;

const SortFilterBar = ({ onSortChange }) => {
  return (
    <Bar>
      <Select onChange={(e) => onSortChange(e.target.value)} defaultValue="">
        <option value="" disabled>
          Sort By
        </option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </Select>
    </Bar>
  );
};

export default SortFilterBar;

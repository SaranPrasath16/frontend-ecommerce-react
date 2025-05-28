import React, { useState } from "react";
import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 120px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #1a252f;
  }
`;

const SortFilterBar = ({ onSortChange, onFilterChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilterClick = () => {
    onFilterChange({ minPrice, maxPrice });
  };

  return (
    <Bar>
      <Select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </Select>

      <Input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <Button onClick={handleFilterClick}>Filter</Button>
    </Bar>
  );
};

export default SortFilterBar;

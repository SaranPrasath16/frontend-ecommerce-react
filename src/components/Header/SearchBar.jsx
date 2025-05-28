import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #dde9fd;
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;
  max-width: 600px;
  height: 40px;
`;

const SearchIcon = styled(FaSearch)`
  color: #7d7d7d;
  margin-right: 10px;
  font-size: 14px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  color: #212121;

  &::placeholder {
    color: #7d7d7d;
  }
`;

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchIcon />
      <Input type="text" placeholder="Search for Products, Brands and More" />
    </SearchWrapper>
  );
};

export default SearchBar;

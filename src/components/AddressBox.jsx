import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: #fff;
  border-left: 4px solid #0077cc;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h4`
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const AddressText = styled.p`
  margin: 0;
  color: #555;
  line-height: 1.5;
`;

const AddressBox = () => {
  const address = localStorage.getItem("userAddress");

  return (
    <Box>
      <Title>Deliver to this address</Title>
      <AddressText>
        {address || "No address found in local storage."}
      </AddressText>
    </Box>
  );
};

export default AddressBox;

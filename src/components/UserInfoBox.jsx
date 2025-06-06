import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: #ffffff;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h3`
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 1.6rem;
  color: #2c3e50;
  border-bottom: 2px solid #2ecc71;
  padding-bottom: 0.5rem;
`;

const InfoRow = styled.p`
  margin: 0.7rem 0;
  color: #444;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    min-width: 75px;
    font-weight: 600;
    color: #27ae60;
  }
`;

const UserInfoBox = () => {
  const userName = localStorage.getItem("userName");
  const mobile = localStorage.getItem("userMobile");
  const address = localStorage.getItem("userAddress");

  return (
    <Box>
      <Title>User Information</Title>
      <InfoRow>
        <strong>Name:</strong> {userName || "N/A"}
      </InfoRow>
      <InfoRow>
        <strong>Mobile:</strong> {mobile || "N/A"}
      </InfoRow>
      <InfoRow>
        <strong>Address:</strong> {address || "N/A"}
      </InfoRow>
    </Box>
  );
};

export default UserInfoBox;

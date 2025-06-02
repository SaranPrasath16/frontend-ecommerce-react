import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #2c3e50;
  border: 0px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #2c3e50;
    color: #fff;
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 50%;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 220px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #2c3e50;
  z-index: 10;
`;

const UserDetails = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  strong {
    display: block;
  }
  small {
    color: #666;
    font-size: 12px;
  }
`;

const MenuItem = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const LoginButton = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("userName") || "");
    setUserEmail(localStorage.getItem("userEmail") || "");
    setUserRole(localStorage.getItem("role") || "");
  }, []);

  const handleLoginRegister = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/homepage");
  };

  const handleOrderList = () => {
    navigate("/ordershistory");
  };

  const token = localStorage.getItem("jwt");

  if (token && userName) {
    return (
      <div style={{ position: "relative" }}>
        <Avatar title={userName} onClick={() => setIsOpen(!isOpen)}>
          {userName.charAt(0)}
        </Avatar>

        {isOpen && (
          <>
            <Dropdown>
              <UserDetails>
                <strong>Hi, {userRole || "USER"}</strong>
                <div>{userName}</div>
                <small>{userEmail}</small>
              </UserDetails>
              <MenuItem onClick={handleOrderList}>📦 Order List</MenuItem>
              <MenuItem onClick={handleLogout}>🚪 Logout</MenuItem>
            </Dropdown>
            <Overlay onClick={() => setIsOpen(false)} />
          </>
        )}
      </div>
    );
  }

  return <Button onClick={handleLoginRegister}>Login/Register</Button>;
};

export default LoginButton;

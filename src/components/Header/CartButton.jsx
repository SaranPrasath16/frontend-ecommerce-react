import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const ButtonWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover .dropdown {
    display: ${({ disabledHover }) => (disabledHover ? "none" : "block")};
  }
`;

const Icon = styled(FiShoppingCart)`
  font-size: 24px;
  color: #2c3e50;
`;

const CountBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 12px;
  border-radius: 50%;
  padding: 2px 6px;
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 32px;
  width: 320px;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  border-radius: 8px;
  padding: 10px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const ItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const ItemTopRow = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
`;

const ItemDetails = styled.div`
  flex: 1;
  overflow: hidden;
`;

const ItemName = styled.div`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemMeta = styled.div`
  font-size: 12px;
  color: #666;
  margin-left: 50px;
`;

const ItemRight = styled.div`
  width: 20%;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
  color: #2c3e50;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
`;

const ActionButton = styled.button`
  background-color: #2c3e50;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1a252f;
  }
`;

const AdminButton = styled(ActionButton)`
  width: 160px;

  &:hover {
    background-color: #22303c;
  }
`;

const AdminDropdown = styled(Dropdown)`
  width: 220px;
  padding: 0;
`;

const AdminItem = styled.div`
  padding: 10px 14px;
  cursor: pointer;
  color: #2c3e50;
  font-size: 14px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ddd;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 10px;
  color: #999;
`;

const CartButton = ({ itemCount = 0, cartItems = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";

  const [role, setRole] = useState("USER");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const userRole = localStorage.getItem("role") || "USER";
    setRole(userRole);
  }, []);

  const handleCartClick = () => {
    if (!isCartPage) navigate("/cart");
  };

  const handleAdminClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  const goTo = (path) => {
    setDropdownOpen(false);
    navigate(path);
  };

  const renderAdminDropdown = () => {
    const elements = [];

    if (role === "SUPER_ADMIN") {
      elements.push(
        <AdminItem key="users" onClick={() => goTo("/admin/users")}>
          User Details & Activities
        </AdminItem>,
        <Divider key="div1" />
      );
    }

    if (role === "SUPER_ADMIN" || role === "PRODUCT_ADMIN") {
      elements.push(
        <AdminItem key="products" onClick={() => goTo("/admin/products")}>
          Product Activities
        </AdminItem>
      );

      if (role === "SUPER_ADMIN") {
        elements.push(<Divider key="div2" />);
      }
    }

    if (role === "SUPER_ADMIN" || role === "ORDER_ADMIN") {
      elements.push(
        <AdminItem key="orders" onClick={() => goTo("/admin/orders")}>
          Order Activities
        </AdminItem>
      );
    }

    return (
      <AdminDropdown className="dropdown" onClick={(e) => e.stopPropagation()}>
        {elements}
      </AdminDropdown>
    );
  };

  if (role === "USER") {
    return (
      <ButtonWrapper onClick={handleCartClick} disabledHover={isCartPage}>
        <Icon />
        {itemCount > 0 && <CountBadge>{itemCount}</CountBadge>}
        {!isCartPage && (
          <Dropdown className="dropdown" onClick={(e) => e.stopPropagation()}>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => (
                  <CartItem key={item.productId}>
                    <ItemLeft>
                      <ItemTopRow>
                        <ProductImage
                          src={"/assets/default.png"}
                          alt={item.name}
                        />
                        <ItemDetails>
                          <ItemName>{item.name}</ItemName>
                        </ItemDetails>
                      </ItemTopRow>
                      <ItemMeta>Qty: {item.quantity}</ItemMeta>
                    </ItemLeft>
                    <ItemRight>₹{item.price}</ItemRight>
                  </CartItem>
                ))}
                <ButtonGroup>
                  <ActionButton onClick={() => navigate("/cart")}>
                    View Cart
                  </ActionButton>
                  <ActionButton onClick={() => navigate("/checkout")}>
                    Checkout
                  </ActionButton>
                </ButtonGroup>
              </>
            ) : (
              <EmptyMessage>Cart is empty</EmptyMessage>
            )}
          </Dropdown>
        )}
      </ButtonWrapper>
    );
  }

  return (
    <ButtonWrapper onClick={handleAdminClick}>
      <AdminButton>Admin Activities</AdminButton>
      {dropdownOpen && renderAdminDropdown()}
    </ButtonWrapper>
  );
};

export default CartButton;

import React from "react";
import {
  CardWrapper,
  HeaderRow,
  UserId,
  UserName,
  Email,
  RoleTags,
  Tag,
  ActionRow,
  ActionButton,
  Mobile,
  Address,
} from "./styles";

const UserCard = ({
  user,
  onDelete,
  onViewOrders,
  onViewReviews,
  onViewCart,
}) => {
  return (
    <CardWrapper>
      <HeaderRow>
        <UserName>{user.userName}</UserName>
        <UserId>User ID: {user.userId}</UserId>
      </HeaderRow>

      <Email>Email: {user.email}</Email>
      <Mobile>Mobile: {user.mobile}</Mobile>
      <Address>Address: {user.address}</Address>

      <RoleTags>
        {user.mainAdmin ? (
          <Tag color="#1e88e5">Main Admin</Tag>
        ) : user.productAdmin ? (
          <Tag color="#43a047">Product Admin</Tag>
        ) : user.ordersAdmin ? (
          <Tag color="#f4511e">Orders Admin</Tag>
        ) : (
          <Tag color="#777">Regular User</Tag>
        )}
      </RoleTags>

      <ActionRow>
        <ActionButton onClick={() => onViewOrders(user.userId)}>
          View Orders
        </ActionButton>
        <ActionButton onClick={() => onViewReviews(user.userId)}>
          View Reviews
        </ActionButton>
        <ActionButton onClick={() => onViewCart(user.userId)}>
          View Cart
        </ActionButton>
        <ActionButton delete onClick={() => onDelete(user.userId)}>
          Delete
        </ActionButton>
      </ActionRow>
    </CardWrapper>
  );
};

export default UserCard;

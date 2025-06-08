import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UserCard from "../../components/UserCard";
import CartItemCard from "../../components/CartItemCard";
import OrderHistoryCard from "../../components/OrderHistoryCard";
import ReviewCard from "../../components/ReviewCard";
import axios from "axios";

const Container = styled.div`
  padding: 2rem 5rem;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  position: relative;
  z-index: 1000;
  max-height: 80vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  border: none;
  background: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const UsersListPage = () => {
  const [users, setUsers] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    document.title = "User List | QuickPikk";
    const favicon = document.getElementById("favicon");
    if (favicon) favicon.href = "/assets/title_logo.png";

    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const res = await axios.get(
          "http://localhost:8080/api/admin/superadmin/users",
          {
            headers: { Authorization: token },
          }
        );
        setUsers(res.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmed) return;

    try {
      const token = localStorage.getItem("jwt");
      await axios.delete(
        `http://localhost:8080/api/admin/superadmin/user?user_Id=${userId}`,
        {
          headers: { Authorization: token },
        }
      );
      setUsers((prev) => prev.filter((u) => u.userId !== userId));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleView = async (type, userId) => {
    const token = localStorage.getItem("jwt");
    let endpoint = "";

    switch (type) {
      case "orders":
        endpoint = `http://localhost:8080/api/admin/superadmin/user/orders?user_Id=${userId}`;
        setModalTitle("User Orders");
        break;
      case "reviews":
        endpoint = `http://localhost:8080/api/admin/superadmin/user/reviews?user_Id=${userId}`;
        setModalTitle("User Reviews");
        break;
      case "cart":
        endpoint = `http://localhost:8080/api/admin/superadmin/user/cart?user_Id=${userId}`;
        setModalTitle("User Cart");
        break;
      default:
        return;
    }

    try {
      const res = await axios.get(endpoint, {
        headers: { Authorization: token },
      });
      setModalData(res.data);
    } catch (err) {
      console.error(`Failed to fetch user ${type}:`, err);
      setModalData({ error: `Failed to fetch ${type}` });
    }
  };

  const closeModal = () => {
    setModalData(null);
    setModalTitle("");
  };

  return (
    <>
      <Header />
      <Container>
        <PageTitle>All Registered Users</PageTitle>
        {users.length > 0 ? (
          users.map((user) => (
            <UserCard
              key={user.userId}
              user={user}
              onDelete={handleDeleteUser}
              onViewOrders={() => handleView("orders", user.userId)}
              onViewReviews={() => handleView("reviews", user.userId)}
              onViewCart={() => handleView("cart", user.userId)}
            />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No users found.</p>
        )}
      </Container>
      <Footer />

      {modalData && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h3>{modalTitle}</h3>

            {modalTitle === "User Cart" ? (
              !modalData?.cartItems || modalData.cartItems.length === 0 ? (
                <p style={{ textAlign: "center" }}>Cart is empty.</p>
              ) : (
                <ListWrapper>
                  {modalData.cartItems.map((cartItem) => (
                    <CartItemCard
                      key={cartItem.productId}
                      cartItem={cartItem}
                    />
                  ))}
                </ListWrapper>
              )
            ) : modalTitle === "User Orders" ? (
              !modalData?.orderList || modalData.orderList.length === 0 ? (
                <p style={{ textAlign: "center" }}>
                  User hasn't placed any orders yet.
                </p>
              ) : (
                <ListWrapper>
                  {modalData.orderList.map((order) => (
                    <OrderHistoryCard key={order.orderId} order={order} />
                  ))}
                </ListWrapper>
              )
            ) : modalTitle === "User Reviews" ? (
              Array.isArray(modalData) && modalData.length > 0 ? (
                <ListWrapper>
                  {modalData.map((review, idx) => (
                    <ReviewCard key={idx} review={review} />
                  ))}
                </ListWrapper>
              ) : (
                <p style={{ textAlign: "center" }}>
                  No reviews submitted by this user.
                </p>
              )
            ) : (
              <p style={{ textAlign: "center" }}>Unknown data type</p>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default UsersListPage;

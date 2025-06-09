# 🛍️ E-Commerce Application (Frontend)

## Overview

This is the **frontend** of the e-commerce platform developed using **React**. It provides a clean, responsive, and user-friendly interface for users and admin roles, enabling seamless interaction with the backend APIs. The application supports user shopping activities and various admin-level operations like product and order management.

---

## ⚙️ Tech Stack

- **Library:** React 18+
- **Routing:** React Router DOM
- **State Management:** React Context / useState / useEffect
- **Styling:** Styled-Components
- **HTTP Client:** Axios
- **Build Tool:** Vite
- **Authentication:** JWT-based login via APIs

---

## 🎯 Key Features

### 👤 User Functionality

- View and search products.
- Add items to cart.
- Place orders.
- View order history.

### 🧑‍💼 Admin Functionality

#### Super Admin

- View all users.
- View all product listings.
- View all user carts.
- View all orders.

#### Product Admin

- Add new products.
- Edit or delete existing products.

#### Order Admin

- Manage orders.
- Update order delivery status.

---

## 🚀 Cloning & Setup Guide

Follow these steps to get the frontend up and running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/SaranPrasath16/frontend-ecommerce-react
cd ecommerce-frontend

### 2. Install Dependencies

npm install

##  3. Create and Configure .env File

Create a .env file in the root of the project and add the following environment variables:

VITE_API_BASE_URL=http://localhost:8080/api
VITE_GOOGLE_CLIENT_ID=your-google-client-id

## 4. Start the Development Server

npm run dev


The app will be available at:
http://localhost:5173/
```

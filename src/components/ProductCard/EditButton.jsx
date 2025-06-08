import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// Styled Components
const ActionButton = styled.button`
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e59400;
  }
`;

const DeleteModalButton = styled.button`
  margin-top: 0.75rem;
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #cc0000;
  }
`;

const Overlay = styled.div`
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

const Modal = styled.div`
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 1.6rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  &:hover {
    color: #000;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-top: 1rem;
  font-weight: 600;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  margin-top: 0.25rem;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  &:focus {
    border-color: #ffa500;
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem 0.75rem;
  margin-top: 0.25rem;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  min-height: 80px;
  &:focus {
    border-color: #ffa500;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  margin-top: 1.5rem;
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e59400;
  }
`;

// Main Component
const EditButton = ({ productId, onSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    productNewName: "",
    productNewCategory: "",
    productNewDescription: "",
    productNewPrice: "",
    productNewStock: "",
    imagesToDelete: "",
    newImages: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImagesToDeleteChange = (e) => {
    setForm((prev) => ({ ...prev, imagesToDelete: e.target.value }));
  };

  const handleFiles = (e) => {
    setForm((prev) => ({ ...prev, newImages: Array.from(e.target.files) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    if (!token) return alert("Please login first.");

    const formData = new FormData();
    formData.append("product_Id", productId);
    formData.append("product_New_Name", form.productNewName);
    formData.append("product_New_Category", form.productNewCategory);
    formData.append("product_New_Description", form.productNewDescription);
    formData.append("product_New_Price", form.productNewPrice);
    formData.append("product_New_Stock", form.productNewStock);
    formData.append("images_To_Delete", form.imagesToDelete);
    form.newImages.forEach((file) => formData.append("product_Images", file));

    try {
      const res = await axios.put(
        "http://localhost:8080/api/admin/product",
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Product updated!");
      setIsOpen(false);
      if (onSuccess) onSuccess(res.data);
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update product.");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    const token = localStorage.getItem("jwt");
    if (!token) return alert("Please login first.");

    try {
      await axios.delete(
        `http://localhost:8080/api/admin/productadmin/product?product_Id=${productId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      alert("Product deleted!");
      setIsOpen(false);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete product.");
    }
  };

  return (
    <>
      <ActionButton onClick={() => setIsOpen(true)}>Edit & Delete</ActionButton>

      {isOpen && (
        <Overlay onClick={() => setIsOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
            <h3>Edit Product</h3>
            <form onSubmit={handleSubmit}>
              <FormLabel htmlFor="productNewName">Name:</FormLabel>
              <FormInput
                id="productNewName"
                type="text"
                name="productNewName"
                value={form.productNewName}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="productNewCategory">Category:</FormLabel>
              <FormInput
                id="productNewCategory"
                type="text"
                name="productNewCategory"
                value={form.productNewCategory}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="productNewDescription">
                Description:
              </FormLabel>
              <FormTextarea
                id="productNewDescription"
                name="productNewDescription"
                value={form.productNewDescription}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="productNewPrice">Price:</FormLabel>
              <FormInput
                id="productNewPrice"
                type="number"
                name="productNewPrice"
                value={form.productNewPrice}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
              />
              <FormLabel htmlFor="productNewStock">Stock:</FormLabel>
              <FormInput
                id="productNewStock"
                type="number"
                name="productNewStock"
                value={form.productNewStock}
                onChange={handleChange}
                required
                min="0"
              />
              <FormLabel htmlFor="imagesToDelete">
                Images to Delete (comma separated):
              </FormLabel>
              <FormInput
                id="imagesToDelete"
                type="text"
                name="imagesToDelete"
                placeholder="img1.jpg,img2.jpg"
                value={form.imagesToDelete}
                onChange={handleImagesToDeleteChange}
              />
              <FormLabel htmlFor="newImages">New Images:</FormLabel>
              <FormInput
                id="newImages"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFiles}
              />
              <SubmitButton type="submit">Update Product</SubmitButton>
              <DeleteModalButton type="button" onClick={handleDelete}>
                Delete Product
              </DeleteModalButton>
            </form>
          </Modal>
        </Overlay>
      )}
    </>
  );
};

export default EditButton;

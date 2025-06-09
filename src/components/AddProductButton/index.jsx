import React, { useState } from "react";
import axios from "axios";
import {
  ActionButton,
  Overlay,
  Modal,
  CloseButton,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
} from "./styles";

const AddProductButton = ({ onSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    category: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFiles = (e) => {
    setForm((prev) => ({ ...prev, images: Array.from(e.target.files) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    if (!token) return alert("Please login first.");

    const formData = new FormData();
    formData.append("product_Category", form.category);
    formData.append("product_Name", form.name);
    formData.append("product_Description", form.description);
    formData.append("product_Price", form.price);
    formData.append("no_Of_Stocks", form.stock);
    form.images.forEach((file) => formData.append("product_Images", file));

    try {
      const res = await axios.post(
        "http://localhost:8080/api/admin/productadmin/product",
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Product added successfully!");
      setIsOpen(false);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Add product failed:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <>
      <ActionButton onClick={() => setIsOpen(true)}>Add Product</ActionButton>
      {isOpen && (
        <Overlay onClick={() => setIsOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="category">Category</FormLabel>
              <FormInput
                id="category"
                name="category"
                type="text"
                value={form.category}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="description">Description</FormLabel>
              <FormTextarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="price">Price</FormLabel>
              <FormInput
                id="price"
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
              />
              <FormLabel htmlFor="stock">Stock</FormLabel>
              <FormInput
                id="stock"
                name="stock"
                type="number"
                value={form.stock}
                onChange={handleChange}
                required
                min="0"
              />
              <FormLabel htmlFor="images">Images</FormLabel>
              <FormInput
                id="images"
                name="images"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFiles}
              />
              <SubmitButton type="submit">Add Product</SubmitButton>
            </form>
          </Modal>
        </Overlay>
      )}
    </>
  );
};

export default AddProductButton;

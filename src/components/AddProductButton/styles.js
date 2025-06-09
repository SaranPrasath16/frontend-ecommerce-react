import styled from "styled-components";

export const ActionButton = styled.button`
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

export const Overlay = styled.div`
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

export const Modal = styled.div`
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

export const CloseButton = styled.button`
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

export const FormLabel = styled.label`
  display: block;
  margin-top: 1rem;
  font-weight: 600;
  color: #333;
`;

export const FormInput = styled.input`
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

export const FormTextarea = styled.textarea`
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

export const SubmitButton = styled.button`
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

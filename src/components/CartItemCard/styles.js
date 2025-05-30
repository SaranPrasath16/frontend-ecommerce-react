import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  height: 200px;
  box-sizing: border-box;
`;


export const ImageWrapper = styled.div`
  flex: 0 0 120px;
  margin-right: 16px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    margin: 0 0 8px 0;
    font-size: 1.1rem;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    margin: 4px 0;
  }
`;


export const QtyInput = styled.input`
  width: 60px;
  padding: 6px 8px;
  margin-left: 8px;
  font-size: 0.95rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
`;


export const RemoveText = styled.span`
  margin-top: 4px;
  color: #ff4d4f;
  font-size: 0.85rem;
  cursor: pointer;
  text-decoration: underline;
  align-self: flex-start;

  &:hover {
    opacity: 0.8;
  }
`;


export const SideActions = styled.div`
  flex: 0 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;

  p {
    font-weight: bold;
    margin: 0;
  }
`;

export const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    font-size: 0.85rem;
    margin-top: 0px;
  }
`;

export const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 24px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #4caf50;
  }

  &:checked + span:before {
    transform: translateX(18px);
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const TotalPrice = styled.p`
  font-weight: bold;
  margin: 0;
  color: ${(props) => (props.isSelected ? "#4caf50" : "#ff4d4f")};
`;


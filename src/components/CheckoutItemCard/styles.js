import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  height: 140px; /* Fixed height */
  box-sizing: border-box;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  flex: 0 0 120px;
  height: 100%; /* Match card height */
  margin-right: 16px;
  border-radius: 8px;
  overflow: hidden; /* Trim image overflow */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Crop the image to fill the container */
  border-radius: 8px;
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
    font-size: 0.95rem;
  }
`;

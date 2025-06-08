import React from "react";
import {
  Card,
  ProductName,
  Rating,
  Comment,
  ImageSlider,
  UserImage,
} from "./styles";

const StarDisplay = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);

  for (let i = 0; i < 5; i++) {
    stars.push(i < fullStars ? "★" : "☆");
  }

  return <span>{stars.join(" ")}</span>;
};

const ReviewCard = ({ review }) => {
  const { productName, rating, comment, userImageUrls } = review;

  return (
    <Card>
      <ProductName title={productName}>{productName}</ProductName>
      <Rating>
        <StarDisplay rating={rating} /> ({rating})
      </Rating>
      <Comment>{comment}</Comment>

      {userImageUrls && userImageUrls.length > 0 && (
        <ImageSlider>
          {userImageUrls.map((url, idx) => (
            <UserImage key={idx} src={url} alt={`user-img-${idx}`} />
          ))}
        </ImageSlider>
      )}
    </Card>
  );
};

export default ReviewCard;

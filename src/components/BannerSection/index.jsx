import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;

const images = [
  "/assets/bannerimages/bannerimage1.jpg",
  "/assets/bannerimages/bannerimage2.jpg",
  "/assets/bannerimages/bannerimage3.jpg",
  "/assets/bannerimages/bannerimage4.jpg",
  "/assets/bannerimages/bannerimage5.jpg",
];

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <BannerWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((src, index) => (
        <BannerImage
          key={index}
          src={src}
          alt={`Banner ${index + 1}`}
          active={index === currentIndex}
        />
      ))}
    </BannerWrapper>
  );
};

export default BannerSection;

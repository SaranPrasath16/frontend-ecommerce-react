import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: #172337;
  color: #fff;
  padding: 3rem 2rem;
  font-size: 0.9rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const FooterColumn = styled.div``;

const FooterTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #f1f1f1;
`;

const FooterLink = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  color: #b0bec5;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  svg {
    font-size: 1.25rem;
    color: #b0bec5;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #b0bec5;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterColumn>
          <FooterTitle>About</FooterTitle>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Press</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Help</FooterTitle>
          <FooterLink href="#">Payments</FooterLink>
          <FooterLink href="#">Shipping</FooterLink>
          <FooterLink href="#">Cancellation & Returns</FooterLink>
          <FooterLink href="#">FAQs</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Policy</FooterTitle>
          <FooterLink href="#">Return Policy</FooterLink>
          <FooterLink href="#">Terms of Use</FooterLink>
          <FooterLink href="#">Security</FooterLink>
          <FooterLink href="#">Privacy</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Social</FooterTitle>
          <SocialIcons>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </SocialIcons>
        </FooterColumn>
      </FooterGrid>

      <FooterBottom>
        © {new Date().getFullYear()} Quickpick. All rights reserved.
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;

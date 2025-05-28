import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Body, OtpBox, Title, Input, Button, Message } from "./styles";

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "Verify OTP | QuickPikk";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{6}$/.test(otp)) {
      setMessage("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post("/api/user/otp", {
        email,
        otp,
      });

      alert("OTP verified successfully!");
      navigate("/login");
    } catch (error) {
      console.error("OTP Verification failed:", error);
      setMessage("Invalid OTP or verification failed.");
    }
  };

  return (
    <Body>
      <OtpBox>
        <Title>OTP Verification</Title>
        <p>
          We’ve sent a 6-digit code to: <strong>{email}</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            maxLength="6"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <Button type="submit">Verify OTP</Button>
        </form>
        {message && <Message>{message}</Message>}
      </OtpBox>
    </Body>
  );
};

export default VerifyOtp;

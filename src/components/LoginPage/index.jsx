import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Body,
  Container,
  SignInContainer,
  SignUpContainer,
  Form,
  Input,
  Button,
  OverlayContainer,
  Overlay,
  OverlayLeft,
  OverlayRight,
} from "./styles";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleCredentialResponse = (response) => {
    const token = response.credential;
    axios
      .post("/api/auth/google-login", { idToken: token })
      .then((res) => {
        const token = res.headers["authorization"];
        if (token?.startsWith("Bearer ")) {
          localStorage.setItem("jwt", token);
          localStorage.setItem("userName", res.headers["username"]);
          localStorage.setItem("userEmail", res.headers["useremail"]);
          localStorage.setItem("userAddress", res.headers["useraddress"]);
          localStorage.setItem("userMobile", res.headers["usermobile"]);
          localStorage.setItem("role", res.headers["role"]);
          localStorage.setItem("userId", res.headers["userid"]);

          navigate("/homepage");
        } else {
          console.error("JWT missing");
        }
      })
      .catch((err) => console.error("Login error:", err));
  };

  useEffect(() => {
    document.title = "login | QuickPikk";

    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/assets/title_logo.png";
    }

    window.google?.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    window.google?.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      {
        theme: "filled_blue",
        size: "medium",
        type: "standard",
        shape: "pill",
        logo_alignment: "left",
        width: 200,
      }
    );
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    axios
      .post("/api/user/login", { email: email.value, password: password.value })
      .then((res) => {
        const token = res.headers["authorization"];
        if (token?.startsWith("Bearer ")) {
          localStorage.setItem("jwt", token);
          localStorage.setItem("userName", res.headers["username"]);
          localStorage.setItem("userEmail", res.headers["useremail"]);
          localStorage.setItem("userAddress", res.headers["useraddress"]);
          localStorage.setItem("userMobile", res.headers["usermobile"]);
          localStorage.setItem("role", res.headers["role"]);
          localStorage.setItem("userId", res.headers["userid"]);
          navigate("/homepage");
        } else {
          console.error("JWT missing");
        }
      })
      .catch((err) => console.error("Login error:", err));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { userName, email, mobile, address, pswd1, pswd2 } = e.target;

    if (pswd1.value !== pswd2.value) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .post("/api/user/register", {
        userName: userName.value,
        email: email.value,
        mobile: mobile.value,
        address: address.value,
        password: pswd1.value,
      })
      .then(() => navigate("/otp", { state: { email: email.value } }))
      .catch((err) => console.error("Registration error:", err));
  };

  return (
    <Body>
      <Container className={isRightPanelActive ? "right-panel-active" : ""}>
        <SignUpContainer className="sign-up-container">
          <Form onSubmit={handleRegister}>
            <h1>Create Account</h1>
            <Input name="userName" placeholder="Username" required />
            <Input type="email" name="email" placeholder="Email" required />
            <Input type="tel" name="mobile" placeholder="Mobile" required />
            <Input name="address" placeholder="Address" required />
            <Input
              type="password"
              name="pswd1"
              placeholder="Password"
              required
            />
            <Input
              type="password"
              name="pswd2"
              placeholder="Confirm Password"
              required
            />
            <Button type="submit">Sign Up</Button>
          </Form>
        </SignUpContainer>

        <SignInContainer className="sign-in-container">
          <Form onSubmit={handleLogin}>
            <h1>User Login</h1>
            <Input type="email" name="email" placeholder="Email" required />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <Button type="submit">Log In</Button>
            <div
              id="googleSignInDiv"
              style={{ marginTop: "30px", marginLeft: "50px" }}
            ></div>
          </Form>
        </SignInContainer>

        <OverlayContainer className="overlay-container">
          <Overlay className="overlay">
            <OverlayLeft onClick={() => setIsRightPanelActive(false)}>
              <h1>Welcome Back!</h1>
              <p>To keep connected, please login with your personal info</p>
              <Button className="ghost">Sign In</Button>
            </OverlayLeft>
            <OverlayRight onClick={() => setIsRightPanelActive(true)}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <Button className="ghost">Sign Up</Button>
            </OverlayRight>
          </Overlay>
        </OverlayContainer>
      </Container>
    </Body>
  );
};

export default LoginPage;

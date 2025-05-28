import styled, { keyframes } from "styled-components";

const montserrat = "'Montserrat', sans-serif";

export const show = keyframes`
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
`;

export const Body = styled.div`
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${montserrat};
  height: 100vh;
  margin: -20px 0 50px;
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15),
              0 10px 10px rgba(0, 0, 0, 0.10);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 520px;
  font-family: ${montserrat};

  &.right-panel-active {
    .sign-in-container {
      transform: translateX(100%);
    }
    .sign-up-container {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: ${show} 0.6s;
    }
    .overlay-container {
      transform: translateX(-100%);
    }
    .overlay {
      transform: translateX(50%);
    }
    .overlay-left {
      transform: translateX(0);
    }
    .overlay-right {
      transform: translateX(20%);
    }
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  width: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  text-align: center;
`;

export const SignInContainer = styled(FormContainer)`
  left: 0;
  z-index: 2;
`;

export const SignUpContainer = styled(FormContainer)`
  left: 0;
  opacity: 0;
  z-index: 1;
`;

export const Form = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  font-size: 14px;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #2c3e50;
  background-color: #2c3e50;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  margin-top: 10px;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  &.ghost {
    background-color: transparent;
    border-color: #fff;
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
`;

export const Overlay = styled.div`
  background: linear-gradient(to right, #2c3e50, #1a252f);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  display: flex;
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transition: transform 0.6s ease-in-out;
`;

export const OverlayLeft = styled(OverlayPanel)`
  left: 0;
  transform: translateX(0);
`;

export const OverlayRight = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
`;

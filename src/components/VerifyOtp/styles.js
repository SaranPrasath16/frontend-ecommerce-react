import styled from "styled-components";

const montserrat = "'Montserrat', sans-serif";

export const Body = styled.div`
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${montserrat};
  height: 100vh;
`;

export const OtpBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
              0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 40px 60px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: bold;
  color: #2c3e50;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px;
  margin: 10px 0;
  width: 100%;
  font-size: 16px;
  letter-spacing: 5px;
  text-align: center;
  color: #2c3e50;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #2c3e50;
  background-color: #2c3e50;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 45px;
  margin-top: 15px;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
  }

  &:focus {
    outline: none;
  }
`;

export const Message = styled.p`
  color: #2c3e50;
  margin-top: 15px;
`;

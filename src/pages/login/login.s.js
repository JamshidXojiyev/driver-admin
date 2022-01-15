import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../../assats/background/login-bg.png";
export const LogInBg = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogInContainer = styled.div`
  width: 780px;
  height: 581px;
  filter: drop-shadow(5px 3px 20px rgba(255, 255, 255, 0.4));
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  overflow: hidden;
`;
export const LeftContent = styled.div`
  background: url(${bg});
  width: 400px;
  height: 581px;
`;
export const RightContent = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0 35px;
`;
export const Brand = styled.img`
  margin: 0 auto;
  margin-bottom: 18px;
`;
export const H1 = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #252733;
  text-align: center;
  margin-bottom: 12px;
`;
export const H2 = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #9fa2b4;
  text-align: center;
  margin-bottom: 50px;
`;
export const LinkStyle = styled(Link)`
  width: 100%;
`;

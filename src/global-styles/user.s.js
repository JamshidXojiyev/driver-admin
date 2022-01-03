import styled from "styled-components";

export const UserImage = styled.img`
  width: ${({ width }) => (width ? width : "38px")};
  height: ${({ height }) => (height ? height : "38px")};
  border-radius: 50% !important;
  margin: 0 5px 0 5px;
`;
export const UserName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #192a3e;
  text-align: left;
`;
export const UserPhone = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.01em;
  color: #90a0b7;
  text-align: left;
`;

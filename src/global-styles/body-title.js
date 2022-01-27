import styled from "styled-components";

export const MenuName = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: #2e3a59;
  padding-right: 14px;
  margin-right: 14px;
  border-right: ${({ borderNone }) => (borderNone ? "" : "1px solid #e4e6ee")};
  min-width: 127px;
`;
export const MenuSpan = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #505470;
`;

export const ActivUser = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #5b5f7b;
  margin-right: 12px;
  min-width: 126px;
`;

import styled, { css } from "styled-components";

export const UserImage = styled.img`
  width: ${({ width }) => (width ? width : "38px")};
  height: ${({ height }) => (height ? height : "38px")};
  border-radius: 50% !important;
  margin: 0 5px 0 5px;
  object-fit: scale-down;
  ${({ chat }) =>
    chat &&
    css`
      border: 2px solid #dfe0eb;
      margin: 0 5px 0 0;
      padding: 2px;
      margin-right: 8px;
      width: 48px;
      height: 48px;
    `}
`;
export const UserName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #192a3e;
  text-align: left;
  ${({ chat }) =>
    chat &&
    css`
      font-weight: 600;
      font-size: 18px;
      color: #ffffff;
    `}
`;
export const UserPhone = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 0.01em;
  color: #90a0b7;
  text-align: left;
  ${({ chat }) =>
    chat &&
    css`
      font-weight: normal;
      font-size: 11px;
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.6;
    `}
`;


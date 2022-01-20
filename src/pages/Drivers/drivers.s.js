import styled, { css } from "styled-components";

export const DateStatus = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 13px;
  text-transform: capitalize;
  border-radius: 9px;
  padding: 2px 6px;
  ${({ red }) =>
    red
      ? css`
          background: rgba(255, 51, 63, 0.2);
          color: #ff333f;
        `
      : css`
          background: rgba(36, 193, 143, 0.1);
          color: #24c18f;
        `}
`;

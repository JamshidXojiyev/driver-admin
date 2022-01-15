import styled, { css } from "styled-components";

const infoStyle = css`
  color: rgb(13, 60, 97);
  background-color: rgb(232, 244, 253);
`;
const successStyle = css`
  color: rgb(30, 70, 32);
  background-color: rgb(237, 247, 237);
`;
const errorStyle = css`
  color: rgb(97, 26, 21);
  background-color: rgb(253, 236, 234);
`;

export const AlertStyle = styled.div`
  && {
    ${({ type }) =>
      type === "info"
        ? infoStyle
        : type === "success"
        ? successStyle
        : type === "error" && errorStyle}
    padding: 8px 20px!important;
    margin: 0 6px 6px 0;
    border-radius: 4px;
    min-width: 280px;
    gap: 6px;
    display: flex;
    align-items: center;

    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }
`;

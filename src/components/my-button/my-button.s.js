import styled, { css } from "styled-components";

const darkStyle = css`
  background: #101010;
  border-radius: 8px;
  border: 0;

  font-weight: normal;
  color: #ffffff;
`;
const blueStyle = css`
  border: 1px solid #5459ea;
  border-radius: 4px;
  background-color: #fff;
  font-weight: 500;
  text-align: center;
  color: #5459ea;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #5459ea;
    color: #fff;
  }
`;
const redStyle = css`
  border: 1px solid #ff333f;
  border-radius: 4px;
  background-color: #fff;
  font-weight: 500;
  text-align: center;
  color: #ff333f;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #ff333f;
    color: #fff;
  }
`;
const iconStyle = css`
  && {
    border: 0;
    border-radius: 50%;
    width: ${({ size }) => (size ? size : "38px")};
    height: ${({ size }) => (size ? size : "38px")};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: #00000000;
    transition: all 0.3s ease-in-out;
    /* :hover {
      background-color: rgba(0, 72, 217, 0.02);
    } */
    svg {
      position: inherit !important;
    }
  }
`;
const paginationStyle = css`
  && {
    border: 1px solid #eff0f4;
    border-radius: 3px;
    color: #505470;
    background-color: #ffffff00;
    width: 27px;
    height: 27px;
    transform: ${({ left, right }) =>
      left ? "rotate(90deg)" : right && "rotate(-90deg)"};
    svg {
      width: 9px;
    }
    path {
      stroke: ${({ disabled }) =>
        disabled ? "#C4C4C4 !important" : "#353849 !important"};
    }
    ${({ activ }) =>
      activ &&
      css`
        background-color: #5459ea;
        color: #fff;
      `}
  }
`;

export const ButtonStyled = styled.button`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ dark, blue, red }) => (blue || red ? "38px" : dark && "48px")};
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 13px;
  line-height: 16px;
  cursor: pointer;
  ${({ dark, blue, red, icon, pagination }) =>
    dark
      ? darkStyle
      : blue
      ? blueStyle
      : red
      ? redStyle
      : icon
      ? iconStyle
      : pagination && paginationStyle}
`;

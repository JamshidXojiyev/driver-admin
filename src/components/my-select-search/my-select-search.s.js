import styled, { css } from "styled-components";
import SelectSearch from "react-select-search";

const errorStyle = css`
  border: 1px solid #ff333f;
  animation: animate 0.7s linear forwards;
  color: #ff333f;
  @keyframes animate {
    0% {
      transform: translateX(5px);
    }
    10% {
      transform: translateX(-5px);
    }
    20% {
      transform: translateX(5px);
    }
    30% {
      transform: translateX(-5px);
    }
    40% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(-5px);
    }
    60% {
      transform: translateX(5px);
    }
    70% {
      transform: translateX(-5px);
    }
    80% {
      transform: translateX(5px);
    }
    90% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;
export const SelectSearchStyle = styled(SelectSearch)`
  && {
    width: ${({ width }) => (width ? width : "100%")};
    position: relative;
    z-index: 9999999;
    input {
      font-family: "Inter", sans-serif;
      font-size: 14px;
      line-height: 17px;
      color: #aeb4cf;

      width: 100%;
      border: 1px solid #e4e6ee;
      padding: 11px 16px;
      min-height: 42px;
      border-radius: 4px;
      cursor: pointer;
      ${({ error }) => (error ? errorStyle : "")}
    }
    div:first-child {
      position: relative;
      z-index: 1;
      :after {
        content: "";
        transform: rotate(45deg);
        border-right: 1.5px solid #9da3bb;
        border-bottom: 1.5px solid #9da3bb;
        display: inline-block;
        position: absolute;
        top: calc(50% - 7px);
        right: 19px;
        width: 10px;
        height: 10px;
      }
    }
    div:nth-child(2) {
      position: absolute;
      z-index: 2;
      top: 46px;
      right: 0;
      left: 0;
      border-radius: 3px;
      overflow: scroll;
      max-height: 180px !important;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
      ul {
        background: #fff;
      }
      li {
        height: 38px;
        :first-child {
          border-top: 0;
        }
        border-top: 1px solid #eee;
      }
      li > button {
        background-color: #ffffff00;
        border: 0;
        width: 100%;
        height: 100%;
        :hover {
          background-color: #eee;
        }
      }
    }
  }
`;

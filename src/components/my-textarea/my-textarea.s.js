import styled, { css } from "styled-components";

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

export const TextareaStyle = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 13px 11px;
  border: 1px solid #e4e6ee;
  box-sizing: border-box;
  border-radius: 4px;
  resize: none;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #aeb4cf;
  ${({ error }) => (error ? errorStyle : "")}
`;

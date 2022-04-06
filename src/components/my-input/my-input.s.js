import styled, { css } from "styled-components";

const darkStyle = css`
  border: 1px solid #101010;
  padding: 11px 16px;
  height: 42px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  :focus-visible {
    outline: #101010 !important;
  }
  ::placeholder {
    color: #9fa2b4;
  }
  :hover {
    background: #fcfdfe;
  }
  color: #101010;
`;
const liteStyle = css`
  border: 1px solid #e4e6ee;
  padding: 11px 16px;
  height: 42px;
  border-radius: 4px;
  :focus-visible {
    outline: #e4e6ee !important;
  }
  ::placeholder {
    color: #aeb4cf;
  }
  :hover {
    background: #fcfdfe;
  }
  color: #aeb4cf;
`;
const searchStyle = css`
  background: #ffffff;
  border: 1px solid #f2ecff;
  border-radius: 30px;
  padding: 16px 22px;
  height: 48px;
  color: #3366ff;
  transition: all 0.2s ease-in-out;
  :focus-visible {
    outline: #f2ecff !important;
  }
  ::placeholder {
    color: #9da3bb;
  }
  :hover {
    background: #fcfdfe;
  }
`;
const errorStyle = css`
  border: 1px solid #ff333f;
  color: #ff333f;
  animation: animate 0.7s linear forwards;
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

export const InputBlockStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  width: 100%;
`;
export const InputStyle = styled.input`
  && {
    width: 100%;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    line-height: 17px;
    ${({ dark, lite, search }) =>
      dark ? darkStyle : lite ? liteStyle : search && searchStyle}
    transition: all .5s ease-in-out;
    ${({ error }) => (error ? errorStyle : "")}
  }
`;
export const SearchIconStyle = styled.div`
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  right: 5px;
`;
export const LabelStyle = styled.label`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: ${({ error }) => (error ? "#ff333f" : "#101010")};
  text-align: left;
  width: 100%;
  padding-bottom: 7px;
`;
export const ErrorMessage = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 10px;
  color: #ff333f;
  text-align: left;
  width: 100%;
  padding-top: 4px;
`;

import styled from "styled-components";
import { ReactComponent as CheckSVG } from "../../assats/icons/check.svg";
import MyButton from "../my-button/my-button";

export const OrderIMG = styled.img`
  margin: 4px 0;
  height: 92px;
  border-radius: 8px;
  object-fit: cover;
`;
export const CheckSVGContent = styled(CheckSVG)`
  margin: 18px 0;
  height: 100%;
`;
export const DropzoneBlock = styled.div`
  width: 100%;
  min-height: 100px;
  border: ${({ error }) =>
    error ? "1.4px dashed #ff0000 !important" : "1.4px dashed #cdd6e0"};
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 64px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  & h1,
  span {
    color: ${({ error }) => (error ? "#ff0000 !important" : "")};
  }
  & span {
    font-weight: ${({ error }) => (error ? "800" : "")};
  }
`;
export const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 12px;
  color: #646464;
  margin-bottom: 8px;
  text-align: center;
`;
export const SPAN = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 12px;
  color: #ff69a5;
`;
export const CloseBtn = styled(MyButton)`
  position: absolute;
  top: -2px;
  right: -1px;
`;

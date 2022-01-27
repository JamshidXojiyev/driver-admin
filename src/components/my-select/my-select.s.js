import styled, { css } from "styled-components";
import BottomImg from "../../assats/images/bottom.png";

const roundBorderStyle = css`
  border: 1px solid #e4e6ee;
  border-radius: ${({ radius }) => (radius ? radius : "4px")};
  height: 43px;
`;
const recktangleBorderStyle = css`
  height: 48px;
  background: #ffffff;
  border: 1px solid #f2ecff;
  box-shadow: 0px 12px 24px rgba(0, 72, 217, 0.05);
  border-radius: 30px;
`;

export const SelectStyle = styled.select`
  && {
    padding: 0 20px;
    width: 100%;
    appearance: none;
    background: url(${BottomImg}) white no-repeat calc(100% - 16px) !important;
    ${({ roundBorder, recktangleBorder }) =>
      roundBorder
        ? roundBorderStyle
        : recktangleBorder && recktangleBorderStyle}
    ${({ table }) =>
      table &&
      css`
        height: 27px;
        min-width: 75px;
        padding: 0 0 0 16px;
      `}
    
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #9da3bb;
  }
`;
export const OptionStyle = styled.option`
  font-size: 15px;
  color: #192a3e;
`;
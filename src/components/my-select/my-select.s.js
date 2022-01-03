import styled from "styled-components";
import BottomImg from "../../assats/images/bottom.png";

export const SelectStyle = styled.select`
  && {
    border: 1px solid #e4e6ee;
    box-sizing: border-box;
    border-radius: ${({ radius }) => (radius ? radius : "4px")};
    height: 43px;
    padding: 0 20px;
    width: ${({ width }) => (width ? width : "100%")};
    appearance: none;
    background: url(${BottomImg}) white no-repeat calc(100% - 16px) !important;

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
`;

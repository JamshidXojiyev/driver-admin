import styled from "styled-components";

export const SearchInputStyle = styled.input`
  && {
    width: ${({ width }) => (width ? width : "100%")};
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    line-height: 17px;
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
    color: #101010;
  }
`;
export const DatalistStyle = styled.datalist`
  width: ${({ width }) => (width ? width : "100%")};
`;
export const OptionStyle = styled.option``;

import styled from "styled-components";
import { ReactComponent as RightIcon } from "../../assats/icons/right.svg";
export const TabsStyle = styled.div`
  && {
    display: flex;
    overflow-x: auto;
    padding-bottom: 6px;
  }
`;
export const ItemBlock = styled.div`
  && {
    cursor: pointer;
    padding: 5px 10px;
    white-space: nowrap;
    border-bottom: ${({ activ }) => (activ ? "2px solid #5459ea" : "")};

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    gap: 6px;

    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: ${({ activ }) => (activ ? "700" : "500")};
    font-size: 16px;
    line-height: 24px;
    color: ${({ activ }) => (activ ? "#5459ea" : "#101010")};

    path {
      fill: ${({ activ }) => (activ ? "#5459ea" : "#101010")};
    }
  }
`;
export const ViewIcoin = styled(RightIcon)``;

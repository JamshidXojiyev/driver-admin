import styled from "styled-components";
import { ReactComponent as RightIcon } from "../../assats/icons/right.svg";
export const TabsStyle = styled.div`
  && {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 6px;
  }
`;
export const ItemBlock = styled.div`
  && {
    min-width: 200px;
    min-height: 80px;
    background: ${({ activ, bg }) => (activ ? bg : "")};
    border-radius: 8px;
    cursor: pointer;
    padding: 0 16px;
    border: 1px solid ${({ color }) => color};
    path {
      fill: ${({ color }) => color};
    }
    path:last-child {
      opacity: 0.4;
    }
    svg:last-child path {
      opacity: 1;
      fill: #2e3a59;
      stroke: #2e3a59;
    }
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 8px;

    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({ color }) => color};
  }
`;
export const ViewIcoin = styled(RightIcon)``;

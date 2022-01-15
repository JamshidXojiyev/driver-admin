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
    height: 80px;
    background: ${({ bg }) => bg};
    border-radius: 8px;
    cursor: pointer;
    padding: 0 16px;

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

    :hover svg:last-child {
      margin-left: 4px;
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

export const LeftBtn = styled.button`
  background: linear-gradient(70deg, #ffffff 0%, rgba(255, 255, 255, 0) 66.67%);
  width: 76px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border: 0;
  cursor: pointer;
`;
export const RightBtn = styled.button`
  cursor: pointer;
  border: 0;
  background: linear-gradient(
    270deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 66.67%
  );
  width: 76px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`;
export const ViewIcoin = styled(RightIcon)``;

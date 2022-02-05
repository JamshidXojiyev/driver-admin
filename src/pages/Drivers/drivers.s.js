import styled, { css } from "styled-components";
import { ReactComponent as DriverIcon } from "../../assats/icons/driver-icon.svg";

export const DateStatus = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 13px;
  text-transform: capitalize;
  border-radius: 9px;
  padding: 2px 6px;
  ${({ red }) =>
    red
      ? css`
          background: rgba(255, 51, 63, 0.2);
          color: #ff333f;
        `
      : css`
          background: rgba(36, 193, 143, 0.1);
          color: #24c18f;
        `}
`;
export const DriverDefaultImg = styled(DriverIcon)`
  margin-right: 18px;
  width: 180px;
  height: 180px;
`;
export const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #575c76;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2px;
  :last-child {
    margin-bottom: 0;
  }
`;
export const SPAN = styled.a`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #8388a2;
  ${({ bt }) =>
    bt &&
    css`
      text-decoration: underline;
      cursor: pointer;
    `}
`;
export const H2 = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #575c76;
  margin-bottom: 12px;
`;
export const ListBlock = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 8px;
  padding-bottom: 8px;
`;
export const ListLI = styled.li`
  && {
    white-space: nowrap;
    background: ${({ color }) => `${color}80`};
    border-radius: 50px;
    padding: 4px 24px 4px 4px;
    & > div {
      background: ${({ color }) => `${color}`};
      svg {
        fill: #fff;
        transform: translateY(4px);
      }
    }
    cursor: ${({ pointer }) => pointer && "pointer"};
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: ${({ color }) => `${color}`};
  }
`;
export const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 45px;
  min-height: 45px;
  border-radius: 50px;
  margin-right: 8px;
`;

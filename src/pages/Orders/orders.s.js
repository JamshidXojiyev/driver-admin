import styled, { css } from "styled-components";
import { MapContainer } from "react-leaflet";

export const MyMapContainer = styled(MapContainer)`
  width: 100%;
  height: calc(100vh - 470px);
`;
export const Block = styled.div`
  background: ${({ bg }) => bg && "#f7f8fa"};
  border: ${({ bg }) => bg && "1px solid #eff0f4"};
  height: 48px;
  display: flex;
`;
export const SumBlock = styled.div`
  width: 150px;
  height: 22px;
  background: rgba(36, 193, 143, 0.1);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  color: #24c18f;
`;
export const MyMarker = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -24px;
  margin-left: -24px;
  width: 48px;
  height: 48px;
  z-index: 999999;
  cursor: pointer;
`;
export const Disabled = styled.div`
  ${({ disabled }) =>
    disabled &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.3;
      z-index: 9999;
      cursor: no-drop;
    `}
`;

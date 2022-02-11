import { MapContainer } from "react-leaflet";
import styled, { css } from "styled-components";

export const MapContainerStyle = styled(MapContainer)`
  && {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    ${({ typeDrow }) =>
      typeDrow === "Area" &&
      css`
        && {
          background-color: red;
          .leaflet-draw {
            background-color: black;
            display: none !important;
            z-index: 0 !important;
          }
        }
      `}
  }
`;
export const CloseDrawArea = styled.div`
  position: absolute;
  top: 114px;
  left: 10px;
  width: 34px;
  height: 110px;
  background-color: #00000080;
  border-radius: 6px;
  z-index: 9999;
`;

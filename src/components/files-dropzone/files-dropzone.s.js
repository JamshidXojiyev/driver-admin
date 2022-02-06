import styled from "styled-components";
import MyButton from "../my-button/my-button";

export const DropzoneContainer = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center; */
  padding: 2px 0;
  overflow-x: auto;
  gap: 8px;
`;
export const FilesDropzoneBlock = styled.div`
  min-height: 100px;
  width: 100%;
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
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  padding: 20px;
`;
export const OrderIMG = styled.img`
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin: 4px;
`;
export const CloseBtn = styled(MyButton)`
  position: absolute !important;
  top: 2px;
  right: 2px;
`;

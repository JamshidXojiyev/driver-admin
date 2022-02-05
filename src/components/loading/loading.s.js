import styled, { css } from "styled-components";

const onWindowStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(16, 16, 16, 0.7);
`;
const inWindowStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingBlock = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  ${({ onWindow, inWindow }) =>
    onWindow ? onWindowStyle : inWindow && inWindowStyle}
`;
export const LoadingStyle = styled.div`
  font-family: Dongle-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 17px;
  color: rgb(51, 102, 255);
  position: relative;
  width: 246px;
`;
export const SPAN = styled.span`
  padding: 0 6px;
`;

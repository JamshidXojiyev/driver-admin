import styled, { css } from "styled-components";

const centerStyled = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const lineStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
`;
const lineCenterStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const lineBottomStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: flex-end;
`;

const blockStyle = css`
  background: #ffffff;
  /* box-shadow: 0px 12px 24px rgba(0, 72, 217, 0.05); */
  box-shadow: 0px 2px 4px rgba(0, 72, 217, 0.1),
    0px 24px 60px rgba(0, 72, 217, 0.05), 0px 12px 24px rgba(0, 72, 217, 0.05);
  border-radius: 12px;
  padding: 16px 18px;
  overflow: hidden;
`;
const bothSidesStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const MyDiv = styled.div`
  ${({ center, line, lineBottom, bothSides, flex, lineCenter }) =>
    center
      ? centerStyled
      : line
      ? lineStyle
      : lineCenter
      ? lineCenterStyle
      : lineBottom
      ? lineBottomStyle
      : bothSides
      ? bothSidesStyle
      : flex &&
        css`
          display: flex;
        `}
  ${({ block }) => block && blockStyle}
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "")};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  position: ${({ relative }) => relative && "relative"};
  background-color: ${({ bg }) => bg && bg};
`;

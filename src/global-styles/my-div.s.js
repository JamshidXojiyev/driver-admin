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
const lineBottomStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: flex-end;
`;
const bothSidesStyle = css`
  display: flex;
  justify-content: center;
`;
const blockStyle = css`
  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(0, 72, 217, 0.05);
  border-radius: 12px;
  padding: 16px 18px;
`;

export const MyDiv = styled.div`
  ${({ center, line, lineBottom }) =>
    center ? centerStyled : line ? lineStyle : lineBottom && lineBottomStyle}
  ${({ bothSides }) => bothSides && bothSidesStyle}
  ${({ block }) => block && blockStyle}
  width: ${({ width }) => (width ? width : "100%")};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

import styled from "styled-components";
import { ReactComponent as ModeratorIcon } from "../../assats/icons/moderator.svg";

export const ModeratorsStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;
export const UserBlock = styled.div`
  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(0, 72, 217, 0.05);
  border-radius: 8px;
  padding: 20px 16px;
  min-width: 170px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    box-shadow: 0px 3px 8px rgba(0, 72, 217, 0.25);
  }
`;
export const UsetImg = styled(ModeratorIcon)`
  width: 110px;
  height: 110px;
`;

export const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #8388a2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 12px;
  }
`;
export const H2 = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #282b3f;
  margin-top: 4px;
  text-align: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  margin: 12px 0 12px 0;
`;

import styled from "styled-components";
import MyButton from "../../components/my-button/my-button";

export const ModeratorsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: flex-start;
`;
export const UserBlock = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 72, 217, 0.25);
  border-radius: 8px;
  padding: 20px 28px;
  position: relative;
`;
export const UsetImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 53.5px;
`;
export const UserSettings = styled(MyButton)`
  position: absolute;
  top: 10px;
  right: 0;
`;
export const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #262626;
  text-align: center;
  margin-top: 14px;
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
export const UserData = styled.h1`
  width: 100%;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #8388a2;

  margin-bottom: 10px;
  :last-child {
      margin-bottom: 0;

  }
`;

import styled from "styled-components";
import MyButton from "../../components/my-button/my-button";

export const Left = styled.div`
  background: #ffffff;
  border: 1px solid #f2ecff;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 72, 217, 0.1),
    0px 24px 60px rgba(0, 72, 217, 0.05), 0px 12px 24px rgba(0, 72, 217, 0.05);
  border-radius: 12px;
  padding: 18px 22px;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
`;
export const ItemBlock = styled.div`
  flex: 1 1 160px;
`;
export const Right = styled.div`
  position: relative;
  width: 40%;
  min-height: 200px;
  background: #ffffff;
  border: 1px solid #f2ecff;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 72, 217, 0.1),
    0px 24px 60px rgba(0, 72, 217, 0.05), 0px 12px 24px rgba(0, 72, 217, 0.05);
  border-radius: 12px;
`;
export const Header = styled.div`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: #f7f8fa;
  border: 1px solid #eff0f4;
  box-sizing: border-box;
  display: flex;
  height: 48px;
  margin-bottom: 8px;
`;
export const H1 = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #505470;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PriceItem = styled.h1`
  width: 100px;
  height: 18px;
  background: #3366ff;
  border-radius: 9px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 13px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ClassBlock = styled.div`
  display: flex;
  height: 32px;
  margin: 0 8px;
  border-radius: 6px;
  :hover {
    background-color: #f7f8fa;
  }
`;
export const FullName = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 13px;
  color: #24c18f;
  text-align: center;
  margin-bottom: 12px;
`;
export const SubmitBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 48px;
  z-index: 9999;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 0 12px;
  border-radius: 4px;
  height: 32px;

  font-family: "Inter", sans-serif;
  text-align: center;
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
  line-height: 16px;
  cursor: pointer;
  :hover {
    background-color: #f4f4f4;
  }
`;
export const Curtain = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : "60px")};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  border-radius: ${({ top }) => top && "10px"};
  background-color: #0000001a;
`;

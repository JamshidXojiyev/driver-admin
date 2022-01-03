import styled from "styled-components";

export const Sidebar = styled.div`
  width: 280px;
  height: calc(100vh - 40px);
  padding-top: 9px;
`;
export const User = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  margin-left: 4px;
`;
export const ImageBorder = styled.div`
  border: 2px solid #dfe0eb;
  border-radius: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;
export const UserImage = styled.img``;
export const UserName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
`;
export const UserPhone = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  display: flex;
  align-items: center;
  color: #ffffff;
  opacity: 0.6;
`;
export const Title = styled.h1`
  margin-top: 27px;
  margin-left: 8px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;
`;
export const MenuList = styled.ul``;
export const MenuItem = styled.li`
  width: 100%;
  height: 41px;
  background: ${({ activ }) => activ && "#fff!important"};
  border-radius: 30px 0px 0px 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 14px;
  margin-bottom: 4px;
  && path {
    stroke: ${({ activ }) => activ && "#5459ea!important"};
  }
  && h3 {
    color: ${({ activ }) => activ && "#5459ea!important"};
  }
  transition: all 0.5s ease-in-out;
  :hover {
    background-color: #fff;
    cursor: pointer;
    && path {
      stroke: #5459ea !important;
    }
    && h3 {
      color: #5459ea !important;
    }
  }
`;
export const MenuIcon = styled.div`
  width: 36px;
`;
export const MenuName = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;
export const Body = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  background: #ffffff;
  border-radius: 30px;
  padding: 24px 48px;
`;
export const NavigatorStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 22px;
  margin-bottom: 21px;
  border-bottom: 1px solid #f7f9fc;
`;
export const H1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #2e3a59;
  margin-left: 24px;
  margin-right: 2px;
`;
export const H2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #2e3a59;
  margin-left: 22px;
`;
export const SPAN = styled.span`
  color: #3366ff;
`;
export const NavBtnStyle = styled.div`
  && {
    display: contents;
    button {
      margin-right: 20px !important;
    }
  }
`;
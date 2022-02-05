import styled, { css } from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  top: 20px;
  left: 8px;
  width: ${({ menu }) => (menu ? "200px" : "57px")};
  height: calc(100vh - 40px);
  /* padding-top: ${({ menu }) => (menu ? "9px" : "")}; */
  transition: all 0.1s ease-in-out;
`;
export const User = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
`;
export const Name = styled.div`
  margin-left: 18px;
  max-height: 44px;
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
  color: #ffffff;
  opacity: 0.6;
`;
export const MenuList = styled.ul`
  margin-top: 12px;
`;
export const MenuItem = styled.li`
  height: 38px;
  ${({ activ }) =>
    activ &&
    css`
      background: #fff !important;
      position: relative;
    `};
  border-radius: 30px 0px 0px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 4px;
  && svg {
    min-width: 24px;
    width: 24px;
  }
  && path {
    fill: ${({ activ }) => activ && "#5459ea!important"};
  }
  && h3 {
    color: ${({ activ }) => activ && "#5459ea!important"};
  }
  :hover {
    cursor: pointer;
    && path {
      fill: #5459ea !important;
    }
    && h3 {
      color: #5459ea !important;
    }
  }
`;

export const MenuName = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  margin-left: 20px;
  display: ${({ menu }) => (!menu ? "none" : "inline-block")};
`;
export const Body = styled.div`
  margin: ${({ menu }) => (menu ? "0 0 0 200px" : "0 0 0 57px")};
  width: calc(100% - ${({ menu }) => (menu ? "200px" : "57px")});
  min-height: calc(100vh - 40px);
  background: #ffffff;
  border-radius: 20px;
  padding: 18px 24px;
  transition: all 0.1s ease-in-out;
`;

export const NavigatorStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 12px;
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

export const MenuItemAddon = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  height: 10px;
  display: block;
  background: #fff;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    height: 10px;
    display: block;
    background: #101010;
    z-index: 1;
  }

  &.top {
    bottom: 100%;

    &::after {
      bottom: 0;
      border-radius: 0 0 100px 0;
    }
  }
  &.bottom {
    top: 100%;

    &::after {
      top: 0;
      border-radius: 0 100px 0 0;
    }
  }
`;

import styled from "styled-components";

export const MessageStyle = styled.div`
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 320px;
  height: 500px;
  border-radius: 18px;
  z-index: 9999;
  background-color: #101010;
  animation: ${({ type }) => (type ? "open" : "close")} 0.5s ease-in-out;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    top: 64px;
    bottom: 16px;
    left: 42px;
    width: 1px;
    background-color: #fff;
  }
  @keyframes open {
    0% {
      opacity: 0;
      bottom: 0;
    }
    100% {
      opacity: 1;
      bottom: 28px;
    }
  }
  @keyframes close {
    0% {
      opacity: 1;
      bottom: 28px;
    }
    100% {
      opacity: 0;
      bottom: 0;
    }
  }
`;
export const ChatsBlock = styled.div`
  margin: 0 16px 0 0;
  padding: 16px 14px 8px;
  overflow-y: auto;
  height: 420px;
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background: #fff;
    cursor: pointer;
  }
`;
export const ChatStyle = styled.div`
  margin-left: 40px;
  background-color: #fff;
  padding: 12px 8px;
  min-height: 70px;
  width: 85%;
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0;
  }
  border-radius: 0px 30px 30px 30px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: -8px;
    left: -20px;
    width: 16px;
    height: 16px;
    background: #5459ea;
    border-radius: 50%;
  }
`;
export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #2e3a59;
`;
export const Message = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #2e3a59;
  opacity: 0.8;
  margin-left: 10px;
  margin-top: 4px;
`;
export const MessageData = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #2e3a59;
  opacity: 0.8;
  margin-left: 10px;
  margin-top: 4px;
`;

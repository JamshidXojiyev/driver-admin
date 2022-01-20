import styled from "styled-components";

export const DialogBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  @keyframes animate {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const DialogCon = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DialogClose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: rgba(16, 16, 16, 0.2);
  z-index: 99;
`;
export const DialogContainer = styled.div`
  background: rgba(16, 16, 16, 0.2);
  background: #ffffff;
  border-radius: 8px;
  min-width: 500px;
  padding: 15px 21px;
  z-index: 999;
  max-height: calc(100vh - 10%);
  overflow-y: scroll;
`;
export const DialogHeader = styled.div`
  border-bottom: 1px solid #f7f9fc;
  margin-bottom: 15px;
  padding-bottom: 8px;
`;
export const DialogTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #5b5f7b;
`;

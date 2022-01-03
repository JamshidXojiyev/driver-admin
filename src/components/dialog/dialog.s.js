import styled from "styled-components";

export const DialogBg = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(16, 16, 16, 0.2);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: animate 0.7s linear forwards;
  @keyframes animate {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const DialogContainer = styled.div`
  background: #ffffff;
  border-radius: 8px;
`;

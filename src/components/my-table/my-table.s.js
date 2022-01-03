import styled from "styled-components";

export const TableStyle = styled.table`
  width: 100%;
  border-spacing: 0;
`;
export const TrStyle = styled.tr`
  && {
    :first-child {
      height: 47px;
      background: #f7f8fa;
    }
  }
`;
export const ThStyle = styled.th`
  && {
    :first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      border-left: 1px solid #eff0f4;
    }
    :last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-right: 1px solid #eff0f4;
    }
    border-top: 1px solid #eff0f4;
    border-bottom: 1px solid #eff0f4;
    padding: 0 12px;

    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #505470;
  }
`;
export const TdStyle = styled.td`
  padding: 0 12px;
  height: 47px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  color: #192a3e;
`;
export const TableBottom = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 26px 0 16px 0;
  border-top: 1px solid #EFF0F4;
  margin-top: 18px;
`;
export const TotalUserStyle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #232638;
`;
export const H3 = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #232638;
`;

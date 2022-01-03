import React from "react";
import {
  H3,
  TableBottom,
  TableStyle,
  TdStyle,
  ThStyle,
  TotalUserStyle,
  TrStyle,
} from "./my-table.s";
import { MyDiv } from "../../global-styles/my-div.s";
function MyTable(props) {
  return (
    <>
      <TableStyle>
        <TrStyle>
          {props.data.header.map((item, index) => (
            <ThStyle key={index}>{item}</ThStyle>
          ))}
        </TrStyle>
        {props.data.body.map((item, index) => (
          <TrStyle key={index}>
            {props.data.order.map((subItem, subIndex) => (
              <TdStyle key={subIndex}>
                {typeof subItem === "string" ? item[subItem] : item(subItem)}
              </TdStyle>
            ))}
          </TrStyle>
        ))}
      </TableStyle>
      <TableBottom>
        <TotalUserStyle>Total users: {props.total}</TotalUserStyle>
        <MyDiv width="auto">
          <H3>1-2 of items</H3>
          {Array(props).map((item, index) => (
            <h1>{index}</h1>
          ))}
        </MyDiv>
      </TableBottom>
    </>
  );
}

export default MyTable;

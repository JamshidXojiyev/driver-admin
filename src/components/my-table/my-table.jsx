import React, { useEffect, useState } from "react";
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
import MySelect from "../my-select/my-select";
import MyButton from "../my-button/my-button";
import { ReactComponent as BottomIcon } from "../../assats/icons/bottom.svg";

function MyTable(props) {
  const [countItems, setCountItems] = useState(10);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();
  useEffect(() => {
    setPage(1);
    setPages(Math.ceil(props.total / countItems));
  }, [countItems]);
  useEffect(() => {}, [page]);
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
        <MyDiv line gap="12px" width="auto">
          <H3>Count items: </H3>
          <MySelect
            width="80px"
            table
            roundBorder
            value={countItems}
            options={["5", "10", "20", "30", "50", "100"]}
            onChange={(e) => setCountItems(e.target.value)}
          />
          <MyButton
            pagination
            left
            disabled={page == "1" ? true : false}
            text={<BottomIcon />}
            onClick={() => page !== "1" && setPage(page - 1)}
          />
          <MySelect
            width="80px"
            table
            roundBorder
            value={page}
            options={Array.from(Array(pages).keys(), (x) => x + 1)}
            onChange={(e) => setPage(e.target.value)}
          />

          <MyButton
            pagination
            right
            disabled={page == pages ? true : false}
            text={<BottomIcon />}
            onClick={() => page !== pages && setPage(parseInt(page) + 1)}
          />
        </MyDiv>
      </TableBottom>
    </>
  );
}

export default MyTable;

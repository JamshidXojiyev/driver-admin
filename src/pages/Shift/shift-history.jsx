import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../../components/my-button/my-button";
import MyTable from "../../components/my-table/my-table";
import { MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";

function ShiftHistory(props) {
  const token = localStorage.getItem("token");
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [dataBase, setDataBase] = useState([]);
  const [newData, setNewData] = useState({
    header: [
      "Id",
      "Opened at",
      "Closed at",
      "Actual value",
      "Expected value",
      "Diffence value",
    ],
    body: [],
    order: [
      "id",
      "opened_at",
      "closed_at",
      "actual_value",
      "expected_value",
      "diffence_value",
    ],
  });
  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/shift-history`,
        {
          limit: parseInt(pageLimit),
          page: parseInt(page),
        },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        setDataBase(res.data.data.data);
        setTotal(res.data.data.total);
      });
  }, [pageLimit, page]);
  useEffect(() => {
    const data = dataBase.map((item) => {
      const testData = {
        id: item.id,
        opened_at: new Date(item.opened_at).toLocaleDateString("ru"),
        closed_at: new Date(item.closed_at).toLocaleDateString("ru"),
        actual_value: item.actual_value,
        expected_value: item.expected_value,
        diffence_value: item.diffence_value,
      };
      return testData;
    });
    setNewData({ ...newData, body: data });
  }, [dataBase]);
  return (
    <>
      <MyDiv bothSides margin="0 0 18px 0">
        <MyDiv line margin="0 0 18px 0">
          <MenuName borderNone>Shift history</MenuName>
        </MyDiv>
        <Link to="/shift">
          <MyButton width="200px" blue text="Current shift" />
        </Link>
      </MyDiv>
      <MyTable
        data={newData}
        total={total}
        set_page_limit={(e) => setPageLimit(e)}
        set_page={(e) => setPage(e)}
      />
    </>
  );
}

export default ShiftHistory;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MyTable from "../../components/my-table/my-table";
import MyTabs from "../../components/my-tabs/my-tabs";
import { MyDiv } from "../../global-styles/my-div.s";
import {
  H1,
  ModeratorsStyle,
  UserBlock,
  UsetImg,
} from "../Moderators/moderators.s";
import { ReactComponent as BottomLeftIcon } from "../../assats/icons/bottom-left.svg";
import { ReactComponent as TopRightIcon } from "../../assats/icons/top-right.svg";

function DriverData(props) {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const [listId, setListId] = useState(0);
  const [dataBase, setDataBase] = useState([]);
  const [total, setTotal] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState({
    header: [],
    body: [],
    order: [],
  });

  useEffect(() => {
    listId === 1
      ? setNewData({
          header: ["Rider", "Comment", "Rate"],
          body: [],
          order: ["rider", "comment", "rate"],
        })
      : listId === 2
      ? setNewData({
          header: ["Rider", "State", "Date"],
          body: [],
          order: ["rider", "state", "rate"],
        })
      : listId === 3
      ? setNewData({
          header: ["Id", "Date", "Value", "Comment", "Type"],
          body: [],
          order: ["id", "date", "value", "comment", "type"],
        })
      : setNewData({
          header: [],
          body: [],
          order: [],
        });
  }, [listId]);
  useEffect(() => {
    listId !== 0 &&
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/driver/${
            listId === 1
              ? "rates/get"
              : listId === 2
              ? "rides/get"
              : listId === 3 && "transactions/history"
          }`,
          {
            driver_id: props.driver_id,
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
        })
        .catch((err) => {
          if (err.response.data.code == 401) {
            localStorage.removeItem("token");
            history.push("/login");
          }
        });
  }, [pageLimit, page, listId]);
  useEffect(() => {
    const data = dataBase.map((item) => {
      if (listId === 1) {
        const testData = {
          rider: item.rider_name,
          comment: item.rider_comment,
          rate: item.rate,
        };
        return testData;
      } else if (listId === 2) {
        const testData = {
          rider: item.driver_name,
          state: item.state,
          rate: new Date(item.arrived_time).toLocaleString("ru", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        return testData;
      } else if (listId === 3) {
        const testData = {
          id: item.id,
          date: new Date(item.arrived_time).toLocaleString("ru"),
          value: item.value,
          comment: item.comment,
          type:
            item.type === "from-driver" ? <TopRightIcon /> : <BottomLeftIcon />,
        };
        return testData;
      }
    });
    setNewData({ ...newData, body: data });
  }, [dataBase]);

  return (
    <>
      <MyTabs
        todoItem={(e) => setListId(e)}
        list={[
          {
            id: 0,
            value: "Driver info",
          },
          {
            id: 1,
            value: "Review",
          },
          {
            id: 2,
            value: "Rides",
          },
          {
            id: 3,
            value: "Transaction history",
          },
        ]}
      />
      <MyDiv height="12px " />
      {listId === 0 ? (
        <ModeratorsStyle>
          <UserBlock
            onClick={() => {
              console.log("hello");
            }}
          >
            <MyDiv center gap="12px">
              <UsetImg />
              <MyDiv>
                <H1>Yusufbek Ibragimov</H1>
                <H1>+998 916714544</H1>
              </MyDiv>
            </MyDiv>
          </UserBlock>
        </ModeratorsStyle>
      ) : listId === 1 ? (
        <MyTable
          data={newData}
          total={total}
          set_page_limit={(e) => setPageLimit(e)}
          set_page={(e) => setPage(e)}
        />
      ) : listId === 2 ? (
        <MyTable
          data={newData}
          total={total}
          set_page_limit={(e) => setPageLimit(e)}
          set_page={(e) => setPage(e)}
        />
      ) : listId === 3 ? (
        <MyTable
          data={newData}
          total={total}
          set_page_limit={(e) => setPageLimit(e)}
          set_page={(e) => setPage(e)}
        />
      ) : (
        listId === 4 && <h1>hello</h1>
      )}
    </>
  );
}

export default DriverData;

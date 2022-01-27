import axios from "axios";
import React, { useEffect, useState } from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import MyTable from "../my-table/my-table";
import MyTabs from "../my-tabs/my-tabs";
import RideTableData from "./table-filter";
import MyMessage from "../../components/message/message";

function RidesGet(props) {
  const token = localStorage.getItem("token");

  const [tabs, setTabs] = useState([]);
  const [tab, setTab] = useState(0);
  const [dataBase, setDataBase] = useState([]);
  const [newData, setNewData] = useState({
    header: [],
    body: [],
    order: [],
  });
  const [total, setTotal] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [messageType, setMessageType] = useState(false);
  const [messageId, setMessageId] = useState();
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/rides/get`,
        props.rider_id
          ? {
              limit: parseInt(pageLimit),
              page: parseInt(page),
              state: tab,
              rider_id: props.rider_id,
            }
          : { limit: parseInt(pageLimit), page: parseInt(page), state: tab },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        setDataBase(res.data.data.data);
        setTotal(res.data.data.total);
        const data = res.data.data;
        setTabs([
          {
            id: 0,
            value: `Pending (${data.pending})`,
          },
          {
            id: 1,
            value: `In progress (${data.in_progress})`,
          },
          {
            id: 2,
            value: `Completed (${data.completed})`,
          },
          {
            id: 3,
            value: `Upcoming (${data.upcoming})`,
          },
          {
            id: 4,
            value: `Pre cancelled (${data.pre_cancelled})`,
          },
          {
            id: 5,
            value: `Cancelled by driver (${data.cancelled_by_driver})`,
          },
          {
            id: 6,
            value: `Cancelled by client (${data.cancelled_by_client})`,
          },
        ]);
      });
  }, [tab, page, pageLimit]);
  useEffect(() => {
    const data = RideTableData(tab, dataBase);
    setNewData(data);
  }, [dataBase]);
  useEffect(() => {
    if (messageId !== undefined) {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/ride/status/get/${messageId}`, {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        })
        .then((res) => setMessageData(res.data.data));
    }
  }, [messageId]);

  return (
    <>
      <MyTabs todoItem={(e) => setTab(e)} list={tabs} />
      <MyDiv height="16px" />
      <MyTable
        itemValue={(e) => {
          setMessageType(true);
          setMessageId(e.id);
        }}
        data={newData}
        total={total}
        set_page_limit={(e) => setPageLimit(e)}
        set_page={(e) => setPage(e)}
      />
      {messageType && (
        <MyMessage data={messageData} close={(e) => setMessageType(e)} />
      )}
    </>
  );
}

export default RidesGet;

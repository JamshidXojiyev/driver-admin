import React, { useEffect, useMemo, useState } from "react";
import { MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import axios from "axios";
import MyInput from "../../components/my-input/my-input";
import { useHistory } from "react-router";
import MyTable from "../../components/my-table/my-table";
import moment from "moment";
import { DateStatus } from "./drivers.s";
import MySelect from "../../components/my-select/my-select";
import DriverInfo from "./driver-info";
import MyButton from "../../components/my-button/my-button";
import { ReactComponent as LiveOnIcon } from "../../assats/icons/on-live.svg";
import { ReactComponent as LiveOffIcon } from "../../assats/icons/off-live.svg";
import { useRealtimeData } from "../../useRealTime";
function Drivers(props) {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const [dataBase, setDataBase] = useState([]);
  const [total, setTotal] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState({
    header: [
      "First Name",
      "Last Name",
      "Phone Number",
      "Birthdate",
      "state",
      "Status",
    ],
    body: [],
    order: [
      "first_name",
      "last_name",
      "phone_number",
      "birthdate",
      "state",
      "status",
    ],
  });
  const [search, setSearch] = useState("");
  const [network_status, set_network_status] = useState(null);
  const [driver_id, set_driver_id] = useState();
  const [liveType, setLiveType] = useState(false);

  const { data, startLive, stopLive } = useRealtimeData(
    `${process.env.REACT_APP_BASE_URL}/drivers/get`,
    5000,
    pageLimit,
    page,
    search,
    network_status
  );
  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/drivers/get`,
        {
          limit: parseInt(pageLimit),
          page: parseInt(page),
          search: search,
          network_status: network_status === "all" ? null : network_status,
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
  }, [pageLimit, page, search, network_status]);
  useEffect(() => {
    const data = dataBase.map((item) => {
      const testData = {
        first_name: item.first_name,
        last_name: item.last_name,
        phone_number: item.phone_number,
        birthdate: new Date(item.birthdate).toLocaleDateString("ru"),
        state: item.state,
        status: (
          <DateStatus red={!item.network_status_online}>
            {moment(item.disconnected_time).fromNow()}
          </DateStatus>
        ),
        id: item._id,
      };
      return testData;
    });
    setNewData({ ...newData, body: data });
  }, [dataBase]);

  useEffect(() => {
    if (data && data.data && data.data.data) {
      setDataBase(data.data.data.data);
      setTotal(data.data.data.total);
    }
  }, [data]);

  if (driver_id !== undefined) {
    return <DriverInfo close={(e) => set_driver_id(e)} driver_id={driver_id} />;
  }

  return (
    <>
      <MyDiv bothSides margin="0 0 18px 0">
        <MyDiv line>
          <MenuName borderNone>Drivers list</MenuName>
          <MyInput
            search
            width="220px"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </MyDiv>
        <MyDiv lineRight gap="8px">
          <MyButton
            icon
            text={liveType ? <LiveOffIcon /> : <LiveOnIcon />}
            onClick={() => {
              setLiveType(!liveType);
              liveType ? stopLive() : startLive();
            }}
          />
          <MySelect
            recktangleBorder
            width="180px"
            value={network_status}
            options={["all", "online", "offline"]}
            onChange={(e) => set_network_status(e.target.value)}
          />
        </MyDiv>
      </MyDiv>
      <MyTable
        itemValue={(e) => {
          set_driver_id(e.id);
        }}
        data={newData}
        total={total}
        set_page_limit={(e) => setPageLimit(e)}
        set_page={(e) => setPage(e)}
      />
    </>
  );
}

export default Drivers;

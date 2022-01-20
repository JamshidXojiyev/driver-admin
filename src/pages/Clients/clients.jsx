import React, { useEffect, useState } from "react";
import MyDialog from "../../components/dialog/dialog";
import MyButton from "../../components/my-button/my-button";
import { MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import { ReactComponent as EditSVG } from "../../assats/icons/edit.svg";
import { ReactComponent as DeleteSVG } from "../../assats/icons/delete.svg";
import { ReactComponent as MessageIcon } from "../../assats/icons/message.svg";
import axios from "axios";
import { useAlert } from "react-alert";
import CreateClient from "./create-client";
import ClientsMessage from "./clients-message";
import MyInput from "../../components/my-input/my-input";
import { useHistory } from "react-router";
import MyTable from "../../components/my-table/my-table";

function Clients(props) {
  const alert = useAlert();
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [dataBase, setDataBase] = useState([]);
  const [total, setTotal] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState({
    header: [
      "",
      "First Name",
      "Last Name",
      "Phone Number",
      "Total Finished",
      "Total Rides",
      "",
    ],
    body: [],
    order: [
      "view",
      "first_name",
      "last_name",
      "phone_number",
      "total_finished",
      "total_rides",
      "btn",
    ],
  });
  const [dialog, setDialog] = useState(false);
  const [dialogData, setDialogData] = useState();
  const [renderTable, setRenderTable] = useState(1);
  const [search, setSearch] = useState("");
  const [phone, setPhone] = useState("");

  // car class delete
  const Clients_Delete = (e) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/user/delete`, e, {
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
        },
      })
      .then((res) => {
        alert.success("Car class deleted.");
        setRenderTable(renderTable + 1);
      })
      .catch((err) => alert("Car class not deleted."));
  };

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/riders/get`,
        { limit: parseInt(pageLimit), page: parseInt(page), search: search },
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
  }, [pageLimit, page, dialog, renderTable, search]);

  useEffect(() => {
    const data = dataBase.map((item) => {
      const testData = {
        view: (
          <MyDiv lineCenter>
            <MyButton
              onClick={() => {
                setPhone(item.phone_number);
                setDialog(true);
              }}
              icon
              text={<MessageIcon />}
            />
          </MyDiv>
        ),
        first_name: item.first_name,
        last_name: item.last_name,
        phone_number: item.phone_number,
        total_finished: item.total_finished,
        total_rides: item.total_rides,
        btn: (
          <MyDiv lineCenter>
            <MyButton
              onClick={() => {
                setDialog(true);
                setDialogData(item);
              }}
              icon
              text={<EditSVG />}
            />
            <MyButton
              onClick={() => {
                Clients_Delete(item);
              }}
              icon
              text={<DeleteSVG />}
            />
          </MyDiv>
        ),
      };
      return testData;
    });
    setNewData({ ...newData, body: data });
  }, [dataBase]);

  return (
    <>
      <MyDiv line margin="0 0 18px 0">
        <MenuName borderNone>Car Classes list</MenuName>
        <MyInput
          search
          width="220px"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </MyDiv>
      <MyTable
        data={newData}
        total={total}
        set_page_limit={(e) => setPageLimit(e)}
        set_page={(e) => setPage(e)}
      />
      {dialog && (
        <MyDialog
          title={phone ? "Sending Message" : "Edit rider"}
          body={
            phone ? (
              <ClientsMessage
                phone={phone}
                close={(e) => {
                  setDialog(e);
                }}
              />
            ) : (
              <CreateClient
                dialog_data={dialogData}
                close={(e) => {
                  setDialog(e);
                }}
              />
            )
          }
          close={(e) => {
            setDialog(e);
            setPhone("");
          }}
        />
      )}
    </>
  );
}

export default Clients;

import React, { useEffect, useState } from "react";
import MyDialog from "../../components/dialog/dialog";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import MyTable from "../../components/my-table/my-table";
import { ActivUser, MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import { UserImage, UserName, UserPhone } from "../../global-styles/user.s";
import { ReactComponent as EditSVG } from "../../assats/icons/edit.svg";
import { ReactComponent as DeleteSVG } from "../../assats/icons/delete.svg";
import { ReactComponent as ViewIcon } from "../../assats/icons/view.svg";

function CarClasses(props) {
  const dataBase = [
    {
      user_name: "Allen Stephens",
      phone: "(721)-723-1807",
      img: "https://randomuser.me/api/portraits/men/40.jpg",
      starting_value: "3000",
      free_km: "0",
      per_km_value: "1200",
      waiting_time: "3",
      waiting_time: "3",
    },
    {
      user_name: "Heather Burns",
      phone: "(796)-155-7755",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      starting_value: "3000",
      free_km: "0",
      per_km_value: "1200",
      waiting_time: "3",
      waiting_time: "3",
    },
  ];
  const [newData, setNewData] = useState({
    header: [
      "",
      "User",
      "Starting value",
      "Free km",
      "Per km value",
      "Waiting time",
      "Waiting time",
      "",
    ],
    body: [],
    order: [
      "view",
      "user",
      "starting_value",
      "free_km",
      "per_km_value",
      "waiting_time",
      "waiting_time",
      "btn",
    ],
  });
  const [dialog, setDialog] = useState(false);
  const [dialogData, setDialogData] = useState([]);
  useEffect(() => {
    const data = dataBase.map((item) => {
      const testData = {
        view: (
          <MyDiv center>
            <MyButton icon text={<ViewIcon />} />
          </MyDiv>
        ),
        user: (
          <MyDiv center>
            <MyDiv line width="150px" margin="8px 0 8px 0">
              <UserImage src={item.img} />
              <MyDiv>
                <UserName>{item.user_name}</UserName>
                <UserPhone>{item.phone}</UserPhone>
              </MyDiv>
            </MyDiv>
          </MyDiv>
        ),
        starting_value: item.starting_value,
        free_km: item.free_km,
        per_km_value: item.per_km_value,
        waiting_time: item.waiting_time,
        waiting_time: item.waiting_time,
        btn: (
          <MyDiv line>
            <MyButton
              onClick={() => {
                setDialog(true);
                setDialogData(item);
              }}
              icon
              text={<EditSVG />}
            />
            <MyButton icon text={<DeleteSVG />} />
          </MyDiv>
        ),
      };
      return testData;
    });
    setNewData({ ...newData, body: data });
  }, []);
  return (
    <>
      <MyDiv line margin="0 0 18px 0">
        <MenuName>Car Classes list</MenuName>
        <ActivUser>Active drivers: 10</ActivUser>
        <MyDiv width="230px">
          <MyInput search placeholder="Search" />
        </MyDiv>
      </MyDiv>
      <MyTable data={newData} total="2" pageLimit="10" />
      {dialog && (
        <MyDialog
          title="Clients Information"
          body={<h1>asdasda </h1>}
          close={(e) => setDialog(e)}
        />
      )}
    </>
  );
}

export default CarClasses;

import React, { useState, useEffect } from "react";
import MyTable from "../../components/my-table/my-table";
import { ActivUser, MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import MyInput from "../../components/my-input/my-input";
import { UserImage } from "../../global-styles/user.s";
import { UserName, UserPhone } from "../../global-styles/user.s";
import { ReactComponent as EditSVG } from "../../assats/icons/edit.svg";
import { ReactComponent as DeleteSVG } from "../../assats/icons/delete.svg";
import MyButton from "../../components/my-button/my-button";
import MyDialog from "../../components/dialog/dialog";
import ClientDialog from "./dialog";

function Clients(props) {
  const dataBase = [
    {
      user_name: "Rachel Carlson",
      phone: "(721)-723-1807",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      total_rides: "132",
      total_finished: "6",
      home_location: "пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston",
      work_location: "13 Kumarik ko'chasi, Tashkent 100167, Oʻzbekiston",
    },
    {
      user_name: "Allen Stephens",
      phone: "(721)-723-1807",
      img: "https://randomuser.me/api/portraits/men/40.jpg",
      total_rides: "132",
      total_finished: "6",
      home_location: "пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston",
      work_location: "13 Kumarik ko'chasi, Tashkent 100167, Oʻzbekiston",
    },
  ];
  const [newData, setNewData] = useState({
    header: [
      "User",
      "Total Rides",
      "Total Finished",
      "Home Location",
      "Work Location",
      "",
    ],
    body: [],
    order: [
      "user",
      "total_rides",
      "total_finished",
      "home_location",
      "work_location",
      "btn",
    ],
  });
  const [dialog, setDialog] = useState(false);
  const [dialogData, setDialogData] = useState([]);
  useEffect(() => {
    const data = dataBase.map((item) => {
      const testData = {
        user: (
          <MyDiv line width="150px" margin="8px 0 8px 0">
            <UserImage src={item.img} />
            <MyDiv>
              <UserName>{item.user_name}</UserName>
              <UserPhone>{item.phone}</UserPhone>
            </MyDiv>
          </MyDiv>
        ),
        total_rides: item.total_rides,
        total_finished: item.total_finished,
        home_location: item.home_location,
        work_location: item.work_location,
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
        <MenuName>Clients list</MenuName>
        <ActivUser>Active drivers: 10</ActivUser>
        <MyDiv width="230px">
          <MyInput search placeholder="Search" />
        </MyDiv>
      </MyDiv>
      <MyTable data={newData} total="100" pageLimit="10" />
      {dialog && (
        <MyDialog
          title="Clients Information"
          body={<ClientDialog dialogData={dialogData} />}
          close={(e) => setDialog(e)}
        />
      )}
    </>
  );
}

export default Clients;

import React, { useEffect, useState } from "react";
import MyDialog from "../../components/dialog/dialog";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import MyTable from "../../components/my-table/my-table";
import { ActivUser, MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import { UserImage, UserName } from "../../global-styles/user.s";
import { ReactComponent as EditSVG } from "../../assats/icons/edit.svg";
import { ReactComponent as DeleteSVG } from "../../assats/icons/delete.svg";
import { ReactComponent as ViewIcon } from "../../assats/icons/view.svg";
import axios from "axios";

function CarClasses(props) {
  const [dataBase, setDataBase] = useState([]);
  const [newData, setNewData] = useState({
    header: [
      "Image",
      "Name",
      "Starting value",
      "Free km",
      "Per km value",
      "Per minut value",
      "Waiting time",
      "Out of branch",
      "",
    ],
    body: [],
    order: [
      "image",
      "name",
      "starting_value",
      "free_km",
      "per_km_value",
      "per_minut_value",
      "waiting_time",
      "out_of_branch",
      "btn",
    ],
  });
  const [dialog, setDialog] = useState(false);
  const [dialogData, setDialogData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://135.181.101.63:8080/car-class/get",
        { limit: 20, page: 1 },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        setDataBase(res.data.data.data);
        console.log(res.data.data.data);
      });
  }, []);

  useEffect(() => {
    const data = dataBase.map((item) => {
      const testData = {
        view: (
          <MyDiv center>
            <MyButton icon text={<ViewIcon />} />
          </MyDiv>
        ),
        image: <UserImage src={`http://135.181.101.63:8080${item.image}`} />,
        name: item.name,
        starting_value: item.starting_value,
        free_km: item.free_km,
        per_km_value: item.per_km_value,
        per_minut_value: item.per_minut_value,
        waiting_time: item.waiting_time,
        out_of_branch: item.out_of_branch,
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
  }, [dataBase]);

  return (
    <>
      <MyDiv bothSides margin="0 0 18px 0">
        <MyDiv line>
          <MenuName>Car Classes list</MenuName>
          <ActivUser>Active drivers: 10</ActivUser>
          <MyDiv width="230px">
            <MyInput search placeholder="Search" />
          </MyDiv>
        </MyDiv>
        <MyButton width="200px" blue text={"+ Create Car-Classes"} />
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

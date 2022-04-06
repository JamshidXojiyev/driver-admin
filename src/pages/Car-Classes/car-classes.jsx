import React, { useEffect, useState } from "react";
import MyDialog from "../../components/dialog/dialog";
import MyButton from "../../components/my-button/my-button";
import MyTable from "../../components/my-table/my-table";
import { MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import { UserImage } from "../../global-styles/user.s";
import { ReactComponent as EditSVG } from "../../assats/icons/edit.svg";
import { ReactComponent as DeleteSVG } from "../../assats/icons/delete.svg";
import { ReactComponent as ViewIcon } from "../../assats/icons/view.svg";
import axios from "axios";
import CreateCarClass from "./create-car-class";
import { useAlert } from "react-alert";
import { useHistory } from "react-router";
import Loading from "../../components/loading/loading";

function CarClasses(props) {
  const alert = useAlert();
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);

  const [dataBase, setDataBase] = useState([]);
  const [total, setTotal] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
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
  const [dialogData, setDialogData] = useState();
  const [userId, setUserId] = useState();
  const [renderTable, setRenderTable] = useState(1);

  // car class delete
  const Car_Class_Delete = (e) => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/car-class/delete`,
        { indexes: e },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        alert.success("Car class deleted.");
        setRenderTable(renderTable + 1);
      })
      .catch((err) => alert("Car class not deleted."));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/car-class/get`,
        { limit: parseInt(pageLimit), page: parseInt(page) },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setDataBase(res.data.data.data);
        setTotal(res.data.data.total);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.data.code == 401) {
          localStorage.removeItem("token");
          history.push("/login");
        }
      });
  }, [pageLimit, page, dialog, renderTable]);

  useEffect(() => {
    const data = dataBase.map((item) => {
      const testData = {
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
                setUserId(item._id);
              }}
              icon
              text={<EditSVG />}
            />
            <MyButton
              onClick={() => {
                Car_Class_Delete(item._id);
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
      <Loading loading={loading} onWindow />
      <MyDiv bothSides margin="0 0 18px 0">
        <MenuName borderNone>Car Classes list</MenuName>
        <MyButton
          width="200px"
          blue
          text={"+ Create Car-Classes"}
          onClick={() => {
            setDialog(true);
            setDialogData();
          }}
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
          title="Clients Information"
          body={
            <CreateCarClass
              user_id={userId}
              dialog_data={dialogData}
              close={(e) => {
                setDialog(e);
              }}
            />
          }
          close={(e) => {
            setDialog(e);
          }}
        />
      )}
    </>
  );
}

export default CarClasses;

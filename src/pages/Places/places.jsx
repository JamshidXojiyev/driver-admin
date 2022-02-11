import React, { useEffect, useState } from "react";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import { MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import { ReactComponent as EditSVG } from "../../assats/icons/edit.svg";
import { ReactComponent as DeleteSVG } from "../../assats/icons/delete.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import MyTable from "../../components/my-table/my-table";
import Loading from "../../components/loading/loading";
import PlacesDialog from "./places-dialog";
import { useAlert } from "react-alert";

function Places(props) {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const alert = useAlert();

  const [dataBase, setDataBase] = useState([]);
  const [total, setTotal] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState({
    header: ["Location name", "Type", ""],
    body: [],
    order: ["location_name", "type", "btn"],
  });
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [dialog, setDialog] = useState({ value: null, type: false });
  const [renderTable, setRenderTable] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/places/search-pagin`,
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
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.data.code == 401) {
          localStorage.removeItem("token");
          history.push("/login");
        }
        setLoading(false);
      });
  }, [pageLimit, page, search, renderTable]);

  useEffect(() => {
    const data = dataBase.map((item) => {
      const testData = {
        location_name: item.location_name,
        type: item.type,
        btn: (
          <MyDiv lineRight gap="8px">
            <MyButton
              onClick={() => {
                setDialog({ ...dialog, value: item, type: true });
              }}
              icon
              text={<EditSVG />}
            />
            <MyButton
              onClick={() => {
                Places_Delete(item._id);
              }}
              icon
              text={<DeleteSVG />}
            />
          </MyDiv>
        ),
        id: item._id,
      };
      return testData;
    });
    setNewData({ ...newData, body: data });
  }, [dataBase]);

  // places delete
  const Places_Delete = (e) => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/place/delete`,
        { _id: e },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        alert.success("Places deleted.");
        setRenderTable(renderTable + 1);
      })
      .catch((err) => alert(err.message));
  };

  if (dialog.type) {
    return (
      <PlacesDialog
        value={dialog.value}
        close={(e) => {
          setDialog({ ...dialog, type: e });
          setRenderTable(renderTable + 1);
        }}
      />
    );
  }
  return (
    <>
      <Loading loading={loading} onWindow />
      <MyDiv bothSides margin="0 0 18px 0">
        <MyDiv line>
          <MenuName borderNone>Places list</MenuName>
          <MyInput
            search
            width="220px"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </MyDiv>

        <MyButton
          width="160px"
          blue
          text={"+ Create place"}
          onClick={() => {
            setDialog({ ...dialog, value: null, type: true });
          }}
        />
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

export default Places;

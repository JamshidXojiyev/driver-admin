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
import BranchesDialog from "./branches-dialog";
import { useAlert } from "react-alert";

function Branches(props) {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const alert = useAlert();

  const [dataBase, setDataBase] = useState([]);
  const [total, setTotal] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState({
    header: ["Name", ""],
    body: [],
    order: ["name", "btn"],
  });
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [dialog, setDialog] = useState({ id: null, type: false });
  const [renderTable, setRenderTable] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/branches/get-pagin`,
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
        name: item.name,
        btn: (
          <MyDiv lineRight gap="8px">
            <MyButton
              onClick={() => {
                setDialog({ ...dialog, id: item._id, type: true });
              }}
              icon
              text={<EditSVG />}
            />
            <MyButton
              onClick={() => {
                Branche_Delete(item._id);
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

  // branche delete
  const Branche_Delete = (e) => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/branch/delete`,
        { _id: e },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        alert.success("Branche deleted.");
        setRenderTable(renderTable + 1);
      })
      .catch((err) => alert(err.message));
  };

  if (dialog.type) {
    return (
      <BranchesDialog
        id={dialog.id}
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
          <MenuName borderNone>Branches list</MenuName>
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
            setDialog({ ...dialog, id: null, type: true });
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

export default Branches;

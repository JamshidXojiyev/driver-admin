import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import MyButton from "../../components/my-button/my-button";
import MyTable from "../../components/my-table/my-table";
import { MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import CreateNews from "./create-news";
import { ReactComponent as EditSVG } from "../../assats/icons/edit.svg";
import { ReactComponent as DeleteSVG } from "../../assats/icons/delete.svg";

function News(props) {
  const alert = useAlert();
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [newsType, setNewsType] = useState(false);
  const [newsItem, setNewsItem] = useState();

  const [dataBase, setDataBase] = useState([]);
  const [total, setTotal] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState({
    header: ["Title", "Date", "Description", ""],
    body: [],
    order: ["title", "date", "description", "btn"],
  });
  const [renderTable, setRenderTable] = useState(1);

  useEffect(() => {
    setLoading(true);
    const query = new URLSearchParams({
      limit: pageLimit,
      page: page,
    }).toString();
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/news?${query}`, {
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
        },
      })
      .then((res) => {
        setDataBase(res.data.data.news);
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
  }, [pageLimit, page, renderTable]);

  useEffect(() => {
    const data = dataBase.map((item) => {
      const testData = {
        title: item.title,
        date: new Date(item.date).toLocaleDateString(),
        description: item.description,
        btn: (
          <MyDiv line>
            <MyButton
              onClick={() => {
                setNewsItem(item);
                setNewsType(true);
                setRenderTable(renderTable + 1);
              }}
              icon
              text={<EditSVG />}
            />
            <MyButton
              onDoubleClick={() => {
                deleteNews(item.id);
              }}
              onClick={() => {
                alert.info(
                  "Are you sure to delete ? If you want to delete, double-click."
                );
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

  const deleteNews = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/news/${id}`, {
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
        },
      })
      .then((res) => {
        setRenderTable(renderTable + 1);
      })
      .catch((err) => alert.error(err.message));
  };

  if (newsType) {
    return (
      <CreateNews
        newsItem={newsItem ? newsItem : ""}
        close={(e) => {
          setNewsType(e);
          setRenderTable(renderTable + 1);
          setNewsItem();
        }}
      />
    );
  }
  return (
    <>
      <MyDiv bothSides margin="0 0 18px 0">
        <MenuName borderNone>News report</MenuName>
        <MyButton
          width="200px"
          blue
          text={"+ Create News"}
          onClick={() => {
            setNewsType(true);
          }}
        />
      </MyDiv>
      <MyTable
        // itemValue={(e) => {
        // set_rider_id(e.id);
        // }}
        data={newData}
        total={total}
        set_page_limit={(e) => setPageLimit(e)}
        set_page={(e) => setPage(e)}
      />
    </>
  );
}

export default News;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Link, useHistory } from "react-router-dom";
import MyDialog from "../../components/dialog/dialog";
import MyButton from "../../components/my-button/my-button";
import { MenuName, MenuSpan } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import ShiftClose from "./shift-close";
import { H1, H2 } from "./shift.s";
import Loading from "../../components/loading/loading";

function Shift(props) {
  const token = localStorage.getItem("token");
  const alert = useAlert();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const [dialog, setDialog] = useState(false);
  const [open_shift, set_open_shift] = useState(false);
  const [shift_last, set_shift_last] = useState([]);
  const [shift_report, set_shift_report] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/shift-last`, {
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
        },
      })
      .then((res) => {
        set_shift_last(res.data.data);
        set_open_shift(false);
        axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/shift-report`,
            { shift_id: res.data.data._id },
            {
              headers: {
                Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
              },
            }
          )
          .then((res) => {
            set_shift_report(res.data.data);
            setLoading(false);
          })
          .catch((err) => {
            if (err.response.data.code == 401) {
              localStorage.removeItem("token");
              history.push("/login");
            }
            setLoading(false);
          });
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.data.code == 401) {
          localStorage.removeItem("token");
          history.push("/login");
        }
        if (err.response.data.code == 60002) {
          set_open_shift(true);
        }
      });
  }, []);
  const openShift = () => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/shift-open`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        set_open_shift(false);
        alert.success("New shift opened.");
      });
  };

  return (
    <>
      <Loading loading={loading} onWindow />
      <MyDiv bothSides>
        <MyDiv line margin="0 0 18px 0">
          <MenuName>Shift opened</MenuName>
          <MenuSpan>
            {new Date(shift_last.opened_at).toLocaleDateString("ru")}
          </MenuSpan>
        </MyDiv>
        <MyDiv lineRight gap="16px">
          {open_shift && (
            <>
              <MyButton
                onClick={() => openShift()}
                width="200px"
                blue
                text="Open shift"
              />
              <Link to="/shift/history">
                <MyButton width="200px" blue text="Shift history" />
              </Link>
            </>
          )}
        </MyDiv>
      </MyDiv>
      {!open_shift && (
        <>
          <MyDiv line gap="20px">
            <MyDiv>
              <Link to="/shift/pays">
                <MyButton blue text="Management" />
              </Link>
            </MyDiv>
            <MyButton
              onClick={() => {
                setDialog(true);
              }}
              red
              text="Shift close"
            />
            <MyDiv>
              <Link to="/shift/history">
                <MyButton blue text="Shift history" />
              </Link>
            </MyDiv>
          </MyDiv>
          <H1>General</H1>
          <MyDiv height="32px" bothSides>
            <H2>Expected cash amount</H2>
            <H2>{shift_report.expected_cash_amount}</H2>
          </MyDiv>
          <MyDiv height="32px" bothSides>
            <H2>Income</H2>
            <H2>{shift_report.income}</H2>
          </MyDiv>
          <MyDiv height="32px" bothSides>
            <H2>Outcome</H2>
            <H2>{shift_report.net_income}</H2>
          </MyDiv>
          <MyDiv height="32px" bothSides>
            <H2>Net income</H2>
            <H2>{shift_report.outcome}</H2>
          </MyDiv>
          {dialog && (
            <MyDialog
              title="Shift close"
              body={
                <ShiftClose
                  expected_cash_amount={shift_report.expected_cash_amount}
                  shift_id={shift_last._id}
                  close={(e) => {
                    setDialog(e);
                    set_open_shift(true);
                  }}
                />
              }
              close={(e) => {
                setDialog(e);
              }}
            />
          )}
        </>
      )}
    </>
  );
}

export default Shift;

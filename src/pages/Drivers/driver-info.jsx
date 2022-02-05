import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import MyDialog from "../../components/dialog/dialog";
import MyButton from "../../components/my-button/my-button";
import { MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import Balance from "./balance";
import {
  DriverDefaultImg,
  H1,
  H2,
  ItemIcon,
  ListBlock,
  ListLI,
  SPAN,
} from "./drivers.s";
import { UserImage } from "../../global-styles/user.s";
import EditDriver from "./edit-driver";
import DriverData from "./driver-data";
import { ReactComponent as BottomLeftIcon } from "../../assats/driver-list-icons/bottom-left.svg";
import { ReactComponent as CancelIcon } from "../../assats/driver-list-icons/cancel.svg";
import { ReactComponent as SkipIcon } from "../../assats/driver-list-icons/skip.svg";
import { ReactComponent as RateIcon } from "../../assats/driver-list-icons/rate.svg";
import { ReactComponent as CashIcon } from "../../assats/driver-list-icons/cash.svg";
import { ReactComponent as CardIcon } from "../../assats/driver-list-icons/card.svg";
import Card from "./card";
import Rate from "./rate";

function DriverInfo(props) {
  const token = localStorage.getItem("token");
  const alert = useAlert();
  const [dialog, setDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const [driverData, setDriverData] = useState([]);
  const [driverBalance, setDriverBalance] = useState(0);
  const [render, setRender] = useState(0);

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/driver/get-by-id`,
        { driver_id: props.driver_id },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        setDriverData(res.data.data);
      });
  }, [props.driver_id, render, dialog]);
  const driver = (state, air_conditioner) => {
    console.log("air_conditioner: ", air_conditioner);
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/driver-state-set`,
        {
          driver_id: props.driver_id,
          air_conditioner:
            air_conditioner !== null
              ? air_conditioner
              : driverData.air_conditioner,
          state: state ? state : driverData.state,
        },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then(() => {
        alert.success("Success");
        setRender(render + 1);
      })
      .catch((err) => {
        alert.error(err.message);
        setRender(render + 1);
      });
  };

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/driver/balance/get`,
        { driver_id: props.driver_id },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        setDriverBalance(res.data.data.balance);
      });
  }, [dialog]);

  return (
    <>
      <MyDiv bothSides margin="0 0 18px 0">
        <MenuName borderNone onClick={() => props.close(undefined)}>
          <span>&#8249;</span> Drivers list
        </MenuName>
        <MyButton
          width="160px"
          blue
          text={"+ Edit driver"}
          onClick={() => {
            setDialog(true);
            setDialogType("edit");
          }}
        />
      </MyDiv>
      <MyDiv block margin="0 0 18px 0">
        <MyDiv flex margin="0 0 18px 0">
          <MyDiv
            padding="0 16px 0 0"
            width="auto"
            border_right="1px solid #DAE3FF"
            flex
            lineCenter
          >
            {driverData.image ? (
              <UserImage
                width="180px"
                height="180px"
                src={`http://135.181.101.63:8080${driverData.image}`}
              />
            ) : (
              <DriverDefaultImg />
            )}
            <MyDiv width="260px">
              <H1>
                Name:{" "}
                <SPAN>{`${driverData.first_name} ${driverData.last_name}`}</SPAN>
              </H1>
              <H1>
                Birth Date:{" "}
                <SPAN>
                  {new Date(driverData.birthdate).toLocaleDateString("ru")}
                </SPAN>
              </H1>
              <H1>
                Balance:
                <SPAN
                  bt
                  onClick={() => {
                    setDialog(true);
                    setDialogType("balance");
                  }}
                >
                  {parseFloat(driverBalance).toLocaleString("en-EN")}
                </SPAN>
              </H1>
              <H1
                onDoubleClick={() => {
                  driver(
                    driverData.state === "blocked" ? "active" : "blocked",
                    null
                  );
                }}
              >
                State:<SPAN bt> {driverData.state}</SPAN>
              </H1>
              <H1
                onDoubleClick={() => {
                  driver(null, !driverData.air_conditioner);
                }}
              >
                Conditioner:
                <SPAN bt>
                  {driverData.air_conditioner
                    ? "air conditioner"
                    : "no conditioner"}
                </SPAN>
              </H1>
              <H1>
                Car model:
                <SPAN>{driverData.car_model}</SPAN>
              </H1>
              <H1>
                Car color:
                <SPAN>{driverData.car_color}</SPAN>
              </H1>
              <H1>
                Car number:
                <SPAN>{driverData.car_number}</SPAN>
              </H1>
            </MyDiv>
          </MyDiv>
          <MyDiv padding="0 0 0 16px" height="100%" width="100%">
            <H2>Comment:</H2>
            <SPAN>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
              eius deleniti magni ratione minus nemo, illo amet a obcaecati eos
              consequatur ad quae minima nihil iste, reiciendis sint expedita
              distinctio!
            </SPAN>
          </MyDiv>
        </MyDiv>
        <ListBlock>
          <ListLI color="#3366FF">
            <ItemIcon>
              <BottomLeftIcon />
            </ItemIcon>
            Order accept {driverData.order_accept}
          </ListLI>
          <ListLI color="#FF333F">
            <ItemIcon>
              <CancelIcon />
            </ItemIcon>
            Order cancel {driverData.order_cancel}
          </ListLI>
          <ListLI color="#FF9533">
            <ItemIcon>
              <SkipIcon />
            </ItemIcon>
            Order cancel {driverData.order_skip}
          </ListLI>
          <ListLI
            onClick={() => {
              setDialog(true);
              setDialogType("rate");
            }}
            pointer
            color="#39DE54"
          >
            <ItemIcon>
              <RateIcon />
            </ItemIcon>
            Rate {driverData.star}
          </ListLI>
          <ListLI color="#EF33FF">
            <ItemIcon>
              <CashIcon />
            </ItemIcon>
            Cash {driverData.cash}
          </ListLI>
          <ListLI
            onClick={() => {
              setDialog(true);
              setDialogType("card");
            }}
            pointer
            color="#2E3A59"
          >
            <ItemIcon>
              <CardIcon />
            </ItemIcon>
            Card {driverData.card}
          </ListLI>
        </ListBlock>
      </MyDiv>
      <DriverData driver_id={props.driver_id} />

      {dialog && (
        <MyDialog
          title={dialogType === "edit" ? "Driver detail edit" : "Fill balance"}
          body={
            dialogType === "edit" ? (
              <EditDriver
                car_classes={driverData.car_classes}
                driver={driverData}
                close={(e) => setDialog(e)}
              />
            ) : dialogType === "card" ? (
              <Card driver={driverData} close={(e) => setDialog(e)} />
            ) : dialogType === "rate" ? (
              <Rate driver={driverData} close={(e) => setDialog(e)} />
            ) : (
              <Balance
                driver_id={props.driver_id}
                close={(e) => setDialog(e)}
              />
            )
          }
          close={(e) => {
            setDialog(e);
          }}
        />
      )}
    </>
  );
}

export default DriverInfo;

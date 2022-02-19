import React, { useState, useEffect, useRef } from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { ClassBlock, Curtain, H1, Header, PriceItem, Right } from "./orders.s";
import MyRadio from "../../components/my-radio/my-radio";
import OrdersMap from "./ordersMap";
import OrdersLeft from "./ordersLeft";
import { useHistory } from "react-router";
import axios from "axios";
import MyButton from "../../components/my-button/my-button";

function Orders(props) {
  const token = localStorage.getItem("token");
  const endRef = useRef(null);
  const history = useHistory();
  const [get_by_phone, set_get_by_phone] = useState([]);
  const [air_conditioner, set_air_conditioner] = useState({
    type: false,
    value: 0,
  });
  const [comment, set_comment] = useState("");
  const [estimate_price_from, set_estimate_price_from] = useState([]);
  const [estimate_price_from_res, set_estimate_price_from_res] = useState([]);

  const [start_location, set_start_location] = useState([]);

  // next step
  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (estimate_price_from.length > 0) {
      scrollToBottom();
    }
  }, [estimate_price_from]);

  // get air_conditioner
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/tools/air-condition`, {
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
        },
      })
      .then((res) => {
        set_air_conditioner({
          ...air_conditioner,
          value: res.data.data.air_condition,
        });
      })
      .catch((err) => {
        if (err.response.data.code == 401) {
          localStorage.removeItem("token");
          history.push("/login");
        }
      });
  }, []);
  // edit air_conditioner
  useEffect(() => {
    set_estimate_price_from(
      air_conditioner.type
        ? estimate_price_from.map((item) => ({
            ...item,
            price: item.price + air_conditioner.value,
          }))
        : estimate_price_from.map((item) => ({
            ...item,
            price: item.price - air_conditioner.value,
          }))
    );
  }, [air_conditioner.type]);
  const corporative_ride = (e) => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/rider/corporative-ride/create`,
        {
          air_conditioner: air_conditioner.type,
          car_class: estimate_price_from_res._id,
          comment: comment,
          rider_id: get_by_phone._id,
          start_location: start_location,
          card_number: null,
          payment_method: "cash",
          estimated_price: null,
          total_cost: null,
        },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        history.push("/rides");
      })
      .catch((err) => {
        if (err.response.data.code == 401) {
          localStorage.removeItem("token");
          history.push("/login");
        }
      });
  };
  return (
    <>
      <OrdersMap
        type={estimate_price_from.length > 0}
        set_start_location={(e) => {
          set_start_location(e);
        }}
        set_estimate_price_from={(e) => {
          set_estimate_price_from(e);
        }}
      />
      <MyDiv flex gap="12px" ref={endRef}>
        <MyDiv relative width="60%">
          {estimate_price_from.length === 0 || get_by_phone?._id ? (
            <Curtain top="0" />
          ) : (
            ""
          )}
          <OrdersLeft
            get_by_phone={(e) => set_get_by_phone(e)}
            air_conditioner={(e) => {
              set_air_conditioner({ ...air_conditioner, type: e });
            }}
            comment={(e) => set_comment(e)}
            close={() => set_estimate_price_from([])}
          />
        </MyDiv>
        <Right>
          {get_by_phone.length === 0 && <Curtain top="0" />}
          <Header>
            <H1>Class</H1>
            <H1>Price</H1>
          </Header>
          {estimate_price_from.map((item, index) => (
            <ClassBlock key={index}>
              <MyDiv center padding="0 0 0 12px">
                <MyRadio
                  id={item.name}
                  name="id1"
                  label={item.name}
                  onClick={() => set_estimate_price_from_res(item)}
                />
              </MyDiv>
              <MyDiv center>
                <PriceItem>{item.price} SUM</PriceItem>
              </MyDiv>
            </ClassBlock>
          ))}
          <MyDiv line gap="12px" padding="0 12px" margin="12px 0 0 0">
            <MyButton onClick={() => set_get_by_phone([])} red text="Go Back" />

            <MyButton
              disabled={estimate_price_from_res.length === 0}
              onClick={() => corporative_ride()}
              blue
              text="Save"
            />
          </MyDiv>
        </Right>
      </MyDiv>
    </>
  );
}

export default Orders;

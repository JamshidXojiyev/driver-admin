import React, { useState, useEffect } from "react";
import ReactInputMask from "react-input-mask";
import MyCheckbox from "../../components/my-checkbox/my-checkbox";
import MyInput from "../../components/my-input/my-input";
import MyTextarea from "../../components/my-textarea/my-textarea";
import { MyDiv } from "../../global-styles/my-div.s";
import { FullName, ItemBlock, Left, LeftContainer } from "./orders.s";
import axios from "axios";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import MyButton from "../../components/my-button/my-button";

function OrdersLeft(props) {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const [full_name, set_full_name] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [value, setValue] = useState({ air_conditioner: false, comment: "" });

  const nextStep = () => {
    const phone = phoneNumber
      .replace(/[-+_() ]/g, "")
      .substring(3, phoneNumber.replace(/[-+_() ]/g, "").length);
    phone.length === 9
      ? axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/rider/get-by-phone`,
            {
              phone_number: phone,
            },
            {
              headers: {
                Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
              },
            }
          )
          .then((res) => {
            set_full_name(
              `${res.data.data.first_name} ${res.data.data.last_name}`
            );
            props.get_by_phone(res.data.data);
            props.air_conditioner(value.air_conditioner);
            props.comment(value.comment);
            setPhoneErr(false);
          })
          .catch((err) => {
            if (err.response.data.code == 401) {
              localStorage.removeItem("token");
              history.push("/login");
            }
          })
      : setPhoneErr(true);
  };

  return (
    <Left>
      {full_name && <FullName>{full_name}</FullName>}
      <LeftContainer>
        <ItemBlock>
          <ReactInputMask
            mask="+\9\98 (99) 999-99-99"
            maskChar="_"
            name="phone_number"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          >
            {(propsPhone) => (
              <MyInput
                type="phone"
                label="Phone number:"
                placeholder="Enter your phone number"
                lite
                error={phoneErr}
              />
            )}
          </ReactInputMask>
        </ItemBlock>
        <ItemBlock>
          <MyCheckbox
            label="Air conditioner"
            id="air_conditioner"
            name="air_conditioner"
            checked={value.air_conditioner}
            onChange={(e) => {
              setValue({
                ...value,
                air_conditioner: e.target.checked,
              });
            }}
          />
        </ItemBlock>
      </LeftContainer>
      <MyDiv margin="12px 0 0 0">
        <MyTextarea
          lite
          label="Comment:"
          placeholder="Enter your comment"
          value={value.comment}
          onChange={(e) => setValue({ ...value, comment: e.target.value })}
        />
      </MyDiv>
      <MyDiv flex gap="12px">
        <MyButton
          red
          text="Breack"
          onClick={() => {
            props.close(false);
            setPhoneErr(false);
          }}
        />
        <MyButton
          disabled={
            phoneNumber
              .replace(/[-+_() ]/g, "")
              .substring(3, phoneNumber.replace(/[-+_() ]/g, "").length)
              .length < 9
          }
          blue
          text="Next"
          onClick={() => nextStep()}
        />
      </MyDiv>
    </Left>
  );
}

export default OrdersLeft;

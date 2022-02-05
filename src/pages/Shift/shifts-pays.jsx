import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import { Pay } from "./shift.s";
import { ReactComponent as BottomLeftIcon } from "../../assats/icons/bottom-left.svg";
import { ReactComponent as TopRightIcon } from "../../assats/icons/top-right.svg";
import MySelectSearch from "../../components/my-select-search/my-select-search";
import MyInput from "../../components/my-input/my-input";
import MyTextarea from "../../components/my-textarea/my-textarea";
import MyButton from "../../components/my-button/my-button";
import MyTable from "../../components/my-table/my-table";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MyForm } from "../../global-styles/form.s";
import { useAlert } from "react-alert";

function ShiftsPays(props) {
  const token = localStorage.getItem("token");
  const alert = useAlert();

  const [pay_type, set_pay_type] = useState("");
  const [render, setRender] = useState(false);
  const [pay, set_pay] = useState([]);
  const [dataBase, setDataBase] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [newData, setNewData] = useState({
    header: ["Date", "Whom", "Comment", "Value", "Type"],
    body: [],
    order: ["date", "driver_name", "comment", "value", "type"],
  });
  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/drivers/get`,
        {
          limit: 10,
          page: 1,
          search: formik.values.driver,
        },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        setDrivers(res.data.data.data);
      })
      .catch((err) => console.log(err));
  }, [render]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/shift-last`, {
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
        },
      })
      .then((res) => {
        set_pay(res.data.data);

        axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/shift-pays/get`,
            { shift_id: res.data.data._id },
            {
              headers: {
                Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
              },
            }
          )
          .then((res) => {
            setDataBase(res.data.data);
          });
      });
  }, [render]);
  useEffect(() => {
    const data = dataBase.map((item) => {
      const testData = {
        date: new Date(item.date).toLocaleDateString("ru"),
        driver_name: item.driver_name,
        comment: item.comment,
        value: parseFloat(item.value).toLocaleString("en-EN", ","),
        type: item.type === "pay-in" ? <BottomLeftIcon /> : <TopRightIcon />,
      };
      return testData;
    });
    setNewData({ ...newData, body: data });
  }, [dataBase, render]);

  const formik = useFormik({
    initialValues: {
      driver: "",
      value: "",
      comment: "",
    },
    validationSchema: Yup.object({
      driver: Yup.string().required("Required"),
      value: Yup.number().required("Required"),
    }),
    onSubmit: (val) => {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/shift-${pay_type}`,
          {
            driver_id: val.driver,
            shift_id: pay._id,
            subtype: "fees",
            type: pay_type,
            value: val.value,
            value_type: "cash",
          },
          {
            headers: {
              Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
            },
          }
        )
        .then(() => {
          formik.resetForm({ driver: "", value: "", comment: "" });
          setRender(!render);
          alert.success("Saccess.");
        })
        .catch((err) => alert.error(err.message));
    },
  });

  return (
    <>
      <MyDiv bothSides margin="0 0 18px 0">
        <MyDiv line margin="0 0 18px 0">
          <Link to="/shift">
            <MenuName borderNone>
              <span>&#8249;</span> Shift report
            </MenuName>
          </Link>
        </MyDiv>
        <MyDiv lineRight gap="20px">
          <Pay>
            {parseFloat(pay.pay_in).toLocaleString("en-EN")}
            <BottomLeftIcon />
          </Pay>
          <Pay>
            {parseFloat(pay.pay_out).toLocaleString("en-EN")}
            <TopRightIcon />
          </Pay>
        </MyDiv>
      </MyDiv>
      <MyForm onSubmit={formik.handleSubmit}>
        <MyDiv block margin="0 0 16px 0">
          <MyDiv line gap="20px">
            <MySelectSearch
              label="Driver"
              options={drivers.map((item) => {
                const resp = {
                  name: `${item.first_name}: ${item.phone_number}`,
                  value: item._id,
                };
                return resp;
              })}
              search
              placeholder="Search driver"
              name="driver"
              value={formik.values.driver}
              onChange={(e) => formik.setFieldValue("driver", e)}
              error={
                formik.touched.driver && formik.errors.driver ? true : false
              }
              errorMessage={formik.touched.driver && formik.errors.driver}
            />
            <MyInput
              lite
              label="Value"
              placeholder="0"
              type="number"
              name="value"
              value={formik.values.value}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.value && formik.errors.value ? true : false}
              errorMessage={formik.touched.value && formik.errors.value}
            />
          </MyDiv>
          <MyTextarea
            lite
            label="Comment"
            placeholder="Enter your comment"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.comment && formik.errors.comment ? true : false
            }
            errorMessage={formik.touched.comment && formik.errors.comment}
          />
          <MyDiv line gap="20px">
            <MyButton
              onClick={() => set_pay_type("pay-in")}
              blue
              text="pay-in"
            />
            <MyButton
              onClick={() => set_pay_type("pay-out")}
              red
              text="pay-out"
            />
          </MyDiv>
        </MyDiv>
      </MyForm>
      <MyTable pageNone data={newData} />
    </>
  );
}

export default ShiftsPays;

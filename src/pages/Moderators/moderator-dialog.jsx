import { useFormik } from "formik";
import React from "react";
import MyInput from "../../components/my-input/my-input";
import { MyDiv } from "../../global-styles/my-div.s";
import * as Yup from "yup";
import MyButton from "../../components/my-button/my-button";
import MyCheckbox from "../../components/my-checkbox/my-checkbox";
import { Container } from "./moderators.s";
import { MyForm } from "../../global-styles/form.s";
import { useAlert } from "react-alert";
import axios from "axios";

function ModeratorDialog(props) {
  const token = localStorage.getItem("token");
  const alert = useAlert();

  const checkboxes = [
    "branches",
    "car_classes",
    "drivers",
    "live_map",
    "moderators",
    "orders",
    "places",
    "reports",
    "riders",
    "rides",
    "settings",
    "shift",
    "shift_history",
  ];
  const formik = useFormik({
    initialValues: {
      username: props.data ? props.data.username : "",
      password: props.data ? props.data.password : "",
      branches: props.data ? props.data.access_rights.branches : false,
      car_classes: props.data ? props.data.access_rights.car_classes : false,
      drivers: props.data ? props.data.access_rights.drivers : false,
      live_map: props.data ? props.data.access_rights.live_map : false,
      moderators: props.data ? props.data.access_rights.moderators : false,
      orders: props.data ? props.data.access_rights.orders : false,
      places: props.data ? props.data.access_rights.places : false,
      reports: props.data ? props.data.access_rights.reports : false,
      riders: props.data ? props.data.access_rights.riders : false,
      rides: props.data ? props.data.access_rights.rides : false,
      settings: props.data ? props.data.access_rights.settings : false,
      shift: props.data ? props.data.access_rights.shift : false,
      shift_history: props.data
        ? props.data.access_rights.shift_history
        : false,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .test(
          "Start from letter",
          "This field should start from letter",
          (value) => Number.isNaN(Number(value[0]))
        )
        .max(30, "Maximum length 30 characters")
        .min(5, "Minimum length is 5 characters")
        .required("Required"),
      password: Yup.string()
        .max(30, "Maximum length 30 characters")
        .min(5, "Minimum length is 5 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      if (props.data) {
        const password_in = formik.values.password;
        const username_in = formik.values.username;
        delete formik.values.password;
        delete formik.values.username;
        axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/moderator/update`,
            {
              access_rights: formik.values,
              hashed_token: props.data.hashed_token,
              id: props.data.id,
              is_super_admin: props.data.is_super_admin,
              _id: props.data._id,
              password: password_in,
              username: username_in,
            },
            {
              headers: {
                Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
              },
            }
          )
          .then(() => {
            alert.success("Moderator update.");
            props.close(false);
          });
      } else {
        const password_in = formik.values.password;
        const username_in = formik.values.username;
        delete formik.values.password;
        delete formik.values.username;
        axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/moderator/create`,
            {
              password: password_in,
              username: username_in,
              access_rights: formik.values,
            },
            {
              headers: {
                Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
              },
            }
          )
          .then((res) => {
            alert.success("Moderator created.");
            props.close(false);
          });
      }
    },
  });
  const deleteUser = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/moderator/delete`, props.data, {
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert.success("Delete moderator.");
        props.close(false);
      });
  };
  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyDiv gap="12px">
        <MyInput
          label="User name"
          placeholder="Enter your phone number"
          lite
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.username && formik.errors.username ? true : false
          }
          errorMessage={formik.touched.username && formik.errors.username}
        />
        <MyInput
          password
          label="Password"
          placeholder="Enter your password"
          lite
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password && formik.errors.password ? true : false
          }
          errorMessage={formik.touched.password && formik.errors.password}
        />
      </MyDiv>
      <Container>
        {checkboxes.map((item) => (
          <MyCheckbox
            disabled={props.data ? props.data.is_super_admin : false}
            label={item.replace("_", " ")}
            id={item}
            name={item}
            checked={formik.values[item]}
            onChange={formik.handleChange}
          />
        ))}
      </Container>
      <MyDiv line margin="10px 0 0 0" gap="12px">
        {props.data ? (
          <MyButton
            onClick={() => deleteUser()}
            text="Delete"
            red
            type="button"
          />
        ) : (
          <MyDiv />
        )}
        <MyButton text="Log In" blue type="submit" />
      </MyDiv>
    </MyForm>
  );
}

export default ModeratorDialog;

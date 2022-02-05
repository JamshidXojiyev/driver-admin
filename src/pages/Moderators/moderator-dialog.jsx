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
    "news",
    "shift_history",
  ];
  const formik = useFormik({
    initialValues: props.data
      ? {
          username: props.data.username,
          password: props.data.password,
          branches: props.data.access_rights.branches,
          car_classes: props.data.access_rights.car_classes,
          drivers: props.data.access_rights.drivers,
          live_map: props.data.access_rights.live_map,
          moderators: props.data.access_rights.moderators,
          orders: props.data.access_rights.orders,
          places: props.data.access_rights.places,
          reports: props.data.access_rights.reports,
          riders: props.data.access_rights.riders,
          rides: props.data.access_rights.rides,
          settings: props.data.access_rights.settings,
          shift: props.data.access_rights.shift,
          news: props.data.access_rights.news,
          shift_history: props.data.access_rights.shift_history,
        }
      : {
          username: "",
          password: "",
          branches: false,
          car_classes: false,
          drivers: false,
          live_map: false,
          moderators: false,
          orders: false,
          places: false,
          reports: false,
          riders: false,
          rides: false,
          settings: false,
          shift: false,
          news: false,
          shift_history: false,
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
    onSubmit: (val) => {
      if (props.data) {
        axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/moderator/update`,
            {
              access_rights: formik.values,
              hashed_token: props.data.hashed_token,
              id: props.data.id,
              is_super_admin: props.data.is_super_admin,
              _id: props.data._id,
              password: formik.values.password,
              username: formik.values.username,
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
          })
          .catch((err) => alert.success(err.message));
      } else {
        axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/moderator/create`,
            {
              password: formik.values.password,
              username: formik.values.username,
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
          })
          .catch((err) => alert.success(err.message));
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
        alert.success("Delete moderator.");
        props.close(false);
      })
      .catch((err) => alert.error(err.message));
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
        <MyButton text="Save" blue type="submit" />
      </MyDiv>
    </MyForm>
  );
}

export default ModeratorDialog;

import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import { MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import * as Yup from "yup";
import { MyForm } from "../../global-styles/form.s";
import MyMap from "../../components/my-map/my-map";
import axios from "axios";
import { useAlert } from "react-alert";

function BranchesDialog(props) {
  const token = localStorage.getItem("token");
  const alert = useAlert();

  const formik = useFormik({
    initialValues: {
      name: "",
      paths: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required!"),
    }),
    onSubmit: (val) => {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/branch/${
            props.id ? "update" : "create"
          }`,
          props.id
            ? { name: val.name, paths: val.paths, _id: props.id }
            : { name: val.name, paths: val.paths },
          {
            headers: {
              Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
            },
          }
        )
        .then((res) => {
          props.close(false);
          alert.success("Branche create.");
        })
        .catch((err) => {
          console.log(err);
          alert.error(err.data.message);
        });
    },
  });

  useEffect(() => {
    if (props.id) {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/branch/get-by-id`,
          { _id: props.id },
          {
            headers: {
              Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
            },
          }
        )
        .then((res) => {
          formik.setFieldValue("name", res.data.data.name);
          formik.setFieldValue("paths", res.data.data.paths);
        });
    }
  }, []);

  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyDiv bothSides margin="0 0 18px 0">
        <MyDiv line margin="0 0 18px 0">
          <MenuName borderNone onClick={() => props.close(false)}>
            <span>&#8249;</span> Branches report
          </MenuName>
        </MyDiv>
        <MyButton width="120px" blue text={"Save"} />
      </MyDiv>
      <MyInput
        lite
        label="Name"
        placeholder="Enter your name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name ? true : false}
        errorMessage={formik.touched.name && formik.errors.name}
      />
      <MyDiv margin="0 0 18px 0" />
      <MyMap
        scrollWheelZoom={true}
        setPolygon={(e) => {
          formik.setFieldValue("paths", e);
        }}
        polygon={formik.values.paths}
        width="100%"
        height="calc(100vh - 290px)"
      />
    </MyForm>
  );
}

export default BranchesDialog;

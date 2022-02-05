import { useFormik } from "formik";
import React from "react";
import MyInput from "../../components/my-input/my-input";
import { MyForm } from "../../global-styles/form.s";
import { MyDiv } from "../../global-styles/my-div.s";
import * as Yup from "yup";
import MyButton from "../../components/my-button/my-button";
import axios from "axios";
import { useAlert } from "react-alert";

function Rate(props) {
  const token = localStorage.getItem("token");
  const alert = useAlert();

  const formik = useFormik({
    initialValues: {
      rate: "",
    },
    validationSchema: Yup.object({
      rate: Yup.number().required("Required !"),
    }),
    onSubmit: (e) => {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/driver/rate/add`,
          {
            driver_id: props.driver._id,
            rate: parseFloat(e.rate),
          },
          {
            headers: {
              Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
            },
          }
        )
        .then((res) => {
          alert.success("Success");
          props.close(false);
        })
        .catch((err) => alert.success(err.message));
    },
  });
  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyInput
        lite
        type="number"
        label="Rate"
        placeholder="Enter your rate"
        name="rate"
        value={formik.values.rate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.rate && formik.errors.rate ? true : false}
        errorMessage={formik.touched.rate && formik.errors.rate}
      />
      <MyDiv line margin="12px 0 0 0 ">
        <MyDiv />
        <MyButton blue text="Confirm" />
      </MyDiv>
    </MyForm>
  );
}

export default Rate;

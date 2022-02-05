import { useFormik } from "formik";
import React from "react";
import MyCheckbox from "../../components/my-checkbox/my-checkbox";
import MyInput from "../../components/my-input/my-input";
import MyTextarea from "../../components/my-textarea/my-textarea";
import { MyForm } from "../../global-styles/form.s";
import { MyDiv } from "../../global-styles/my-div.s";
import * as Yup from "yup";
import MyButton from "../../components/my-button/my-button";
import axios from "axios";
import { useAlert } from "react-alert";

function Balance(props) {
  const token = localStorage.getItem("token");
  const alert = useAlert();

  const formik = useFormik({
    initialValues: {
      value: "",
      get_back: false,
      comment: "",
    },
    validationSchema: Yup.object({
      value: Yup.string()
        .required("Required !")
        .min(4, "It cannot be less than 1 000 sum !")
        .max(9, "Not more than 1 000 000 000 sum !"),
    }),
    onSubmit: (e) => {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/driver/fill-balance`,
          {
            driver_id: props.driver_id,
            get_back: e.get_back,
            is_card: false,
            value: parseFloat(e.value),
            comment: e.comment,
          },
          {
            headers: {
              Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
            },
          }
        )
        .then((res) => {
          alert.success(
            formik.values.get_back
              ? "The balance has been reduced"
              : "The balance is replenished."
          );
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
        label="Value"
        placeholder="Enter your value"
        name="value"
        value={formik.values.value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.value && formik.errors.value ? true : false}
        errorMessage={formik.touched.value && formik.errors.value}
      />
      <MyDiv padding="0 0 12px 0" />
      <MyCheckbox
        label="Get back"
        id="get_back"
        name="get_back"
        checked={formik.values.get_back}
        onChange={formik.handleChange}
      />
      <MyDiv padding="0 0 12px 0" />
      <MyTextarea
        width="450px"
        lite
        label="Comment"
        placeholder="Enter your comment"
        name="comment"
        value={formik.values.comment}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.comment && formik.errors.comment ? true : false}
        errorMessage={formik.touched.comment && formik.errors.comment}
      />
      <MyDiv line margin="12px 0 0 0 ">
        <MyDiv />
        <MyButton
          blue
          text={
            formik.values.get_back
              ? "The balance has been reduced"
              : "The balance is replenished."
          }
        />
      </MyDiv>
    </MyForm>
  );
}

export default Balance;

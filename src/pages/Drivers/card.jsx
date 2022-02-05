import { useFormik } from "formik";
import React from "react";
import MyInput from "../../components/my-input/my-input";
import MyTextarea from "../../components/my-textarea/my-textarea";
import { MyForm } from "../../global-styles/form.s";
import { MyDiv } from "../../global-styles/my-div.s";
import * as Yup from "yup";
import MyButton from "../../components/my-button/my-button";
import axios from "axios";
import { useAlert } from "react-alert";

function Card(props) {
  const token = localStorage.getItem("token");
  const alert = useAlert();

  const formik = useFormik({
    initialValues: {
      value: "",
      comment: "",
    },
    validationSchema: Yup.object({
      value: Yup.number().required("Required !"),
      comment: Yup.string().required("Required !"),
    }),
    onSubmit: (e) => {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/driver/fill-balance`,
          {
            comment: e.comment,
            driver_id: props.driver._id,
            get_back: true,
            is_card: true,
            value: parseFloat(e.value),
          },
          {
            headers: {
              Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
            },
          }
        )
        .then((res) => {
          alert.success("Success.");
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
      <MyTextarea
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
      <MyDiv width="380px" line margin="12px 0 0 0 ">
        <MyDiv />
        <MyButton blue text="Confirm" />
      </MyDiv>
    </MyForm>
  );
}

export default Card;

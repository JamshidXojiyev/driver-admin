import { useFormik } from "formik";
import React, { useEffect } from "react";
import MyInput from "../../components/my-input/my-input";
import * as Yup from "yup";
import { MyDiv } from "../../global-styles/my-div.s";
import MyButton from "../../components/my-button/my-button";
import { MyForm } from "../../global-styles/form.s";
import axios from "axios";
import { useAlert } from "react-alert";

function ShiftClose(props) {
  const token = localStorage.getItem("token");
  const alert = useAlert();

  const formik = useFormik({
    initialValues: {
      actual_value: "",
      expected_value: props.expected_cash_amount,
      difference: 0,
    },
    validationSchema: Yup.object({
      actual_value: Yup.string().required("Required."),
    }),
    onSubmit: (val) => {
      console.log(val);
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/shift-close`,
          {
            shift_id: props.shift_id,
            actual_value: formik.values.actual_value,
          },
          {
            headers: {
              Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
            },
          }
        )
        .then((res) => {
          alert.success("The shift is closed.");
          props.close(false);
        });
    },
  });
  useEffect(() => {
    formik.setFieldValue(
      "difference",
      formik.values.actual_value === ""
        ? parseFloat(formik.values.expected_value) - 0
        : formik.values.expected_value === ""
        ? 0
        : parseFloat(formik.values.expected_value) -
          parseFloat(formik.values.actual_value)
    );
  }, [formik.values.actual_value]);
  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyInput
        lite
        label="Expected value"
        name="expected_value"
        value={formik.values.expected_value}
        onChange={formik.handleChange}
        disabled
      />
      <MyInput
        lite
        label="Difference"
        name="difference"
        value={formik.values.difference}
        onChange={formik.handleChange}
        disabled
      />
      <MyInput
        lite
        type="number"
        label="Actual value"
        placeholder="0"
        name="actual_value"
        value={formik.values.actual_value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.actual_value && formik.errors.actual_value
            ? true
            : false
        }
        errorMessage={formik.touched.actual_value && formik.errors.actual_value}
      />
      <MyDiv bothSides gap="12px" margin="12px 0 0 0">
        <MyDiv></MyDiv>
        <MyButton red text=" Close " />
      </MyDiv>
    </MyForm>
  );
}

export default ShiftClose;

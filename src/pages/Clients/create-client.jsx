import React, { useEffect } from "react";
import { MyForm } from "../../global-styles/form.s";
import MyInput from "../../components/my-input/my-input";
import MyButton from "../../components/my-button/my-button";
import { MyDiv } from "../../global-styles/my-div.s";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAlert } from "react-alert";
import axios from "axios";

function CreateClient(props) {
  const alert = useAlert();
  const token = localStorage.getItem("token");

  const formik = useFormik({
    initialValues: props.dialog_data,
    validationSchema: Yup.object({
      first_name: Yup.string()
        .max(25, "Maximum length 25 characters")
        .min(3, "Minimum length is 3 characters")
        .required("Required"),
      last_name: Yup.string()
        .max(25, "Maximum length 25 characters")
        .min(3, "Minimum length is 3 characters")
        .required("Required"),
    }),
    onSubmit: (value) => {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/user/update`, value, {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        })
        .then((res) => {
          alert.success("Customer information updated.");
          props.close(false);
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyInput
        lite
        label="First Name"
        placeholder="Enter your first name"
        name="first_name"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.first_name && formik.errors.first_name ? true : false
        }
        errorMessage={formik.touched.first_name && formik.errors.first_name}
      />
      <MyInput
        lite
        label="Last Name"
        placeholder="Enter your last name"
        name="last_name"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.last_name && formik.errors.last_name ? true : false
        }
        errorMessage={formik.touched.last_name && formik.errors.last_name}
      />
      <MyInput
        lite
        type="date"
        label="Blocked till"
        placeholder="Enter your blocked till"
        name="blocked_till"
        value={formik.values.blocked_till?.substring(0, 10)}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.blocked_till && formik.errors.blocked_till
            ? true
            : false
        }
        errorMessage={formik.touched.blocked_till && formik.errors.blocked_till}
      />
      <MyDiv bothSides gap="12px" margin="12px 0 0 0">
        <MyDiv>
          <MyButton
            type="button"
            red
            text="Close"
            onClick={() => props.close(false)}
          />
        </MyDiv>
        <MyDiv>
          <MyButton blue text="Save" />
        </MyDiv>
      </MyDiv>
    </MyForm>
  );
}

export default CreateClient;

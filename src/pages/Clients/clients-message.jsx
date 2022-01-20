import React from "react";
import { MyForm } from "../../global-styles/form.s";
import MyInput from "../../components/my-input/my-input";
import MyButton from "../../components/my-button/my-button";
import { MyDiv } from "../../global-styles/my-div.s";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAlert } from "react-alert";
import axios from "axios";
import MyTextarea from "../../components/my-textarea/my-textarea";

function ClientsMessage(props) {
  const alert = useAlert();
  const token = localStorage.getItem("token");

  const formik = useFormik({
    initialValues: { phone: props.phone, message: "" },
    validationSchema: Yup.object({
      phone: Yup.number(),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (value) => {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/send-sms`, value, {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        })
        .then((res) => {
          alert.success("Message sent.");
          props.close(false);
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyTextarea
        lite
        label="Message"
        placeholder="Enter your message"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && formik.errors.message ? true : false}
        errorMessage={formik.touched.message && formik.errors.message}
      />
      <MyDiv bothSides gap="12px" margin="12px 0 0 0">
        <MyDiv>
          <MyButton
            type="button"
            red
            text=" Push Notification"
            onClick={() => props.close(false)}
          />
        </MyDiv>
        <MyDiv>
          <MyButton blue text="SMS" />
        </MyDiv>
      </MyDiv>
    </MyForm>
  );
}

export default ClientsMessage;

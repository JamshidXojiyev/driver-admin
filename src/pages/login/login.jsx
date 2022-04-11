import React, { useContext, useState } from "react";
import {
  LogInContainer,
  LeftContent,
  RightContent,
  Brand,
  H1,
  H2,
  LogInBg,
} from "./login.s";
import BrandIMG from "../../assats/images/brand.png";
import { MyDiv } from "../../global-styles/my-div.s";
import MyInput from "../../components/my-input/my-input";
import MyButton from "../../components/my-button/my-button";
import axios from "axios";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loading from "../../components/loading/loading";
import LanguageContext from "../../locale/locale";

function LogIn(props) {
  const history = useHistory();
  const alert = useAlert();
  const {
    state: {
      lang,
      value: {
        inputs: { name },
      },
    },
    dispatch,
  } = useContext(LanguageContext);

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .test(
          "Start from letter",
          "This field should start from letter",
          (value) => Number.isNaN(Number(value[0]))
        )
        .max(30, "Maximum length 30 characters")
        .min(3, "Minimum length is 5 characters")
        .required("Required"),
      password: Yup.string()
        .max(30, "Maximum length 30 characters")
        .min(3, "Minimum length is 5 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/moderator/login`, values)
        .then((res) => {
          // history.push("/dashboard");
          window.location.href = "/";
          alert.success("Password confirmed");
          localStorage.setItem("token", JSON.stringify(res.data.data.token));
          localStorage.setItem("username", res.data.data.username);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          alert.error("Incorrect password entered !");
        });
    },
  });

  return (
    <>
      <LogInBg>
        {/* <h1
          onClick={() =>
            dispatch({
              type: "changeLang",
              payload: lang === "en" ? "ru" : "en",
            })
          }
        >
          {name}
        </h1> */}
        <LogInContainer>
          <LeftContent />
          <RightContent onSubmit={formik.handleSubmit}>
            <MyDiv center>
              <Brand src={BrandIMG} />
              <H1>Log In to Admin Panel</H1>
              <H2>Enter your phone number and password below</H2>
              <MyDiv margin="0 0 24px 0" width="100%">
                <MyInput
                  label="User name"
                  placeholder="Enter your phone number"
                  dark
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.username && formik.errors.username
                      ? true
                      : false
                  }
                  errorMessage={
                    formik.touched.username && formik.errors.username
                  }
                />
              </MyDiv>
              <MyDiv margin="0 0 24px 0">
                <MyInput
                  password
                  label="Password"
                  placeholder="Enter your password"
                  dark
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && formik.errors.password
                      ? true
                      : false
                  }
                  errorMessage={
                    formik.touched.password && formik.errors.password
                  }
                />
              </MyDiv>
              <MyButton text="Log In" dark type="submit" />
            </MyDiv>
          </RightContent>
        </LogInContainer>
      </LogInBg>
      <Loading loading={loading} onWindow />
    </>
  );
}

export default LogIn;

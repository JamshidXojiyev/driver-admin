import React, { useState } from "react";
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

function LogIn(props) {
  const history = useHistory();
  const alert = useAlert();
  const [user_name, set_user_name] = useState();
  const [password, set_password] = useState();
  const [err, setErr] = useState(false);
  const authenticate = (e) => {
    e.preventDefault();
    if (!Number.isNaN(Number(user_name[0]))) {
      setErr(true);
      alert.error("Username entered incorrectly !");
    } else if (!password) {
      setErr(true);
      alert.error("Password entered incorrectly !");
    } else {
      setErr(false);
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/moderator/login`, {
          username: user_name,
          password: password,
        })
        .then((res) => {
          history.push("/dashbord");
          alert.success("Password confirmed");
          localStorage.setItem("token", JSON.stringify(res.data.data.token));
        })
        .catch((err) => {
          setErr(true);
          alert.error("Incorrect password entered !");
        });
    }
  };
  return (
    <LogInBg>
      <LogInContainer>
        <LeftContent />
        <RightContent onSubmit={authenticate}>
          <MyDiv center>
            <Brand src={BrandIMG} />
            <H1>Log In to Admin Panel</H1>
            <H2>Enter your phone number and password below</H2>
            <MyDiv margin="0 0 24px 0" width="100%">
              <MyInput
                error={err}
                label="User name"
                placeholder="Enter your phone number"
                dark
                changeVal={(e) => set_user_name(e)}
              />
            </MyDiv>
            <MyDiv margin="0 0 24px 0">
              <MyInput
                password
                error={err}
                label="Password"
                placeholder="Enter your password"
                dark
                changeVal={(e) => set_password(e)}
              />
            </MyDiv>
            <MyButton text="Log In" dark type="submit" />
          </MyDiv>
        </RightContent>
      </LogInContainer>
    </LogInBg>
  );
}

export default LogIn;

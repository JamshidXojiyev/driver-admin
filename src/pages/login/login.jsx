import React from "react";
import {
  LogInContainer,
  LeftContent,
  RightContent,
  Brand,
  H1,
  H2,
  LogInBg,
  LinkStyle,
} from "./login.s";
import BrandIMG from "../../assats/images/brand.png";
import { MyDiv } from "../../global-styles/my-div.s";
import MyInput from "../../components/my-input/my-input";
import MyButton from "../../components/my-button/my-button";

function LogIn(props) {
  return (
    <LogInBg>
      <LogInContainer>
        <LeftContent />
        <RightContent>
          <MyDiv center>
            <Brand src={BrandIMG} />
            <H1>Log In to Admin Panel</H1>
            <H2>Enter your phone number and password below</H2>
            <MyDiv margin="0 0 24px 0" width="100%">
              <MyInput
                label="PHONE NUMBER"
                placeholder="Enter your phone number"
                dark
                filter
                mask="+\9\98 (99) 999-99-99"
                // changeVal={(e) => console.log(e)}
              />
            </MyDiv>

            <MyDiv margin="0 0 24px 0">
              <MyInput
                label="PASSWORD"
                placeholder="Enter your password"
                dark
                filter
                mask="9 9 9 9"
                // changeVal={(e) => console.log(e)}
              />
            </MyDiv>
            <LinkStyle to="/">
              <MyButton text="Log In" dark />
            </LinkStyle>
          </MyDiv>
        </RightContent>
      </LogInContainer>
    </LogInBg>
  );
}

export default LogIn;

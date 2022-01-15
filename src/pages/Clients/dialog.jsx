import React from "react";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import { MyDiv } from "../../global-styles/my-div.s";

function ClientDialog(props) {
  return (
    <MyDiv gap="14px">
      <MyDiv margin="0 0 14px 0">
        <MyInput
          label="Expected value:"
          placeholder="0"
          lite
          type="number"
          // changeVal={(e) => console.log(e)}
        />
      </MyDiv>
      <MyDiv margin="0 0 14px 0">
        <MyInput
          label="Actual value:"
          placeholder="0"
          lite
          type="number"
          // changeVal={(e) => console.log(e)}
        />
      </MyDiv>
      <MyDiv margin="0 0 14px 0">
        <MyInput
          label="Difference:"
          placeholder="0"
          lite
          type="number"
          // changeVal={(e) => console.log(e)}
        />
      </MyDiv>
      <MyDiv bothSides>
        <MyDiv />
        <MyButton text="Add New Teacher" blue />
      </MyDiv>
    </MyDiv>
  );
}

export default ClientDialog;

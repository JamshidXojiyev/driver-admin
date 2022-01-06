import React from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { RadioLabel, RadioStyle } from "./my-radio.s";

function MyRadio(props) {
  return (
    <MyDiv line>
      <RadioStyle
        {...props}
        type="radio"
        id={props.id}
        name={props.name}
        value={props.label}
      />
      <RadioLabel for={props.id}>{props.label}</RadioLabel>
    </MyDiv>
  );
}

export default MyRadio;

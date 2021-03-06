import React from "react";
import { CheckboxStyle, CheckLabel } from "./my-checkbox.s";

function MyCheckbox(props) {
  return (
    <>
      <CheckLabel for={props.id ? props.id : "v1"}>
        <CheckboxStyle {...props} id={props.id ? props.id : "v1"} type="checkbox" />
        {props.label} {props.sub && props.sub}
      </CheckLabel>
    </>
  );
}

export default MyCheckbox;

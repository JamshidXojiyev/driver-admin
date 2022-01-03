import React from "react";
import { LabelStyle } from "../my-input/my-input.s";
import { TextareaStyle } from "./my-textarea.s";

function MyTextarea(props) {
  return (
    <>
      {props.label && (
        <LabelStyle error={props.error}>{props.label}</LabelStyle>
      )}
      <TextareaStyle {...props}></TextareaStyle>
    </>
  );
}

export default MyTextarea;

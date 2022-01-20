import React from "react";
import { ErrorMessage, LabelStyle } from "../my-input/my-input.s";
import { TextareaStyle } from "./my-textarea.s";

function MyTextarea(props) {
  return (
    <>
      {props.label && (
        <LabelStyle error={props.error}>{props.label}</LabelStyle>
      )}
      <TextareaStyle {...props}></TextareaStyle>
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </>
  );
}

export default MyTextarea;

import React from "react";
import { ButtonStyled } from "./my-button.s";

function MyButton(props) {
  return <ButtonStyled {...props}>{props.text}</ButtonStyled>;
}

export default MyButton;

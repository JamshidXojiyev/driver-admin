import React, { useState } from "react";
import MyButton from "../my-button/my-button";
import {
  ErrorMessage,
  InputBlockStyle,
  InputStyle,
  LabelStyle,
  SearchIconStyle,
} from "./my-input.s";
import { ReactComponent as SearchIcon } from "../../assats/icons/search.svg";
import InputMask from "react-input-mask";
import { MyDiv } from "../../global-styles/my-div.s";

function MyInput(props) {
  const [open, setOpen] = useState(true);
  return (
    <MyDiv width={props.width}>
      {props.label && (
        <LabelStyle error={props.error}>{props.label}</LabelStyle>
      )}
      {props.filter ? (
        <InputMask mask={props.mask} maskChar="_" {...props}>
          {(propsPhone) => <InputStyle>{props.text}</InputStyle>}
        </InputMask>
      ) : (
        <InputBlockStyle>
          <InputStyle
            type={open && props.password ? "password" : "text"}
            {...props}
          >
            {props.text}
          </InputStyle>
          {props.search && (
            <SearchIconStyle>
              <MyButton text={<SearchIcon />} icon />
            </SearchIconStyle>
          )}
          {props.password && (
            <SearchIconStyle>
              <MyButton
                type="button"
                onClick={() => setOpen(!open)}
                base
                text={open ? "Show" : "Hide"}
              />
            </SearchIconStyle>
          )}
        </InputBlockStyle>
      )}
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </MyDiv>
  );
}

export default MyInput;

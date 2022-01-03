import React from "react";
import MyButton from "../my-button/my-button";
import {
  InputBlockStyle,
  InputStyle,
  LabelStyle,
  SearchIconStyle,
} from "./my-input.s";
import { ReactComponent as SearchIcon } from "../../assats/icons/search.svg";
import InputMask from "react-input-mask";
import { MyDiv } from "../../global-styles/my-div.s";

function MyInput(props) {
  return (
    <MyDiv>
      {props.label && (
        <LabelStyle error={props.error}>{props.label}</LabelStyle>
      )}
      {props.filter ? (
        <InputMask
          mask={props.mask}
          maskChar="_"
          value={props.val}
          onChange={(e) => props.changeVal(e.target.value)}
        >
          {(propsPhone) => <InputStyle {...props}>{props.text}</InputStyle>}
        </InputMask>
      ) : (
        <InputBlockStyle>
          <InputStyle {...props}>{props.text}</InputStyle>
          {props.search && (
            <SearchIconStyle>
              <MyButton text={<SearchIcon />} icon />
            </SearchIconStyle>
          )}
        </InputBlockStyle>
      )}
    </MyDiv>
  );
}

export default MyInput;

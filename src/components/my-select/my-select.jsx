import React from "react";
import { LabelStyle } from "../my-input/my-input.s";
import { OptionStyle, SelectStyle } from "./my-select.s";

function MySelect(props) {
  return (
    <>
      {props.label && (
        <LabelStyle error={props.error}>{props.label}</LabelStyle>
      )}
      <SelectStyle {...props}>
        {props.options.map((item, index) => (
          <OptionStyle key={index} value={item}>
            {item}
          </OptionStyle>
        ))}
      </SelectStyle>
    </>
  );
}

export default MySelect;

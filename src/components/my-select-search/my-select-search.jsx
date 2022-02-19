import React from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { ErrorMessage, LabelStyle } from "../my-input/my-input.s";
import { SelectSearchStyle } from "./my-select-search.s";
import { fuzzySearch } from "react-select-search";

function MySelectSearch(props) {
  return (
    <MyDiv width={props.width}>
      {props.label && (
        <LabelStyle error={props.error}>{props.label}</LabelStyle>
      )}
      <SelectSearchStyle filterOptions={fuzzySearch} {...props} />
      {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </MyDiv>
  );
}

export default MySelectSearch;

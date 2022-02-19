import React from "react";
import {
  DatalistStyle,
  OptionStyle,
  SearchInputStyle,
} from "./select-search.s";

function SelectSearch(props) {
  return (
    <>
      <SearchInputStyle list={props.name} {...props} />
      <DatalistStyle width={props.width} id={props.name}>
        {props.values.map((item, index) => (
          <OptionStyle value={item.value ? item.value : item} key={index} />
        ))}
      </DatalistStyle>
    </>
  );
}

export default SelectSearch;

// values = ["jon","dou","alisa"]
// values = [
//   {
//     id: 1,
//     ...
//     value: "jon",
//   },
//   {
//     id: 2,
//     ...
//     value: "alisa",
//   },
// ]

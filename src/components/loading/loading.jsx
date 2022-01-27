import React from "react";
import { LoadingBlock, LoadingStyle, SPAN } from "./loading.s";

function Loading(props) {
  return (
    props.loading && (
      <LoadingBlock {...props}>
        <LoadingStyle>
          Loading
          <SPAN>.</SPAN>
          <SPAN>.</SPAN>
          <SPAN>.</SPAN>
        </LoadingStyle>
      </LoadingBlock>
    )
  );
}

export default Loading;

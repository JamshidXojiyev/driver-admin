import React from "react";
import { DialogBg, DialogContainer } from "./dialog.s";

function MyDialog(props) {
  return (
    <>
      <DialogBg>
        <DialogContainer>{props.body}</DialogContainer>
      </DialogBg>
    </>
  );
}

export default MyDialog;

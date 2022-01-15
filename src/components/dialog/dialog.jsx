import React, { useState, useEffect } from "react";
import {
  DialogBg,
  DialogClose,
  DialogCon,
  DialogContainer,
  DialogHeader,
  DialogTitle,
} from "./dialog.s";

import { ReactComponent as CloseIcon } from "../../assats/icons/close.svg";
import { MyDiv } from "../../global-styles/my-div.s";
import MyButton from "../my-button/my-button";

function MyDialog(props) {
  return (
    <>
      <DialogBg>
        <DialogCon>
          <DialogClose onClick={() => props.close(false)} />
          <DialogContainer>
            <DialogHeader>
              <MyDiv bothSides>
                <DialogTitle>
                  {props.title ? props.title : "Dialog Information"}
                </DialogTitle>
                <MyButton
                  icon
                  text={<CloseIcon />}
                  onClick={() => props.close(false)}
                />
              </MyDiv>
            </DialogHeader>
            {props.body}
          </DialogContainer>
        </DialogCon>
      </DialogBg>
    </>
  );
}

export default MyDialog;

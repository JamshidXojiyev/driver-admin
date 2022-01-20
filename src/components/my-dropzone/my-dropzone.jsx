import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import {
  CheckSVGContent,
  CloseBtn,
  DropzoneBlock,
  H1,
  OrderIMG,
  SPAN,
} from "./my-dropzone.s";
import { ReactComponent as ExportSVG } from "../../assats/icons/export.svg";
import { ReactComponent as CloseIcon } from "../../assats/icons/close.svg";
import { MyDiv } from "../../global-styles/my-div.s";
import MyButton from "../my-button/my-button";

function MyDropzone(props) {
  const [file, setFile] = useState([]);
  const [fileRes, setFileRes] = useState(null);
  const [imgURL, setImgURL] = useState(props.img);

  useEffect(() => {
    if (file.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setFileRes(reader.result);
      };
      reader.readAsDataURL(file[0]);
    }
  }, [file]);
  useEffect(() => {
    props.set_file(file[0]);
  }, [fileRes]);
  return (
    <>
      <Dropzone onDrop={(e) => setFile(e)}>
        {({ getRootProps, getInputProps }) => (
          <DropzoneBlock error={props.error} {...getRootProps()}>
            {fileRes || imgURL.type ? (
              props.type === "image" ? (
                <MyDiv relative center>
                  <OrderIMG src={fileRes ? fileRes : imgURL.url} />
                  <CloseBtn
                    icon
                    onClick={() => {
                      setFile([]);
                      setFileRes(null);
                      setImgURL("");
                    }}
                    text={<CloseIcon />}
                  />
                </MyDiv>
              ) : (
                <>
                  <CheckSVGContent />
                </>
              )
            ) : (
              <MyDiv flex width="auto" gap="48px">
                <input {...getInputProps()} accept={props.formats} />
                <ExportSVG />
                <MyDiv>
                  <H1>Drag {props.type}</H1>
                  <H1>
                    or browse to <SPAN>select file</SPAN>
                  </H1>
                </MyDiv>
              </MyDiv>
            )}
          </DropzoneBlock>
        )}
      </Dropzone>
    </>
  );
}

export default MyDropzone;

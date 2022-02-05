import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import {
  CloseBtn,
  DropzoneContainer,
  FilesDropzoneBlock,
  OrderIMG,
} from "./files-dropzone.s";
import { ReactComponent as ExportSVG } from "../../assats/icons/export.svg";
import { ReactComponent as CloseSVG } from "../../assats/icons/close.svg";
import { MyDiv } from "../../global-styles/my-div.s";
import axios from "axios";
import { useAlert } from "react-alert";

function FilesDropzone(props) {
  const token = localStorage.getItem("token");
  const alert = useAlert();

  const [file, setFile] = useState([]);
  const [fileRes, setFileRes] = useState(props.images);

  useEffect(() => {
    if (file.length > 0) {
      const img_fd = new FormData();
      img_fd.append("file", file[0]);
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/upload-file`, img_fd, {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        })
        .then((res) => {
          setFileRes([...fileRes, res.data.data]);
        })
        .catch((err) => {
          alert.error(err.message);
        });
    }
  }, [file]);
  useEffect(() => {
    props.set_file(fileRes);
  }, [fileRes]);

  return (
    <DropzoneContainer>
      {fileRes.map((item, index) => (
        <MyDiv width="auto" relative key={index}>
          <OrderIMG src={process.env.REACT_APP_BASE_URL + item} />
          <CloseBtn
            icon
            type="button"
            onClick={() => {
              setFileRes(fileRes.filter((img) => img !== item));
            }}
            text={<CloseSVG />}
          />
        </MyDiv>
      ))}
      <Dropzone
        onDrop={(e) => {
          setFile(e);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <FilesDropzoneBlock
            {...props}
            error={props.error}
            {...getRootProps()}
          >
            <input {...getInputProps()} accept={props.formats} />

            <ExportSVG />
          </FilesDropzoneBlock>
        )}
      </Dropzone>
    </DropzoneContainer>
  );
}

export default FilesDropzone;

import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import MyButton from "../../components/my-button/my-button";
import MyDropzone from "../../components/my-dropzone/my-dropzone";
import MyInput from "../../components/my-input/my-input";
import { MyForm } from "../../global-styles/form.s";
import { MyDiv } from "../../global-styles/my-div.s";
import * as Yup from "yup";
import axios from "axios";
import { useAlert } from "react-alert";
import MyTextarea from "../../components/my-textarea/my-textarea";

function NewsDialog(props) {
  const alert = useAlert();
  const token = localStorage.getItem("token");

  const [image, set_image] = useState();
  const [image_err, set_image_err] = useState(false);

  useEffect(() => {
    if (image) {
      const img_fd = new FormData();
      img_fd.append("file", image);
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/upload-file`, img_fd, {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        })
        .then((res) => {
          formik.setFieldValue("thumbnail", res.data.data);
        })
        .catch((err) => alert.error(err.message));
    }
  }, [image]);

  const formik = useFormik({
    initialValues: {
      content: props.content,
      date: new Date(),
      description: props.newsItem ? props.newsItem.description : "",
      thumbnail: props.newsItem ? props.newsItem.thumbnail : "",
      title: props.newsItem ? props.newsItem.title : "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, "Minimum length is 3 characters")
        .required("Required"),
      description: Yup.string().required("Required"),
    }),
    onSubmit: (val) => {
      if (!val.thumbnail) {
        set_image_err(true);
      } else {
        !props.newsItem
          ? axios
              .post(`${process.env.REACT_APP_BASE_URL}/news`, val, {
                headers: {
                  Authorization: `Bearer ${token.substring(
                    1,
                    token.length - 1
                  )}`,
                },
              })
              .then((res) => {
                alert.success("Car class created.");
                props.close(false);
              })
              .catch((err) => {
                alert.error(err.message);
              })
          : axios
              .put(
                `${process.env.REACT_APP_BASE_URL}/news/${props.newsItem.id}`,
                val,
                {
                  headers: {
                    Authorization: `Bearer ${token.substring(
                      1,
                      token.length - 1
                    )}`,
                  },
                }
              )
              .then((res) => {
                alert.success("Car class edit.");
                props.close(false);
              })
              .catch((err) => {
                alert.error(err.message);
              });
      }
    },
  });

  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyInput
        lite
        label="Title"
        placeholder="Enter your title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.title && formik.errors.title ? true : false}
        errorMessage={formik.touched.title && formik.errors.title}
      />
      <MyDiv height="12px" />
      <MyDropzone
        set_file={(e) => {
          set_image(e);
        }}
        img={{
          url: process.env.REACT_APP_BASE_URL + formik.values.thumbnail,
          type: formik.values.thumbnail ? true : false,
        }}
        type="image"
        formats={[".jpg", ".png"]}
        error={image_err}
      />
      <MyDiv height="12px" />
      <MyTextarea
        width="450px"
        lite
        label="Description"
        placeholder="Enter your description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.description && formik.errors.description ? true : false
        }
        errorMessage={formik.touched.description && formik.errors.description}
      />

      <MyDiv bothSides gap="12px" margin="12px 0 0 0">
        <MyDiv>
          <MyButton
            type="button"
            red
            text="Close"
            onClick={() => props.close(false)}
          />
        </MyDiv>
        <MyDiv>
          <MyButton blue text="Save" />
        </MyDiv>
      </MyDiv>
    </MyForm>
  );
}

export default NewsDialog;

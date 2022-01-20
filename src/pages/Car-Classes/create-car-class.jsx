import React, { useEffect, useState } from "react";
import MyButton from "../../components/my-button/my-button";
import MyCheckbox from "../../components/my-checkbox/my-checkbox";
import MyDropzone from "../../components/my-dropzone/my-dropzone";
import MyInput from "../../components/my-input/my-input";
import { MyForm } from "../../global-styles/form.s";
import { MyDiv } from "../../global-styles/my-div.s";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useAlert } from "react-alert";

function CreateCarClass(props) {
  const alert = useAlert();
  const token = localStorage.getItem("token");

  const [image, set_image] = useState();
  const [image_err, set_image_err] = useState(false);

  const formik = useFormik({
    initialValues: props.dialog_data
      ? props.dialog_data
      : {
          name: "",
          is_lightning: false,
          is_delivery: false,
          delivery_cost: "",
          starting_value: "",
          free_km: "",
          per_km_value: "",
          per_minut_value: "",
          waiting_time: "",
          out_of_branch: "",
          image: "",
        },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, "Maximum length 25 characters")
        .min(3, "Minimum length is 3 characters")
        .required("Required"),
      delivery_cost: Yup.number(),
      starting_value: Yup.number().required("Required"),
      free_km: Yup.number().required("Required"),
      per_km_value: Yup.number().required("Required"),
      per_minut_value: Yup.number().required("Required"),
      waiting_time: Yup.number().required("Required"),
      out_of_branch: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (!values.image) {
        set_image_err(true);
      } else {
        axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/car-class/${
              props.user_id ? `update/${props.user_id}` : "create/"
            }`,
            values,
            {
              headers: {
                Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
              },
            }
          )
          .then((res) => {
            alert.success("Car class created.");
            props.close(false);
          })
          .catch((err) => console.log(err));
      }
    },
  });

  // create img
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
          formik.setFieldValue("image", res.data.data);
        })
        .catch((err) => alert.error(err.message));
    }
  }, [image]);

  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyInput
        lite
        label="Name"
        placeholder="Enter your name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name ? true : false}
        errorMessage={formik.touched.name && formik.errors.name}
      />

      <MyDiv bothSides margin="12px 0">
        <MyDiv>
          <MyCheckbox
            label="Lightning ⚡️"
            id="is_lightning"
            name="is_lightning"
            checked={formik.values.is_lightning}
            onChange={formik.handleChange}
          />
        </MyDiv>
        <MyDiv>
          <MyCheckbox
            label="Delivery"
            id="is_delivery"
            name="is_delivery"
            checked={formik.values.is_delivery}
            onChange={formik.handleChange}
          />
        </MyDiv>
      </MyDiv>

      {formik.values.is_delivery && (
        <MyInput
          type="number"
          lite
          required
          label="Delivery cost"
          placeholder="Delivery cost"
          name="delivery_cost"
          value={formik.values.delivery_cost}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.delivery_cost && formik.errors.delivery_cost
              ? true
              : false
          }
          errorMessage={
            formik.touched.delivery_cost && formik.errors.delivery_cost
          }
        />
      )}

      <MyDiv bothSides gap="12px" margin="12px 0">
        <MyDiv>
          <MyInput
            type="number"
            lite
            label="Starting value"
            placeholder="Starting value"
            name="starting_value"
            value={formik.values.starting_value}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.starting_value && formik.errors.starting_value
                ? true
                : false
            }
            errorMessage={
              formik.touched.starting_value && formik.errors.starting_value
            }
          />
        </MyDiv>
        <MyDiv>
          <MyInput
            type="number"
            lite
            label="Free km"
            placeholder="Free km"
            name="free_km"
            value={formik.values.free_km}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.free_km && formik.errors.free_km ? true : false
            }
            errorMessage={formik.touched.free_km && formik.errors.free_km}
          />
        </MyDiv>
      </MyDiv>

      <MyDiv bothSides gap="12px" margin="12px 0">
        <MyDiv>
          <MyInput
            type="number"
            lite
            label="Per km value"
            placeholder="Per km value"
            name="per_km_value"
            value={formik.values.per_km_value}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.per_km_value && formik.errors.per_km_value
                ? true
                : false
            }
            errorMessage={
              formik.touched.per_km_value && formik.errors.per_km_value
            }
          />
        </MyDiv>
        <MyDiv>
          <MyInput
            type="number"
            lite
            label="Per minut value"
            placeholder="Per minut value"
            name="per_minut_value"
            value={formik.values.per_minut_value}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.per_minut_value && formik.errors.per_minut_value
                ? true
                : false
            }
            errorMessage={
              formik.touched.per_minut_value && formik.errors.per_minut_value
            }
          />
        </MyDiv>
      </MyDiv>

      <MyDiv bothSides gap="12px" margin="12px 0">
        <MyDiv>
          <MyInput
            type="number"
            lite
            label="Waiting time"
            placeholder="Waiting time"
            name="waiting_time"
            value={formik.values.waiting_time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.waiting_time && formik.errors.waiting_time
                ? true
                : false
            }
            errorMessage={
              formik.touched.waiting_time && formik.errors.waiting_time
            }
          />
        </MyDiv>
        <MyDiv>
          <MyInput
            type="number"
            lite
            label="Out of branch"
            placeholder="Out of branch"
            name="out_of_branch"
            value={formik.values.out_of_branch}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.out_of_branch && formik.errors.out_of_branch
                ? true
                : false
            }
            errorMessage={
              formik.touched.out_of_branch && formik.errors.out_of_branch
            }
          />
        </MyDiv>
      </MyDiv>

      <MyDropzone
        set_file={(e) => set_image(e)}
        img={{
          url: `http://135.181.101.63:8080${formik.values.image}`,
          type: formik.values.image ? true : false,
        }}
        type="image"
        formats={[".jpg", ".png"]}
        error={image_err}
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

export default CreateCarClass;

import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import * as Yup from "yup";
import FilesDropzone from "../../components/files-dropzone/files-dropzone";
import MyButton from "../../components/my-button/my-button";
import MyCheckbox from "../../components/my-checkbox/my-checkbox";
import MyInput from "../../components/my-input/my-input";
import { MyForm } from "../../global-styles/form.s";
import { MyDiv } from "../../global-styles/my-div.s";
import { Container } from "../Moderators/moderators.s";

function EditDriver(props) {
  const token = localStorage.getItem("token");
  const alert = useAlert();

  const [car_class, set_car_class] = useState([]);

  const formik = useFormik({
    initialValues: {
      first_name: props.driver.first_name,
      last_name: props.driver.last_name,
      birthdate: new Date(props.driver.birthdate).toLocaleDateString("fr-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      car_model: props.driver.car_model,
      car_color: props.driver.car_color,
      car_number: props.driver.car_number,
      car_images: props.driver.car_images,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Required !"),
      last_name: Yup.string().required("Required !"),
      car_model: Yup.string().required("Required !"),
      car_color: Yup.string().required("Required !"),
      car_number: Yup.string().required("Required !"),
    }),
    onSubmit: (val) => {
      console.log(val);
      const ids = car_class
        .map((item) => (item.checked ? item.id : ""))
        .filter((item) => item.length > 0);
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/driver/update`,
          {
            car_classes: ids,
            car_color: val.car_color,
            car_images: val.car_images,
            car_model: val.car_model,
            car_number: val.car_number,
            birthdate: new Date(val.birthdate).getTime(),
            first_name: val.first_name,
            last_name: val.last_name,
            _id: props.driver._id,
          },
          {
            headers: {
              Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
            },
          }
        )
        .then((res) => {
          alert.success("Driver details edited.");
          props.close(false);
        })
        .catch((err) => alert.success(err.message));
    },
  });

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/car-class/get`,
        { limit: 1000, page: 1 },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        const { car_classes } = props;
        set_car_class(
          res.data.data.data.map((cacr) => ({
            label: cacr.name,
            id: cacr._id,
            checked: car_classes.find((dcr) => cacr._id === dcr) ? true : false,
          }))
        );
      });
  }, []);

  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyDiv line gap="12px">
        <MyInput
          lite
          label="First Name"
          placeholder="Enter your firs name"
          name="first_name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.first_name && formik.errors.first_name ? true : false
          }
          errorMessage={formik.touched.first_name && formik.errors.first_name}
        />
        <MyInput
          lite
          label="Last Name"
          placeholder="Enter your last name"
          name="last_name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.last_name && formik.errors.last_name ? true : false
          }
          errorMessage={formik.touched.last_name && formik.errors.last_name}
        />
      </MyDiv>
      <MyInput
        lite
        type="date"
        label="Birthdate"
        placeholder="Enter your birthdate"
        name="birthdate"
        value={formik.values.birthdate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.birthdate && formik.errors.birthdate ? true : false
        }
        errorMessage={formik.touched.birthdate && formik.errors.birthdate}
      />
      <MyInput
        lite
        label="Car model"
        placeholder="Enter your car model"
        name="car_model"
        value={formik.values.car_model}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.car_model && formik.errors.car_model ? true : false
        }
        errorMessage={formik.touched.car_model && formik.errors.car_model}
      />
      <MyDiv line gap="12px">
        <MyInput
          lite
          label="Car color"
          placeholder="Enter your car color"
          name="car_color"
          value={formik.values.car_color}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.car_color && formik.errors.car_color ? true : false
          }
          errorMessage={formik.touched.car_color && formik.errors.car_color}
        />
        <MyInput
          lite
          label="Car number"
          placeholder="Enter your car number"
          name="car_number"
          value={formik.values.car_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.car_number && formik.errors.car_number ? true : false
          }
          errorMessage={formik.touched.car_number && formik.errors.car_number}
        />
      </MyDiv>
      <FilesDropzone
        formats={[".jpg", ".png"]}
        set_file={(e) => formik.setFieldValue("car_images", e)}
        images={props.driver.car_images}
      />
      <Container>
        {car_class.map((item, index) => (
          <MyCheckbox
            key={index}
            label={item.label}
            id={item.label}
            name={item.label}
            checked={item.checked}
            onChange={(e) => {
              set_car_class(
                car_class.map((elem) =>
                  // console.log(elem.id)
                  elem.label === item.label
                    ? { ...elem, checked: e.target.checked }
                    : elem
                )
              );
            }}
          />
        ))}
      </Container>
      <MyDiv line margin="10px 0 0 0" gap="12px">
        <MyDiv />
        <MyButton text="Save" blue type="submit" />
      </MyDiv>
    </MyForm>
  );
}

export default EditDriver;

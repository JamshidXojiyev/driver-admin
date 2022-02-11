import { useFormik } from "formik";
import React from "react";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import MySelect from "../../components/my-select/my-select";
import { MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import * as Yup from "yup";
import { MyForm } from "../../global-styles/form.s";
import MyMap from "../../components/my-map/my-map";
import { CloseDrawArea } from "../../components/my-map/my-map.s";
import formatLatLng from "../../components/my-map/formatLatLng";
import { useAlert } from "react-alert";
import axios from "axios";

function PlacesDialog(props) {
  const token = localStorage.getItem("token");
  const alert = useAlert();
  console.log(props);
  const formik = useFormik({
    initialValues: {
      location_name: props.value ? props.value.location_name : "",
      type: props.value?.type === "area" ? "Area" : "Point",
      location: props.value ? props.value.location : [],
      paths: props.value ? props.value.paths : [],
    },
    validationSchema: Yup.object({
      location_name: Yup.string().required("Required!"),
    }),
    onSubmit: (val) => {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/place/${
            props.value ? "update" : "create"
          }`,
          props.value
            ? {
                location_name: val.location_name,
                paths: val.paths,
                location: val.location,
                type: val.type === "Point" ? "point" : "area",
                _id: props.value._id,
              }
            : {
                location_name: val.location_name,
                paths: val.paths,
                type: val.type === "Point" ? "point" : "area",
                location: val.location,
              },
          {
            headers: {
              Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
            },
          }
        )
        .then(() => {
          props.close(false);
          alert.success("Places create.");
        })
        .catch((err) => {
          alert.error(err.data.message);
        });
    },
  });
  console.log(formik.values);

  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyDiv bothSides margin="0 0 18px 0">
        <MyDiv line margin="0 0 18px 0">
          <MenuName borderNone onClick={() => props.close(false)}>
            <span>&#8249;</span> Places report
          </MenuName>
        </MyDiv>
        <MyButton width="120px" blue text={"Save"} />
      </MyDiv>
      <MyDiv margin="0 0 18px 0" lineBottom gap="16px">
        <MyInput
          lite
          label="Location Name"
          placeholder="Enter your location name"
          name="location_name"
          value={formik.values.location_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.location_name && formik.errors.location_name
              ? true
              : false
          }
          errorMessage={
            formik.touched.location_name && formik.errors.location_name
          }
        />
        <MySelect
          roundBorder
          width="180px"
          value={formik.values.type}
          options={["Point", "Area"]}
          onChange={(e) => {
            formik.setFieldValue("location", []);
            formik.setFieldValue("type", e.target.value);
          }}
        />
      </MyDiv>
      <MyDiv relative>
        {formik.values.type === "Point" && <CloseDrawArea />}
        <MyMap
          type={formik.values.type}
          marker={
            formik.values.location?.latitude
              ? {
                  lat: formik.values?.location?.latitude,
                  lng: formik.values?.location?.longitude,
                }
              : [0,0]
          }
          latlng={(e) => {
            formik.setFieldValue(
              "location",
              e && formatLatLng({ value: [e] })[0]
            );
          }}
          setPolygon={(e) => {
            e && formik.setFieldValue("paths", e);
          }}
          polygon={
            formik.values.type === "Area" && formik.values.paths
              ? formik.values.paths
              : []
          }
          width="100%"
          height="calc(100vh - 290px)"
        />
      </MyDiv>
    </MyForm>
  );
}

export default PlacesDialog;

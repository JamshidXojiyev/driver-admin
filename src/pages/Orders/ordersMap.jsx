import React, { useState, useEffect } from "react";
import { MapContainerStyle } from "../../components/my-map/my-map.s";
import { MyDiv } from "../../global-styles/my-div.s";
import { useHistory } from "react-router";
import axios from "axios";
import SelectSearch from "../../components/select-search/select-search";
import { FullscreenControl } from "react-leaflet-fullscreen";
import {
  LayersControl,
  MapConsumer,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import GoogleLayer from "react-leaflet-google-v2/lib/GoogleLayer";
import { Marker } from "react-leaflet";
import L from "leaflet";
import { SubmitBtn } from "./orders.s";
import { Curtain } from "./orders.s";

function OrdersMap(props) {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [searchLocation, setSearchLocation] = useState({
    location_name: "",
    values: [],
  });
  const [position, setPosition] = useState([0, 0]);
  const icon = L.icon({
    iconUrl: "https://developers.google.cn/maps/images/maps-icon.svg?hl=ru",
    iconSize: [48, 48],
  });

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/places/search`,
        { search: searchLocation.location_name },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        setSearchLocation({ ...searchLocation, values: res.data.data });
      })
      .catch((err) => {
        if (err.response.data.code == 401) {
          localStorage.removeItem("token");
          history.push("/login");
        }
      });
  }, []);

  const estimate_price_from = (e) => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/place/get-by-location`,
        { latitude: e.latitude, longitude: e.latitude },
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/ride/estimate-price-from`,
            {
              latitude: e.latitude,
              longitude: e.longitude,
              location_name: e.location_name
                ? e.location_name
                : res.data.data.location_name,
            },
            {
              headers: {
                Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
              },
            }
          )
          .then((response) => {
            props.set_start_location({
              latitude: e.latitude,
              longitude: e.longitude,
              location_name: res.data.data.location_name,
            });
            props.set_estimate_price_from(response.data.data);
          });
      })
      .catch((err) => {
        if (err.response.data.code == 401) {
          localStorage.removeItem("token");
          history.push("/login");
        }
      });
  };
  return (
    <MyDiv relative>
      {props.type && <Curtain />}
      <MyDiv bothSides margin="0 0 18px 0">
        <MyDiv />
        <SelectSearch
          disabled={props.type}
          width="300px"
          name="location"
          placeholder="Enter a location"
          values={searchLocation.values.map((item) => item.location_name)}
          onChange={(e) => {
            setSearchLocation({
              ...searchLocation,
              location_name: e.target.value,
            });
            searchLocation.values.filter((item) => {
              item.location_name == e.target.value && setPosition(item);
            });
          }}
        />
      </MyDiv>
      <MyDiv margin="0 0 12px 0" relative>
        <SubmitBtn
          onClick={() => {
            if (position.latitude && position.longitude) {
              estimate_price_from(position);
            }
          }}
        >
          Next
        </SubmitBtn>
        <MapContainerStyle
          center={[42.126550836604196, 64.38251097818424]}
          zoom={6}
          maxZoom="18"
          minZoom="1"
          height="calc(100vh - 185px)"
        >
          <MapConsumer>
            {(map) => {
              map.on("click", function (e) {
                setPosition({
                  latitude: e.latlng.lat,
                  location_name: "",
                  longitude: e.latlng.lng,
                });
              });
              if (JSON.stringify(position) !== JSON.stringify([0, 0])) {
                map.setView([position.latitude, position.longitude], 7);
              }
              return null;
            }}
          </MapConsumer>
          {JSON.stringify(position) !== JSON.stringify([0, 0]) && (
            <Marker
              icon={icon}
              position={[position.latitude, position.longitude]}
            />
          )}
          <FullscreenControl />
          <LayersControl>
            <LayersControl.BaseLayer checked name="Open Street Map">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="Google map">
              <GoogleLayer
                googlekey="AIzaSyBZiaoR6LhBci4bSDYJynj54hVLYZgm6pA"
                maptype="ROADMAP"
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="Google sputnik map">
              <TileLayer url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
            </LayersControl.BaseLayer>
          </LayersControl>
        </MapContainerStyle>
      </MyDiv>
    </MyDiv>
  );
}

export default OrdersMap;

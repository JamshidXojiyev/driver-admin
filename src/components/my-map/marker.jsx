import React, { useState } from "react";
import L from "leaflet";
import { Marker, useMapEvents } from "react-leaflet";

function LocationMarker(props) {
  const [position, setPosition] = useState(props.mark ? props.mark : null);
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      props.latlng(e.latlng);
    },
  });
  const icon = L.icon({
    iconUrl: "https://developers.google.cn/maps/images/maps-icon.svg?hl=ru",
    iconSize: [48, 48],
  });

  return position === null ? null : <Marker icon={icon} position={position} />;
}

function MyMarker(props) {
  console.log(props.marker)
  return (
    <>
      <LocationMarker mark={props?.marker} latlng={(e) => props?.latlng(e)} />;
    </>
  );
}

export default MyMarker;

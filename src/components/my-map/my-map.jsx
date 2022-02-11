import React, { useState } from "react";
import { LayersControl, Polygon, TileLayer } from "react-leaflet";
import GoogleLayer from "react-leaflet-google-v2/lib/GoogleLayer";
import { MapContainerStyle } from "./my-map.s";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "leaflet-draw/dist/leaflet.draw.css";
import MyDraw from "./my-draw";
import MyMarker from "./marker";
import formatLatitudeLongitude from "./formatLatitudeLongitude";

function MyMap(props) {
  const [pol, setPol] = useState(false);
  console.log(props.marker)
  return (
    <>
      <MapContainerStyle
        {...props}
        center={
          props.center ? props.center : [42.126550836604196, 64.38251097818424]
        }
        zoom={props.zoom ? props.zoom : 6}
        maxZoom="18"
        minZoom="1"
      >
        <FullscreenControl />
        {props.type === "Point" && (
          // marker
          <MyMarker marker={props?.marker} latlng={(e) => props.latlng(e)} />
        )}
        {/* draw */}
        <MyDraw
          setPolygon={(e) => {
            props.setPolygon(e);
            setPol(true);
          }}
        />
        {pol && props.polygon && (
          <Polygon
            pathOptions={{ color: "#ff00005a" }}
            positions={formatLatitudeLongitude({
              value: props.polygon,
            })}
          />
        )}
        <LayersControl>
          <LayersControl.BaseLayer checked name="Google map">
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
    </>
  );
}

export default MyMap;

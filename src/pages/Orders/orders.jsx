import React from "react";
import MyCheckbox from "../../components/my-checkbox/my-checkbox";
import MyInput from "../../components/my-input/my-input";
import MySelect from "../../components/my-select/my-select";
import MyTextarea from "../../components/my-textarea/my-textarea";
import { MyDiv } from "../../global-styles/my-div.s";
import { GoogleLayer } from "react-leaflet-google-v2";
import { MyMapContainer } from "./orders.s";
import { LayersControl, TileLayer } from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";

function Orders(props) {
  return (
    <>
      <MyDiv width="100%" height="320px">
        <MyMapContainer
          center={[41.29965244731724, 69.24603818681436]}
          zoom={12}
        >
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
          <FullscreenControl />
        </MyMapContainer>
      </MyDiv>
      <MyDiv bothSides gap="28px">
        <MyDiv block >
          <MyDiv bothSides gap="20px" margin="0 0 18px 0">
            <MyDiv width="48%">
              <MyInput
                label="Phone number:"
                placeholder="Enter your phone number"
                lite
                filter
                mask="+\9\98 (99) 999-99-99"
                changeVal={(e) => console.log(e)}
              />
            </MyDiv>
            <MyDiv width="48%">
              <MySelect
                roundBorder
                label="Payment:"
                options={["Cash", "test2", "test3"]}
                onChange={(e) => console.log(e.target.value)}
              />
            </MyDiv>
          </MyDiv>
          <MyDiv margin="0 0 18px 0">
            <MyCheckbox label="I agree to the terms and conditions" />
          </MyDiv>
          <MyTextarea label="Comment:" />
        </MyDiv>
        <MyDiv block height="277px">
          <h1>Lorem, ipsum.</h1>
        </MyDiv>
      </MyDiv>
    </>
  );
}

export default Orders;

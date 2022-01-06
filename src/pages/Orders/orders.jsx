import MyCheckbox from "../../components/my-checkbox/my-checkbox";
import MyInput from "../../components/my-input/my-input";
import MySelect from "../../components/my-select/my-select";
import MyTextarea from "../../components/my-textarea/my-textarea";
import { MyDiv } from "../../global-styles/my-div.s";
import { GoogleLayer } from "react-leaflet-google-v2";
import { MyMapContainer, Block, SumBlock, Disabled } from "./orders.s";
import { LayersControl, Marker, TileLayer } from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import MyRadio from "../../components/my-radio/my-radio";
import L from "leaflet";
import { useState } from "react";

function Orders(props) {
  const [latlng, setLatlng] = useState([]);
  const [step, setStep] = useState(1);
  const icon = L.icon({
    iconUrl: "https://developers.google.cn/maps/images/maps-icon.svg?hl=ru",
    iconSize: [48, 48],
  });
  const testData = [
    { class: "Start", price: "100 000 SUM" },
    { class: "Comfort", price: "80 000 SUM" },
    { class: "Standard", price: "60 000 SUM" },
    { class: "Labo", price: "40 000 SUM" },
  ];
  console.log(step);

  return (
    <>
      <MyDiv relative width="100%" margin="0 0 20px 0">
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
          <Marker
            eventHandlers={{
              click: (e) => {
                setLatlng(e.latlng);
                setStep(2);
              },
            }}
            position={[41.29965244731724, 69.24603818681436]}
            icon={icon}
            draggable={true}
          />
          <FullscreenControl />
        </MyMapContainer>
        <Disabled disabled={step !== 1} />
      </MyDiv>

      <MyDiv bothSides gap="28px">
        <MyDiv relative block>
          <Disabled disabled={step !== 2} />
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

        <MyDiv relative block height="277px" padding="0">
          <Disabled disabled={step !== 3} />
          <Block bg>
            <MyDiv center>Class</MyDiv>
            <MyDiv center>Price</MyDiv>
          </Block>
          {testData.map((item, index) => (
            <Block key={index}>
              <MyDiv center padding="0 32px">
                <MyRadio id={item.class} name="price" label={item.class} />
              </MyDiv>
              <MyDiv center padding="0 22px">
                <SumBlock>{item.price}</SumBlock>
              </MyDiv>
            </Block>
          ))}
        </MyDiv>
      </MyDiv>
    </>
  );
}

export default Orders;

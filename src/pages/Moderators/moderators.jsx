import React from "react";
import {
  H1,
  H2,
  ModeratorsStyle,
  UserBlock,
  UserData,
  UserSettings,
  UsetImg,
} from "./moderators.s";
import { MyDiv } from "../../global-styles/my-div.s";
import { ReactComponent as ThreePointIcon } from "../../assats/icons/three-point.svg";

function Moderators(props) {
  return (
    <>
      <ModeratorsStyle>
        <UserBlock>
          <UserSettings icon text={<ThreePointIcon />} />
          <MyDiv center>
            <UsetImg src="https://i1.sndcdn.com/avatars-si5mohNGXHKIGaVN-yJQm4Q-t500x500.jpg" />
            <H1>Nezuko Kamado</H1>
            <H2>English, Math</H2>
            <MyDiv bg="#F4F5F7" height="1px" margin="16px 0" />
            <UserData>+998 (99) 436-46-15</UserData>
            <UserData>@nezuko_amado</UserData>
            <UserData>Yakkasaroy branch</UserData>
          </MyDiv>
        </UserBlock>
      </ModeratorsStyle>
    </>
  );
}

export default Moderators;

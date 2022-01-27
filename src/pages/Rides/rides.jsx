import React, { useState } from "react";
import MyInput from "../../components/my-input/my-input";
import RidersGet from "../../components/rides-get/rides-get";
import { ActivUser, MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";

function Rides(props) {
  return (
    <>
      <MyDiv line margin="0 0 18px 0">
        <MenuName>Knowledge base</MenuName>
        <ActivUser>Active drivers: 10</ActivUser>
        <MyDiv width="230px">
          <MyInput search placeholder="Search" />
        </MyDiv>
      </MyDiv>
      <RidersGet rider_id="" />
    </>
  );
}

export default Rides;

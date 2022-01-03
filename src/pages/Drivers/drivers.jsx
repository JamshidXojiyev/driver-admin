import React from "react";
import MyInput from "../../components/my-input/my-input";
import MyTable from "../../components/my-table/my-table";
import { ActivUser, MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import { DriversData } from "./driversData";

function Drivers(props) {
  return (
    <>
      <MyDiv line margin="0 0 18px 0">
        <MenuName>Drivers list</MenuName>
        <ActivUser>Active drivers: 10</ActivUser>
        <MyDiv width="230px">
          <MyInput search placeholder="Search" />
        </MyDiv>
      </MyDiv>
      <MyTable data={DriversData} />
    </>
  );
}

export default Drivers;

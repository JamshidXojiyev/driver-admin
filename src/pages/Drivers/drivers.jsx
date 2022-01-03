import React from "react";
import MyInput from "../../components/my-input/my-input";
import MySelect from "../../components/my-select/my-select";
import MyTable from "../../components/my-table/my-table";
import { ActivUser, MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import { DriversData } from "./driversData";

function Drivers(props) {
  return (
    <>
      <MyDiv line margin="0 0 18px 0">
        <MyDiv line>
          <MenuName>Drivers list</MenuName>
          <ActivUser>Active drivers: 10</ActivUser>
          <MyDiv width="230px">
            <MyInput search placeholder="Search" />
          </MyDiv>
        </MyDiv>
        <MySelect
          recktangleBorder
          width="230px"
          options={["Search by Name", "test2", "test3"]}
        />
      </MyDiv>
      <MyTable data={DriversData} />
    </>
  );
}

export default Drivers;

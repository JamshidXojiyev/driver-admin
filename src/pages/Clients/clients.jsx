import React from "react";
import MyTable from "../../components/my-table/my-table";
import { ActivUser, MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import { ClientsData } from "./clientsData";
import MyInput from "../../components/my-input/my-input";
function Clients(props) {
  return (
    <>
      <MyDiv line margin="0 0 18px 0">
        <MenuName>Drivers list</MenuName>
        <ActivUser>Active drivers: 10</ActivUser>
        <MyDiv width="230px">
          <MyInput search placeholder="Search" />
        </MyDiv>
      </MyDiv>
      <MyTable data={ClientsData} total="50" pageLimit="10" />
    </>
  );
}

export default Clients;

import React, { useState } from "react";
import MyInput from "../../components/my-input/my-input";
import MyTabs from "../../components/my-tabs/my-tabs";
import { ActivUser, MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import Completed from "./tabs/completed";

function Rides(props) {
  const [tab, setTab] = useState("Completed");
  const tabs = ["Completed", "Pre cancelled"];
  return (
    <>
      <MyDiv line margin="0 0 18px 0">
        <MenuName>Knowledge base</MenuName>
        <ActivUser>Active drivers: 10</ActivUser>
        <MyDiv width="230px">
          <MyInput search placeholder="Search" />
        </MyDiv>
      </MyDiv>
      <MyTabs todoItem={(e) => setTab(e)} list={tabs} />
      <MyDiv margin="24px 0 0 0">
        {tab === "Completed" ? <Completed /> : <h1>404</h1>}
      </MyDiv>
    </>
  );
}

export default Rides;

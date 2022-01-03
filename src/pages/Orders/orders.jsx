import React from "react";
import MyInput from "../../components/my-input/my-input";
import MySelect from "../../components/my-select/my-select";
import { MyDiv } from "../../global-styles/my-div.s";

function Orders(props) {
  return (
    <>
      <MyDiv width="100%" height="298px"></MyDiv>
      <MyDiv block list>
        <MyDiv lineBottom bothSides width="700px">
          <MyDiv>
            <MyInput
              width="320px"
              label="PHONE NUMBER"
              placeholder="Enter your phone number"
              lite
              filter
              mask="+\9\98 (99) 999-99-99"
              // changeVal={(e) => console.log(e)}
            />
          </MyDiv>
          <MyDiv>
            <MySelect
              label="PHONE NUMBER"
              width="320px"
              options={["Cash", "test2", "test3"]}
              onChange={(e) => console.log(e.target.value)}
            />
          </MyDiv>
        </MyDiv>
      </MyDiv>
    </>
  );
}

export default Orders;

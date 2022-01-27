import React, { useState } from "react";
import { ReactComponent as FileIcon } from "../../assats/icons/file.svg";
import { MyDiv } from "../../global-styles/my-div.s";
import { ItemBlock, TabsStyle, ViewIcoin } from "./my-tabs.s";
function MyTabs(props) {
  const [activ, setActiv] = useState(0);
  const styleData = [
    {
      color: "#3366FF",
      bg: "rgba(51, 102, 255, 0.2)",
    },
    {
      color: "#9EFF00",
      bg: "rgba(158, 255, 0, 0.2)",
    },
    {
      color: "#FF9533",
      bg: "rgba(255, 149, 51, 0.2)",
    },
    {
      color: "#39DE54",
      bg: "rgba(57, 222, 84, 0.2)",
    },
    {
      color: "#FF333F",
      bg: "rgba(255, 51, 63, 0.2)",
    },
  ];

  return (
    <MyDiv relative>
      <TabsStyle>
        {props.list.map((item, index) => (
          <ItemBlock
            activ={item.id == activ}
            onClick={() => {
              props.todoItem(item.id);
              setActiv(item.id);
            }}
            key={index}
            color={styleData[index % styleData.length].color}
            bg={styleData[index % styleData.length].bg}
          >
            <FileIcon />
            {item.value}
            <ViewIcoin />
          </ItemBlock>
        ))}
      </TabsStyle>
    </MyDiv>
  );
}

export default MyTabs;

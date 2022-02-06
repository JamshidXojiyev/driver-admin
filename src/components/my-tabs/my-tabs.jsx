import React, { useState } from "react";
import { ItemBlock, TabsStyle, ViewIcoin } from "./my-tabs.s";
function MyTabs(props) {
  const [activ, setActiv] = useState(0);

  return (
    <TabsStyle>
      {props.list.map((item, index) => (
        <ItemBlock
          activ={item.id == activ}
          onClick={() => {
            props.todoItem(item.id);
            setActiv(item.id);
          }}
          key={index}
        >
          {item.value}
          <ViewIcoin />
        </ItemBlock>
      ))}
    </TabsStyle>
  );
}

export default MyTabs;

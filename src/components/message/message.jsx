import React, { useEffect, useState } from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import MyButton from "../my-button/my-button";
import {
  ChatsBlock,
  ChatStyle,
  Message,
  MessageData,
  MessageStyle,
  Title,
} from "./message.s";
import { ReactComponent as CloseIcon } from "../../assats/icons/close.svg";
import { UserImage, UserName, UserPhone } from "../../global-styles/user.s";
function MyMessage(props) {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    props.close(open);
  }, [open]);
  return (
    <MessageStyle type={open}>
      <MyDiv bothSides padding="16px 18px 0">
        <MyDiv line>
          <UserImage
            chat
            src="https://klike.net/uploads/posts/2020-09/1601453229_1.jpg"
          />
          <MyDiv>
            <UserName chat>Hinata Hyuga</UserName>
            <UserPhone chat>(721)-723-1807</UserPhone>
          </MyDiv>
        </MyDiv>
        <MyButton onClick={() => setOpen(!open)} icon text={<CloseIcon />} />
      </MyDiv>
      <ChatsBlock>
        {props.data.map((item, index) => (
          <ChatStyle key={index}>
            <Title>{item.state}</Title>
            <Message>Driver name: {item.driver_name}</Message>
            <Message>Driver phone: {item.driver_phone}</Message>
            <MessageData>
              {new Date(item.date).toLocaleDateString("ru")}
            </MessageData>
          </ChatStyle>
        ))}
      </ChatsBlock>
    </MessageStyle>
  );
}

export default MyMessage;

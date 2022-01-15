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
        <ChatStyle>
          <Title>Created</Title>
          <Message>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            itaque.
          </Message>
          <MessageData>04.12.2021 20:30:37</MessageData>
        </ChatStyle>

        <ChatStyle>
          <Title>Created</Title>
          <Message>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            voluptatem harum nostrum facilis libero. Doloremque dicta ratione,
            necessitatibus enim dignissimos recusandae in illum sint corporis
            repellendus placeat pariatur molestias nisi.
          </Message>
          <MessageData>04.12.2021 20:30:37</MessageData>
        </ChatStyle>

        <ChatStyle>
          <Title>Created</Title>
          <Message>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            maiores rem sunt quidem error magnam amet.
          </Message>
          <MessageData>04.12.2021 20:30:37</MessageData>
        </ChatStyle>

        <ChatStyle>
          <Title>Created</Title>
          <Message>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            voluptatem, provident, minus delectus magni ab excepturi ducimus
            aperiam possimus saepe hic laudantium dignissimos atque!
          </Message>
          <MessageData>04.12.2021 20:30:37</MessageData>
        </ChatStyle>
      </ChatsBlock>
    </MessageStyle>
  );
}

export default MyMessage;

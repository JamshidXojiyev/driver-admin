import React, { useEffect, useState } from "react";
import { H1, ModeratorsStyle, UserBlock, UsetImg } from "./moderators.s";
import { MyDiv } from "../../global-styles/my-div.s";
import { MenuName } from "../../global-styles/body-title";
import MyInput from "../../components/my-input/my-input";
import axios from "axios";
import MyButton from "../../components/my-button/my-button";
import MyDialog from "../../components/dialog/dialog";
import ModeratorDialog from "./moderator-dialog";

function Moderators(props) {
  const token = localStorage.getItem("token");

  const [moderators, setModerators] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [dialogData, setDialogData] = useState();
  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/moderators/get`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          },
        }
      )
      .then((res) => {
        setModerators(res.data.data);
      });
  }, [dialog]);
  return (
    <>
      <MyDiv bothSides>
        <MyDiv line margin="0 0 18px 0">
          <MenuName borderNone>Moderators list</MenuName>
          {/* <MyInput
            search
            width="220px"
            placeholder="Search"
            // onChange={(e) => setSearch(e.target.value)}
          /> */}
        </MyDiv>
        <MyButton
          width="200px"
          blue
          text={"+ Create moderator"}
          onClick={() => {
            setDialog(true);
            setDialogData();
          }}
        />
      </MyDiv>
      <ModeratorsStyle>
        {moderators.map((item, index) => (
          <UserBlock
            key={index}
            onClick={() => {
              setDialogData(item);
              setDialog(true);
            }}
          >
            <MyDiv center gap="12px">
              <UsetImg />
              <H1>{item.username}</H1>
            </MyDiv>
          </UserBlock>
        ))}
      </ModeratorsStyle>
      {dialog && (
        <MyDialog
          title="Clients Information"
          body={
            <ModeratorDialog
              data={dialogData}
              close={(e) => {
                setDialog(e);
                setDialogData();
              }}
            />
          }
          close={(e) => {
            setDialog(e);
            setDialogData();
          }}
        />
      )}
    </>
  );
}

export default Moderators;

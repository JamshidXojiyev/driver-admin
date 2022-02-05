import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { MenuName } from "../../global-styles/body-title";
import { MyDiv } from "../../global-styles/my-div.s";
import MyButton from "../../components/my-button/my-button";
import MyDialog from "../../components/dialog/dialog";
import NewsDialog from "./news-dialog";

function CreateNews(props) {
  const editorRef = useRef(null);
  const [l, setl] = useState(false);
  const config = {
    readonly: false,
    height: 400,
  };
  const [dialog, setDialog] = useState(false);
  const [textEditor, setTextEditor] = useState("");

  useEffect(() => {
    editorRef.current.value = props.newsItem.content || "";
    setl(true);
  }, []);

  return (
    <>
      <MyDiv bothSides margin="0 0 18px 0">
        <MyDiv line margin="0 0 18px 0">
          <MenuName onClick={() => props.close(false)} borderNone>
            <span>&#8249;</span> News report
          </MenuName>
        </MyDiv>

        <MyDiv lineRight gap="20px">
          <MyButton
            width="200px"
            blue
            text={"Next step"}
            onClick={() => {
              setTextEditor(editorRef.current.value);
              setDialog(true);
            }}
          />
        </MyDiv>
      </MyDiv>
      <MyDiv></MyDiv>
      <MyDiv>
        <JoditEditor ref={editorRef} config={config} />
      </MyDiv>
      {dialog && (
        <MyDialog
          title="Create News"
          body={
            <NewsDialog
              newsItem={props.newsItem}
              content={textEditor}
              close={(e) => {
                setDialog(e);
                props.close(e);
              }}
            />
          }
          close={(e) => {
            setDialog(e);
          }}
        />
      )}
    </>
  );
}

export default CreateNews;

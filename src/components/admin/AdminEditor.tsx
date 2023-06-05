import React from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { client } from "../../axios/axios";
import { styled } from "styled-components";

const editorToolbarSetting = [
  ["heading", "bold", "italic", "strike"], // 헤딩, 볼드, 이탤릭, 취소선
  ["hr"], // 수평선
  ["ul", "ol", "task"], // 순서없는 리스트, 순서있는 리스트, 체크리스트
  ["table", "link"], // 표, 링크
  ["image"], // 이미지
];
const AdminEditor = () => {
  const [title, setTitle] = React.useState("");
  const editorRef = React.useRef<any>();
  const handleEditorSave = async () => {
    // html로 가져오는 것 getHTML() / markdown으로 가져오는 것 getMarkdown()
    const html = editorRef.current.getInstance().getHTML(); // 에디터에서 작성한 HTML 가져오기
    let img;
    const value = html;
    if (value.includes("<img")) img = `<img${value.split("<img")[1].split(">")[0]}>`;

    localStorage.setItem("img", html);
    client.post("/media", { data: { html, img, title } }).then((res) => {
      if (res?.status === 200) alert("저장되었습니다.");
      setTitle("");
      editorRef.current.getInstance().setMarkdown("");
    });
  };
  return (
    <StEditor.Box>
      <StEditor.Title>게시글 작성</StEditor.Title>
      <StEditor.Label htmlFor="title">제목</StEditor.Label>
      <StEditor.TitleInput
        type="text"
        id="title"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
        maxLength={20}
        placeholder="20자 내로 작성하세요."
      />
      <Editor
        height="600px"
        ref={editorRef}
        initialValue=" "
        placeholder="글을 작성해주세요."
        previewStyle="vertical"
        initialEditType="wysiwyg"
        hideModeSwitch={true}
        useCommandShortcut={true}
        toolbarItems={editorToolbarSetting}
      />
      <StEditor.BtnBox>
        <StEditor.Btn onClick={handleEditorSave}>저장하기</StEditor.Btn>
      </StEditor.BtnBox>
    </StEditor.Box>
  );
};

export default AdminEditor;
const StEditor = {
  Box: styled.div`
    width: 100%;
    padding: 30px;
  `,
  Title: styled.p`
    font-family: "pretendard";
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    padding: 20px;
  `,
  BtnBox: styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    gap: 20px;
  `,
  Btn: styled.button`
    width: 100px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: #aaa;
    color: white;
    font-family: "pretendard";
    font-size: 16px;
  `,
  Label: styled.label`
    font-family: "pretendard";
    font-size: 20px;
    padding: 20px;
    font-weight: bold;
  `,
  TitleInput: styled.input`
    width: 80%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 20px 0 30px 0;
    padding: 0 10px;
  `,
};

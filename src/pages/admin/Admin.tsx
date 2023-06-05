import React from "react";
import AdminEditor from "../../components/admin/AdminEditor";
import { styled } from "styled-components";
import AdminContact from "../../components/admin/AdminContact";

const Admin: React.FC = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [input, setInput] = React.useState({ id: "", password: "" });
  const [menubar, setMenubar] = React.useState<"media" | "contact">("media");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  // 로그인 핸들러
  const loginHandler = () => {
    if (input.id === process.env.REACT_APP_ADMIN_ID && input.password === process.env.REACT_APP_ADMIN_PW) {
      setLoggedIn(true);
      alert("로그인 되었습니다.");
    } else {
      alert("아이디 혹은 비밀번호가 틀렸습니다.");
    }
  };

  // 홈으로 가기 핸들러
  const goHomeHandler = () => {
    window.open(process.env.REACT_APP_CLIENT_SERVER, "", `width=1920px,height=1000px,left=0,top=0`);
  };
  return (
    <StAdmin.Container>
      <StAdmin.Header>
        <StAdmin.HeaderBtn>관리자 페이지</StAdmin.HeaderBtn>
        <StAdmin.HeaderBtn onClick={goHomeHandler}>HOME</StAdmin.HeaderBtn>
      </StAdmin.Header>
      {loggedIn ? (
        <StAdmin.ContentBox>
          <StAdmin.SideBar>
            <StAdmin.SideMenu onClick={() => setMenubar("media")}>미디어 글 작성</StAdmin.SideMenu>
            <StAdmin.SideMenu onClick={() => setMenubar("contact")}>문의 확인</StAdmin.SideMenu>
          </StAdmin.SideBar>
          <StAdmin.ContentInnerBox>
            {menubar === "media" && <AdminEditor />}
            {menubar === "contact" && <AdminContact />}
          </StAdmin.ContentInnerBox>
        </StAdmin.ContentBox>
      ) : (
        <StAdmin.ContentBox>
          <StAdmin.LoginBox>
            <StAdmin.Input
              type="text"
              value={input.id}
              name="id"
              onChange={inputChangeHandler}
              placeholder="아이디를 입력하세요."
            />
            <StAdmin.Input
              type="password"
              value={input.password}
              name="password"
              onChange={inputChangeHandler}
              placeholder="비밀번호를 입력하세요."
            />
            <button onClick={loginHandler}>로그인</button>
          </StAdmin.LoginBox>
        </StAdmin.ContentBox>
      )}
    </StAdmin.Container>
  );
};

export default Admin;
const StAdmin = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid grey;
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid grey;
    background-color: black;
    color: white;
  `,
  HeaderBtn: styled.span`
    font-family: "pretendard";
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  `,
  ContentBox: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 800px;
  `,
  ContentInnerBox: styled.div`
    display: flex;
    width: 80%;
  `,
  LoginBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    gap: 20px;
    padding: 30px;
    background-color: whitesmoke;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin-top: 40px;
  `,
  Input: styled.input`
    width: 340px;
    height: 30px;
    border: 0.5px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    :visited {
      border: 1px solid blue;
    }
  `,
  SideBar: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 20%;
    height: 100%;
    padding: 20px;
    border-right: 1px solid grey;
    background-color: grey;
  `,
  SideMenu: styled.span`
    width: 80%;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    margin: 0 auto;
    border-radius: 10px;
    padding: 10px;
    background-color: whitesmoke;
    cursor: pointer;
    &:hover {
      background-color: black;
      color: white;
    }
  `,
};

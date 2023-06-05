import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import AdminContactList from "./AdminContactList";
const AdminDetailModal: React.FC<{ el: any; i: number }> = ({ el, i }) => {
  const [modal, setModal] = React.useState(false);
  const disabledScroll = () => {
    document.body.style.overflowY = "hidden";
  };
  const enabledScroll = () => {
    document.body.style.overflowY = "auto";
  };
  React.useEffect(() => {
    if (modal) disabledScroll();
    return () => {
      enabledScroll();
    };
  }, [modal]);
  return (
    <>
      {modal && (
        <>
          {ReactDOM.createPortal(
            <>
              <StReportModal.Container>
                <StReportModal.BtnBox>
                  <StReportModal.IdxBox>
                    <label>글 번호 :</label>
                    <span>{i + 1}</span>
                  </StReportModal.IdxBox>
                  <StReportModal.Closer onClick={() => setModal(false)}>닫기</StReportModal.Closer>
                </StReportModal.BtnBox>
                <StReportModal.ContentBox>
                  <StReportModal.UpperBox>
                    <StReportModal.LowerBox>
                      <StReportModal.CompanyBox>
                        <label>회사명</label>
                        <span>{el.address}</span>
                      </StReportModal.CompanyBox>
                      <StReportModal.NameBox>
                        <label>이름</label>
                        <span>{el.name}</span>
                      </StReportModal.NameBox>
                      <StReportModal.TelBox>
                        <label>연락처</label>
                        <span>{el.phoneNumber}</span>
                      </StReportModal.TelBox>
                    </StReportModal.LowerBox>
                    <StReportModal.LowerBox>
                      <StReportModal.EmailBox>
                        <label>메일 주소</label>
                        <p>{el.email}</p>
                      </StReportModal.EmailBox>
                      <StReportModal.HomePageBox>
                        <label>홈페이지 주소</label>
                        <p>{el.homePageAddress}</p>
                      </StReportModal.HomePageBox>
                    </StReportModal.LowerBox>
                  </StReportModal.UpperBox>
                  <StReportModal.ContentLabel>문의내용</StReportModal.ContentLabel>
                  <StReportModal.Content>{el.detail}</StReportModal.Content>
                </StReportModal.ContentBox>
              </StReportModal.Container>
              <StReportModal.BackDrop onClick={() => setModal(false)} />
            </>,
            document.querySelector("#root") as HTMLElement
          )}
        </>
      )}
      <AdminContactList el={el} i={i} setModal={() => setModal(true)} />
    </>
  );
};

export default React.memo(AdminDetailModal);
export const StReportModal = {
  Container: styled.div`
    position: fixed;
    z-index: 140;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80vh;
    border: 8px solid white;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
    background-color: whitesmoke;
  `,
  BtnBox: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
  `,
  Closer: styled.span`
    cursor: pointer;
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 10px;
  `,
  ContentBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    height: 100%;
    overflow-y: auto;
  `,
  UpperBox: styled.div``,
  LowerBox: styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    border: 1px solid grey;
    margin: 0 auto;
    label {
      border-right: 1px solid grey;
    }
  `,
  IdxBox: styled.div`
    width: 10%;
    display: flex;
    gap: 10px;
  `,
  NameBox: styled.div`
    width: 30%;
    display: flex;
    gap: 10px;
    border-right: 1px solid grey;
  `,
  CompanyBox: styled.div`
    width: 40%;
    display: flex;
    gap: 10px;
    border-right: 1px solid grey;
  `,
  TelBox: styled.div`
    width: 30%;
    display: flex;
    gap: 10px;
  `,
  EmailBox: styled.div`
    width: 50%;
    display: flex;
    gap: 10px;
  `,
  HomePageBox: styled.div`
    width: 50%;
    display: flex;
    gap: 10px;
  `,
  BackDrop: styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 120;
    background-color: rgba(0, 0, 0, 0.5);
  `,
  ContentLabel: styled.div`
    width: 90%;
    margin: 0 auto;
  `,
  Content: styled.div`
    width: 90%;
    margin: 0 auto;
    border: 1px solid grey;
    padding: 10px;
    height: 70%;
  `,
};

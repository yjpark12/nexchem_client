import React from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import Inquiry from "../../img/contact/제휴·제안/AdobeStock_442157068-scaled_tiny.jpg";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { InquiryAtom } from "../../recoil/InquiryAtom";
import { client } from "../../axios/axios";
import { StSelect } from "../../pages/aboutus/StAbout";

const InquiryPageThird = () => {
  const data = useRecoilValue(InquiryAtom);
  const navigate = useNavigate();
  const [bigCategory, setBigCategory] = React.useState(false);
  const resetInquiryAtom = useResetRecoilState(InquiryAtom);
  const sendHandler = async () => {
    const result = await client.post("/", { data });
    if (result.status === 200) {
      alert("문의가 완료되었습니다.");
      navigate("/contact/stepOne");
      resetInquiryAtom();
    }
  };
  const clickHandler = (e: any) => {
    navigate(`/${e.target.dataset.value}`);
  };

  return (
    <div>
      <StStepOne.TitleBgImg src={Inquiry} alt="" />
      <StStepOne.Square />
      <StStepOne.TitleText>문의하기</StStepOne.TitleText>
      <div
        onClick={() => {
          setBigCategory(false);
        }}
      >
        <StSelect.SelectBox>
          <StSelect.SelectOption>
            <StSelect.OptionValue
              onClick={(e: any) => {
                e.stopPropagation();
                setBigCategory((prev) => !prev);
              }}
            >
              문의하기
            </StSelect.OptionValue>
            {bigCategory && (
              <StSelect.OptionBox>
                <StSelect.OptionValue data-value="about" onClick={clickHandler}>
                  ABOUT US
                </StSelect.OptionValue>
                <StSelect.OptionValue data-value="product" onClick={clickHandler}>
                  Products
                </StSelect.OptionValue>
                <StSelect.OptionValue data-value="media" onClick={clickHandler}>
                  Media
                </StSelect.OptionValue>
                <StSelect.OptionValue data-value="contact/stepOne" onClick={clickHandler}>
                  문의하기
                </StSelect.OptionValue>
              </StSelect.OptionBox>
            )}
          </StSelect.SelectOption>
        </StSelect.SelectBox>
        <StWholeDiv>
          <StSeqShapes>
            <StBar>
              <StCircle
                seq="1"
                bg="#0b4fd4;
          "
              />
              <StCircle seq="2" bg="#0b4fd4" />
              <StCircle seq="3" bg="#0b4fd4" />
            </StBar>
          </StSeqShapes>
          <StSeqTxt>
            <StTxt style={{ paddingLeft: "16px" }}>문의하기</StTxt>
            <StTxt>신청인 정보</StTxt>
            <StTxt>검토 후 제출</StTxt>
          </StSeqTxt>
          <StInfo>
            ※ 샘플 적용 신청을 하시면 귀하의 제품에 샘플을 적용해드립니다.
            <StLightTxt>(샘플 적용을 신청하여 WELTOUCH®의 성능을 귀사의 제품에 적용해 직접 경험해보세요.)</StLightTxt>
          </StInfo>
          <StFinalPage>
            <StInputContainer>
              <StTitleDiv>
                문의하기<StEditBtn onClick={() => navigate("/contact/stepOne")}>수정</StEditBtn>
              </StTitleDiv>
              <StContentDiv>
                관심분야 : {data?.interestedField}
                <br /> 제안 세부사항: {data?.detail}
                <br />
                첨부파일: {data?.file}
                <br />
                샘플 적용 신청 여부 : {data?.sample ? "신청" : "미신청"}
              </StContentDiv>
            </StInputContainer>

            <StInputContainer>
              <StTitleDiv>
                신청인 정보<StEditBtn onClick={() => navigate("/contact/stepTwo")}>수정</StEditBtn>
              </StTitleDiv>
              <StContentDiv>
                {data?.businessType}
                <br /> 회사(기관)명: {data?.companyName}
                <br />
                전화번호: {data?.phoneNumber}
                <br />
                이메일: {data?.email}
                <br />
                홈페이지 주소 : {data?.homePageAddress} <br />
                회사(기관)소개서: {data?.introduction}
              </StContentDiv>
            </StInputContainer>
          </StFinalPage>
          <StNextBtn onClick={sendHandler}>Send</StNextBtn>
        </StWholeDiv>
      </div>
    </div>
  );
};

export default InquiryPageThird;
const StStepOne = {
  TitleBgImg: styled.img`
    height: 300px;
    overflow: hidden;
    object-fit: cover;
    width: 100vw;
    /* z-index: 8; */
  `,
  TitleText: styled.div`
    color: white;
    font-size: 48px;
    font-weight: bold;
    /* z-index: 100; */
    position: absolute;
    top: 219px;
    left: 50%;
    /* width: 62px; */
  `,
  Square: styled.div`
    width: 4px;
    height: 24px;
    border-radius: 99px;
    justify-content: center;
    display: flex;
    background-color: #00afc8;
    position: absolute;
    top: 183px;
    left: 55%;
  `,
};
const StWholeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 150px;
`;
const StCircle = styled.div<{ seq: string; bg: string }>`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;

  left: ${({ seq }) => {
    switch (seq) {
      case "1":
        return "0%";
      case "2":
        return "50%";
      case "3":
        return "100%";
    }
  }};
  background-color: ${({ bg }) => bg};
  border: 1px solid #0b4fd4;
  border-radius: 15px;
`;
const StBar = styled.div`
  position: relative;
  border-top: 4px solid #dfdfdf;
  height: 30px;
  width: 600px;
`;
const StSeqShapes = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 113px;
`;
const StSeqTxt = styled.div`
  width: 683px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;
const StTxt = styled.div`
  font-size: 20;
  color: #555555;
  font-weight: 500;
`;
const StInfo = styled.div`
  margin: auto;
  padding-top: 80px;
  font-size: 24px;
  color: #555555;
  text-align: center;
  width: 1200px;
  font-weight: bold;
  letter-spacing: 0px;
  padding-bottom: 80px;
`;
const StLightTxt = styled.div`
  font-weight: 400;
`;

const StInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  flex-direction: column;
`;

const StNextBtn = styled.div`
  background-color: #00afc8;
  color: white;
  justify-content: center;
  cursor: pointer;
  width: 143px;
  height: 43px;
  padding: 11px 40px;
  margin: auto;
  border-radius: 6px;
  font: normal normal 600 18px/25px Pretendard;
  margin-top: 139px;
`;
const StCheckBox = styled.input`
  display: flex;
`;
const StAgreementInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 8px;
`;
const StRadio = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
  color: #555555;
  align-items: center;
`;

const StTitleDiv = styled.div`
  background-color: #f1f1f1;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  width: 1200px;
  height: 69px;
  padding: 20px 36px;
  font: normal normal bold 24px/34px Pretendard;
`;

const StContentDiv = styled.div`
  border: solid 1px #f1f1f1;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  color: #555555;
  font: normal normal normal 18px/25px Pretendard;
  display: flex;
  padding: 32px 36px;
  /* line-height: 5px; */
`;
const StFinalPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
const StEditBtn = styled.button`
  color: #00afc8;
  background-color: transparent;
  border: none;
  font: normal normal 600 18px/25px Pretendard;
  margin-left: 15px;
`;

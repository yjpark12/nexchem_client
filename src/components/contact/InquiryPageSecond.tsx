import React from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import Inquiry from "../../img/contact/제휴·제안/AdobeStock_442157068-scaled_tiny.jpg";
import { useRecoilState } from "recoil";
import { InquiryAtom } from "../../recoil/InquiryAtom";
import checkedBox from "../../img/contact/contact_us/checkedBox.jpeg";
import empty from "../../img/contact/contact_us/check_box_FILL1_wght700_GRAD0_opsz48 (1).svg";
import { StSelect } from "../../pages/aboutus/StAbout";

const InquiryPageSecond: React.FC = () => {
  const [businessType, setBusinessType] = React.useState<
    "publicInstitution" | "individual" | "corporation" | "corporate body" | ""
  >("");
  const [agreement, setAgreement] = React.useState<boolean>(false);
  const [inquiryAtom, setInquiryAtom] = useRecoilState(InquiryAtom);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInquiryAtom((prev) => ({
      ...prev,
      [name]: value,
      businessType: businessType,
    }));
  };
  const saveHandler = () => {
    if (agreement === true) {
      navigate("/contact/stepThree");
    } else {
      alert("필수 동의사항에 동의해주셔야 진행이 가능합니다. ");
    }
  };
  const navigate = useNavigate();
  const [bigCategory, setBigCategory] = React.useState(false);

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
              <StCircle seq="3" bg="white" />
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
          <StInputContainer>
            <StRadio>
              <div>
                <StRadioInput
                  type="radio"
                  onClick={() => setBusinessType("publicInstitution")}
                  checked={businessType === "publicInstitution"}
                />
                공공기관
              </div>
              <div>
                <StRadioInput
                  type="radio"
                  onClick={() => setBusinessType("individual")}
                  checked={businessType === "individual"}
                />
                개인
              </div>
              <div>
                <StRadioInput
                  type="radio"
                  onClick={() => setBusinessType("corporation")}
                  checked={businessType === "corporation"}
                />
                기업
              </div>
              <div>
                <StRadioInput
                  type="radio"
                  onClick={() => setBusinessType("corporate body")}
                  checked={businessType === "corporate body"}
                />
                법인
              </div>
            </StRadio>
            <StinRow>
              <StCompanyName
                type="text"
                placeholder="회사(기관)명"
                name="companyName"
                value={inquiryAtom.companyName}
                onChange={onChangeHandler}
              />
              <StCompanyName
                type="text"
                placeholder="이름"
                name="name"
                value={inquiryAtom.name}
                onChange={onChangeHandler}
              />
            </StinRow>

            <StinRow>
              <StCompanyName
                type="text"
                placeholder="전화번호"
                name="phoneNumber"
                value={inquiryAtom.phoneNumber}
                onChange={onChangeHandler}
              />
              <StCompanyName
                type="text"
                placeholder="이메일"
                name="email"
                value={inquiryAtom.email}
                onChange={onChangeHandler}
              />
            </StinRow>

            <StinRow>
              <StCompanyName
                type="text"
                placeholder="홈페이지 주소"
                name="homePageAddress"
                value={inquiryAtom.homePageAddress}
                onChange={onChangeHandler}
              />
              <StFileSelector
                type="file"
                placeholder="회사(기관) 소개서"
                name="introduction"
                value={inquiryAtom.introduction}
                onChange={onChangeHandler}
              />
            </StinRow>

            <StAgreementInfo>
              WELTOUCH®는 고객 상담을 위해 아래와 같이 개인정보를 수집·이용합니다.
              <StThinTxt>
                수집 항목: 이름, 이메일, 전화번호,회사명 <br />
                <br />
                수집 목적: 문의에 대한 상담 보유 및 이용 기간: 상담 종료 시 까지
              </StThinTxt>
            </StAgreementInfo>
            <StAgrmtContainer>
              <StAgreementInput>
                <StContainer>
                  {agreement ? (
                    <StChecked src={checkedBox} alt="" onClick={() => setAgreement(!agreement)} />
                  ) : (
                    <StUnChecked src={empty} alt="" onClick={() => setAgreement(!agreement)} />
                  )}
                  개인정보 수집 및 이용 동의 [필수]
                </StContainer>

                <div>
                  *개인정보 수집 및 이용에 동의하지 않을 권리가 있으며, 이를 거부할 경우에는 상담이 불가능 합니다.
                </div>
              </StAgreementInput>
            </StAgrmtContainer>
            <StNextBtn onClick={saveHandler}>다음</StNextBtn>
          </StInputContainer>
        </StWholeDiv>
      </div>
    </div>
  );
};

export default InquiryPageSecond;
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
const StCompanyName = styled.input`
  padding: 14px 0 14px 20px;
  border: solid 1px #dfdfdf;
  width: 588px;
  height: 44px;
`;
const StInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  gap: 16px;
`;

const StFileSelector = styled.input`
  padding: 14px 0 14px 20px;
  border: solid 1px #dfdfdf;
  width: 588px;
  height: 44px;
`;
const StNextBtn = styled.button`
  border: none;
  background-color: #00afc8;
  color: white;
  justify-content: center;
  cursor: pointer;
  width: 143px;
  height: 43px;
  padding: 11px 40px;
  margin: auto;
  border-radius: 6px;
  font-weight: bold;
  font-size: 21px;
  margin-top: 139px;
`;
const StCheckBox = styled.input`
  display: flex;
`;
const StAgreementInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  gap: 8px;
  color: #555555;
`;
const StRadio = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
  color: #555555;
  align-items: center;
`;
const StRadioInput = styled.input`
  margin-right: 8px;
`;
const StinRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const StChecked = styled.img`
  width: 16px;
  height: 18px;
  cursor: pointer;
  margin-right: 8px;
`;
const StUnChecked = styled.img`
  width: 16px;
  height: 18px;
  opacity: 40%;
  cursor: pointer;
  margin-right: 8px;
`;
const StAgreementInfo = styled.div`
  border: solid 1px #d0d0d0;
  border-radius: 8px;
  height: 120px;
  padding: 20px;
  font-weight: bold;
  color: #555555;
  overflow: auto;
`;

const StThinTxt = styled.div`
  font-weight: 400;
  margin-top: 30px;
`;
const StAgrmtContainer = styled.div`
  display: flex;
  justify-content: right;
`;
const StContainer = styled.div`
  display: flex;
  justify-content: right;
`;

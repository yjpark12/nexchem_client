import React from "react";
import { StAbout, StArrow, StSelect } from "../../aboutus/StAbout";
import arrow from "../../../img/icon/arrow-right-long-white.png";
import { styled } from "styled-components";
import { StNoshine } from "../StProduct";
import { useNavigate } from "react-router-dom";
import Common from "../../../components/product/Common";
const Multi: React.FC = () => {
  const navigate = useNavigate();
  const [bigCategory, setBigCategory] = React.useState(false);
  const [detailCategory, setDetailCategory] = React.useState(false);
  const [moredetailCategory, setMoreDetailCategory] = React.useState(false);
  const clickHandler = (e: any) => {
    navigate(`/${e.target.dataset.value}`);
  };
  const detailClickHandler = (e: any) => {
    navigate(`/product/${e.target.dataset.value}`);
  };
  return (
    <StMulti.Container
      onClick={() => {
        setBigCategory(false);
        setDetailCategory(false);
        setMoreDetailCategory(false);
      }}
    >
      <StAbout.MainImg src="/assets/AdobeStock_423654356_2_tiny.jpg">
        <StAbout.Font20 color="white">Products</StAbout.Font20>
        <StAbout.FontBigBold color="white">기술 응용분야</StAbout.FontBigBold>
      </StAbout.MainImg>
      <StSelect.SelectBox>
        <StSelect.SelectOption>
          <StSelect.OptionValue
            onClick={(e: any) => {
              e.stopPropagation();
              setBigCategory((prev) => !prev);
            }}
          >
            Products
          </StSelect.OptionValue>
          {bigCategory && (
            <StSelect.OptionBox>
              <StSelect.OptionOtherValue data-value="about/brand" onClick={clickHandler}>
                ABOUT US
              </StSelect.OptionOtherValue>
              <StSelect.OptionOtherValue data-value="product/noshine" onClick={clickHandler}>
                Products
              </StSelect.OptionOtherValue>
              <StSelect.OptionOtherValue data-value="media" onClick={clickHandler}>
                Media
              </StSelect.OptionOtherValue>
              <StSelect.OptionOtherValue data-value="contact/stepOne" onClick={clickHandler}>
                문의하기
              </StSelect.OptionOtherValue>
            </StSelect.OptionBox>
          )}
        </StSelect.SelectOption>
        <StSelect.SelectOption>
          <StSelect.OptionValue
            onClick={(e: any) => {
              e.stopPropagation();
              setDetailCategory((prev) => !prev);
            }}
          >
            기술 응용 분야
          </StSelect.OptionValue>
          {detailCategory && (
            <StSelect.OptionBox>
              <StSelect.OptionOtherValue data-value="noshine" onClick={detailClickHandler}>
                자기구동형 무광촉매
              </StSelect.OptionOtherValue>
              <StSelect.OptionOtherValue data-value="technical/multi" onClick={detailClickHandler}>
                기술 응용 분야
              </StSelect.OptionOtherValue>
              <StSelect.OptionOtherValue data-value="redchec" onClick={detailClickHandler}>
                Redchec®
              </StSelect.OptionOtherValue>
            </StSelect.OptionBox>
          )}
        </StSelect.SelectOption>
        <StSelect.SelectOption>
          <StSelect.OptionValue
            onClick={(e: any) => {
              e.stopPropagation();
              setMoreDetailCategory((prev) => !prev);
            }}
          >
            다목적 복합 필터 기술
          </StSelect.OptionValue>
          {moredetailCategory && (
            <StSelect.OptionBox>
              <StSelect.OptionOtherValue data-value="technical/multi" onClick={detailClickHandler}>
                다목적 복합 필터 기술
              </StSelect.OptionOtherValue>
              <StSelect.OptionOtherValue data-value="technical/fresh" onClick={detailClickHandler}>
                신선도 유지 기술
              </StSelect.OptionOtherValue>
              <StSelect.OptionOtherValue data-value="technical/air" onClick={detailClickHandler}>
                상시 방역 & 공기질 개선 기술
              </StSelect.OptionOtherValue>
              <StSelect.OptionOtherValue data-value="technical/water" onClick={detailClickHandler}>
                수질 개선 기술
              </StSelect.OptionOtherValue>
              <StSelect.OptionOtherValue data-value="technical/build" onClick={detailClickHandler}>
                건축 자재 적용 기술
              </StSelect.OptionOtherValue>
            </StSelect.OptionBox>
          )}
        </StSelect.SelectOption>
      </StSelect.SelectBox>
      <div>
        <StMulti.Title>다목적 복합 필터 기술</StMulti.Title>
        <StMulti.TextBox>
          다양한 소재의 필터에 WELTOUCH®를 적용(Coating)한 것을 WELTOUCH® Coating Filter라고 합니다.
          <br />
          적용된 필터는 공기 중에 떠다니는 바이러스 및 세균을 분해·제거하는 성능이 생기며,
          <br />
          Filter의 기본적 성능 (탈취 및 미세먼지 제거)을 향상시켜 주는 기술입니다.
        </StMulti.TextBox>
        <StNoshine.Container bgColor="white" pt="40px">
          <StArrow.Box bgColor="#00AFC8" onClick={() => navigate("/contact/stepOne")}>
            다목적 복합 필터 기술 문의하기 <img src={arrow} alt="arrow" />
          </StArrow.Box>
        </StNoshine.Container>
        <StMulti.BoxContainer>
          <StMulti.Box>
            <StMulti.Stitle>특징</StMulti.Stitle>
            <StMulti.StextBox>
              <p>
                기계적 구조 변경 없이 순쉬운 적용
                <br />
                제한없는 강력한 효과
              </p>
            </StMulti.StextBox>
          </StMulti.Box>
          <StMulti.Box>
            <StMulti.Stitle>용도</StMulti.Stitle>
            <StMulti.StextBox>
              <p>
                모든 종류의 Filter <br />
                (프리 Filter, 미디엄 Filter, 활성탄 Filter, 세라믹 Filter, 허니컴 Filter 등)
              </p>
            </StMulti.StextBox>
          </StMulti.Box>
        </StMulti.BoxContainer>
      </div>
      <Common />
    </StMulti.Container>
  );
};

export default Multi;

export const StMulti = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  TextBox: styled.div`
    width: 1410px;
    height: 96px;
    text-align: center;
    font: normal normal 300 24px/34px Pretendard;
    color: #555555;
    margin: 40px auto;
  `,
  Title: styled.div`
    text-align: center;
    font: normal normal bold 48px/67px Pretendard;
    letter-spacing: 0px;
    margin-top: 100px;
    color: #333333;
  `,
  BoxContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 100px;
  `,
  Box: styled.div`
    display: flex;
    flex-direction: column;
    width: 655px;
    border-radius: 4px;
    overflow: hidden;
    border: 2px solid #32bfd3;
  `,
  BoxTilte: styled.div`
    width: 100%;
    height: 50px;
    font: normal normal bold 24px/34px Pretendard;
  `,
  Stitle: styled.div`
    width: 100%;
    height: 50px;
    font: normal normal bold 24px/34px Pretendard;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #32bfd3;
    color: white;
  `,
  StextBox: styled.div`
    height: 156px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font: normal normal 300 20px/28px Pretendard;
    color: #555555;
  `,
};

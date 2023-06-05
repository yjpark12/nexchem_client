import React from "react";
import { StAbout, StArrow, StSelect } from "../../aboutus/StAbout";
import arrow from "../../../img/icon/arrow-right-long-white.png";
import { StNoshine } from "../StProduct";
import { useNavigate } from "react-router-dom";
import { StMulti } from "./Multi";
import { StFresh } from "./Fresh";

import img1 from "../../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img1.jpg";
import img2 from "../../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img2.jpg";
import { styled } from "styled-components";
import AirSecond from "../../../components/product/AirSecond";

const Air: React.FC = () => {
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
      <StAbout.MainImg src="/assets/AdobeStock_220663994_2_tiny.jpg">
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
            상시 방역 & 공기질 개선 기술
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
        <StMulti.Title>상시 방역 & 공기질 개선 기술</StMulti.Title>
        <StMulti.TextBox>
          포름알데히드, VOCs등을 빠르게 분해·제거하여
          <br />
          새집증후군이나 새가구증후군, 새차증후군을 예방하거나 바이러스 등의 감염을 예방할 수 있는 기술입니다.
          <br />
          또한 일상생활에서 지속적으로 발생하는 음식물 냄새, 화장실 냄새 등의 생활악취를 분해·제거하여 쾌적한 환경을
          제공합니다.
        </StMulti.TextBox>
        <StNoshine.Container bgColor="white" pt="40px">
          <StArrow.Box bgColor="#00AFC8" onClick={() => navigate("/contact")}>
            상시 방역 & 공기질 개선 기술 문의하기 <img src={arrow} alt="arrow" />
          </StArrow.Box>
        </StNoshine.Container>
        <StFresh.ImgBox>
          <StAir.Img1 src={img1} alt="종이봉투" />
          <StAir.Img2 src={img2} alt="종이봉투" />
        </StFresh.ImgBox>
        <StFresh.ImgBox>
          <StFresh.ContentBox>
            <StFresh.LineBox>
              <span>특징</span>
              <StFresh.Line />
            </StFresh.LineBox>
            <ul>
              <li>빛이 들지 않는 장소에서도 작용</li>
              <li>우수한 코팅력</li>
              <li>보장된 안전성</li>
            </ul>
          </StFresh.ContentBox>
          <StFresh.ContentBox>
            <StFresh.LineBox>
              <span>용도</span>
              <StFresh.Line />
            </StFresh.LineBox>
            <ul>
              <li>건축 내장재 및 차량 내장재, 타일, 가구, 인테리어 소품, 시공 등</li>
            </ul>
          </StFresh.ContentBox>
        </StFresh.ImgBox>
      </div>
      <AirSecond />
    </StMulti.Container>
  );
};

export default Air;

export const StAir = {
  Img1: styled.img`
    width: 458px;
    height: 305px;
  `,
  Img2: styled.img`
    width: 518px;
    height: 305px;
  `,
};

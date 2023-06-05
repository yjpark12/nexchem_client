import React from "react";
import { StAbout, StArrow, StSelect } from "../../aboutus/StAbout";
import arrow from "../../../img/icon/arrow-right-long-white.png";
import { StNoshine } from "../StProduct";
import { useNavigate } from "react-router-dom";
import { StMulti } from "./Multi";
import { StFresh } from "./Fresh";
import { styled } from "styled-components";

import img1 from "../../../img/products/기술 응용 분야/수질 개선 기술/img1.jpg";
import img2 from "../../../img/products/기술 응용 분야/수질 개선 기술/img2.jpg";
import WaterSecond from "../../../components/product/WaterSecond";
const Water: React.FC = () => {
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
      <StAbout.MainImg src="/assets/AdobeStock_495620064_2_tiny.jpg">
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
            수질 개선 기술
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
        <StMulti.Title>수질 개선 기술</StMulti.Title>
        <StMulti.TextBox>
          물에 포함되어 있는 인 성분을 분해·제거 하고, 유수분리를 하여 오일 성분을 분리하여 줍니다.
          <br />
          또한, 양식장의 콘크리트 벽면이나 벽돌 소재에 WELTOUCH®를 적용하여 녹조 및 이끼가 생기지 않게 합니다.
        </StMulti.TextBox>
        <StNoshine.Container bgColor="white" pt="40px">
          <StArrow.Box bgColor="#00AFC8" onClick={() => navigate("/contact")}>
            수질 개선 기술
            <img src={arrow} alt="arrow" />
          </StArrow.Box>
        </StNoshine.Container>

        <StFresh.ImgBox>
          <StWater.Img1 src={img1} alt="종이봉투" />
          <StWater.Img2 src={img2} alt="종이봉투" />
        </StFresh.ImgBox>
        <StFresh.ImgBox>
          <StFresh.ContentBox>
            <StFresh.LineBox>
              <span>특징</span>
              <StFresh.Line />
            </StFresh.LineBox>
            <ul>
              <li>손쉽게 적용 가능</li>
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
              <li>수처리 여재, 양식장 등</li>
            </ul>
          </StFresh.ContentBox>
        </StFresh.ImgBox>
      </div>
      <WaterSecond />
    </StMulti.Container>
  );
};

export default Water;
const StWater = {
  Img1: styled.img`
    width: 420px;
    height: 315px;
  `,
  Img2: styled.img`
    width: 556px;
    height: 315px;
  `,
};

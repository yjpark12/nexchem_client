import React from "react";
import { StAbout, StArrow, StSelect } from "../../aboutus/StAbout";
import arrow from "../../../img/icon/arrow-right-long-white.png";
import { StNoshine } from "../StProduct";
import { useNavigate } from "react-router-dom";
import { StMulti } from "./Multi";

import img1 from "../../../img/products/기술 응용 분야/신선도 유지 기술/AdobeStock_308413499_tiny.jpg";
import img2 from "../../../img/products/기술 응용 분야/신선도 유지 기술/AdobeStock_291490013_.jpg";
import { styled } from "styled-components";
import FreshSecond from "../../../components/product/FreshSecond";

const Fresh: React.FC = () => {
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
      <StAbout.MainImg src="/assets/AdobeStock_270639335_2_tiny.jpg">
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
            신선도 유지 기술
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
        <StMulti.Title>신선도 유지 기술</StMulti.Title>
        <StMulti.TextBox>
          WELTOUCH®는 종이, 박스, 원단 등과 같은 소재에도 다양하게 적용이 가능해
          <br />
          음식의 패키지 및 용기(트레이)에 사용하여 음식의 부패 방지 효과를 부여합니다.
        </StMulti.TextBox>
        <StNoshine.Container bgColor="white" pt="40px">
          <StArrow.Box bgColor="#00AFC8" onClick={() => navigate("/contact/stepOne")}>
            신선도 유지 기술 문의하기 <img src={arrow} alt="arrow" />
          </StArrow.Box>
        </StNoshine.Container>
        <StFresh.ImgBox>
          <StFresh.Img1 src={img1} alt="종이봉투" />
          <StFresh.Img2 src={img2} alt="종이봉투" />
        </StFresh.ImgBox>
        <StFresh.ImgBox>
          <StFresh.ContentBox>
            <StFresh.LineBox>
              <span>특징</span>
              <StFresh.Line />
            </StFresh.LineBox>
            <ul>
              <li>모든 자재에 손쉽게 적용 가능</li>
              <li>강력한 부패 지연 효과</li>
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
              <li>각종 tray, box, pp plastic 등</li>
              <li>농, 식품을 보관할 때 사용하는 모든 자재</li>
            </ul>
          </StFresh.ContentBox>
        </StFresh.ImgBox>
      </div>
      <FreshSecond />
    </StMulti.Container>
  );
};

export default Fresh;
export const StFresh = {
  Container: styled.div`
    width: 1200px;
  `,
  LineBox: styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 60pt 0 20px 0;
  `,
  Line: styled.div`
    width: 100%;
    border-top: 2px dashed black;
    position: absolute;
    top: 50%;
    z-index: -20;
  `,
  ImgBox: styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
  `,
  Img1: styled.img`
    width: 350px;
    height: 235px;
  `,
  Img2: styled.img`
    width: 625px;
    height: 235px;
  `,
  ContentBox: styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: center;
    span {
      color: #000000;
      font-family: "Cormorant Garamond", Sans-serif;
      font-size: 28px;
      font-weight: 600;
      line-height: 32px;
      text-align: center;
      background-color: white;
      padding: 0 20px;
    }
    li {
      list-style: disc;
      color: #000000;
      font-family: "Cormorant Garamond", Sans-serif;
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
    }
  `,
};

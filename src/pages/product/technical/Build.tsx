import React from "react";
import { StAbout, StArrow, StSelect } from "../../aboutus/StAbout";
import arrow from "../../../img/icon/arrow-right-long-white.png";
import { StNoshine } from "../StProduct";
import { useNavigate } from "react-router-dom";
import { StMulti } from "./Multi";
import { StFresh } from "./Fresh";
import BuildSecond from "../../../components/product/BuildSecond";

import img1 from "../../../img/products/기술 응용 분야/건축 자재 적용 기술/img1.jpg";
import img2 from "../../../img/products/기술 응용 분야/건축 자재 적용 기술/img2.jpg";
import { StAir } from "./Air";

const Build: React.FC = () => {
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
      <StAbout.MainImg src="/assets/CK_cm26014559_2_tiny.jpg">
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
            건축 자재 적용 기술
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
        <StMulti.Title>건축 자재 적용 기술</StMulti.Title>
        <StMulti.TextBox>
          건축자재 적용 시 부가적인 기능이 발휘되어 제품을 업그레이드 시켜줍니다. 습하고 더운 환경에서 건축자재 표면에
          생기는 곰팡이균을 억제하여
          <br />
          건축자재의 오염을 막아주고, 수명을 늘려줍니다.
          <br />
          또한, 건축 외장재에 적용 시 최근에 문제가 되고 있는 미세먼지 전구물질인 NOx, SOx, VOCs 등을 분해·제거해줍니다.
        </StMulti.TextBox>
        <StNoshine.Container bgColor="white" pt="40px">
          <StArrow.Box bgColor="#00AFC8" onClick={() => navigate("/contact")}>
            건축 자재 적용 기술 문의하기 <img src={arrow} alt="arrow" />
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
              <li>손쉬운 적용</li>
              <li>제한없는 강력한 효과</li>
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
              <li>돌, 시멘트, 건물 외벽, 건축 자재 등</li>
            </ul>
          </StFresh.ContentBox>
        </StFresh.ImgBox>
      </div>
      <BuildSecond />
    </StMulti.Container>
  );
};

export default Build;

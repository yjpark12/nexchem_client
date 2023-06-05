import React from "react";
import { useNavigate } from "react-router-dom";
import { StNoshine, StProduct } from "./StProduct";
import { StAbout, StArrow, StSelect } from "../aboutus/StAbout";

import img from "../../img/products/Redchec/test-tubes-g05cdb7e1e_1920.jpg";
import arrow from "../../img/icon/arrow-right-long-white.png";

const Redchec: React.FC = () => {
  const navigate = useNavigate();
  const [bigCategory, setBigCategory] = React.useState(false);
  const [detailCategory, setDetailCategory] = React.useState(false);
  const clickHandler = (e: any) => {
    navigate(`/${e.target.dataset.value}`);
  };
  const detailClickHandler = (e: any) => {
    navigate(`/product/${e.target.dataset.value}`);
  };
  return (
    <div
      onClick={() => {
        setBigCategory(false);
        setDetailCategory(false);
      }}
    >
      <StAbout.MainImg src="/assets/AdobeStock_286304472.jpg">
        <StAbout.Font20 color="white">Products</StAbout.Font20>
        <StAbout.FontBigBold color="white">Redchec®</StAbout.FontBigBold>
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
            Redchec®
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
      </StSelect.SelectBox>
      <StProduct.Container>
        <StProduct.FlexCenter>
          <StAbout.FontBigBold>Redchec®</StAbout.FontBigBold>
        </StProduct.FlexCenter>
        <StProduct.Article>
          <StProduct.Gap60>
            <StAbout.Font20 ta="left">
              Redchec®는 광촉매의 성능에 대한 가시적인 검증을 하기 위한 시약으로 광촉매의 적용
              <br />
              감리 시 Redchec®를 이용하여 육안 관찰을 통해 적용 적합도 판정을 할 수 있습니다.
            </StAbout.Font20>
          </StProduct.Gap60>
          <StProduct.Img500 src={img} alt="사진" />
        </StProduct.Article>
        <StNoshine.Container bgColor="white" pt="60px">
          <StArrow.Box bgColor="#00AFC8" onClick={() => navigate("/contact")}>
            제품 문의 <img src={arrow} alt="arrow" />
          </StArrow.Box>
        </StNoshine.Container>
      </StProduct.Container>
    </div>
  );
};

export default Redchec;

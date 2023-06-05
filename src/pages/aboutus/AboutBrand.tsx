import React from "react";
import { useNavigate } from "react-router-dom";
import { StAbout, StBrand, StSelect } from "./StAbout";
import img from "../../img/about/ABOUT US/AdobeStock_350484199_2_tiny.jpg";
import logo from "../../img/logo/logo.png";
import symbol from "../../img/logo/bottom.png";
const AboutBrand: React.FC = () => {
  const navigate = useNavigate();
  const [bigCategory, setBigCategory] = React.useState(false);
  const [detailCategory, setDetailCategory] = React.useState(false);
  const clickHandler = (e: any) => {
    navigate(`/${e.target.dataset.value}`);
  };
  const detailClickHandler = (e: any) => {
    navigate(`/about/${e.target.dataset.value}`);
  };
  return (
    <div
      onClick={() => {
        setBigCategory(false);
        setDetailCategory(false);
      }}
    >
      <StAbout.MainImg src="/assets/AdobeStock_495620064_tiny.jpg">
        <StAbout.Font20 color="white">ABOUT US</StAbout.Font20>
        <StAbout.FontBigBold color="white">WELTOUCH® brand</StAbout.FontBigBold>
      </StAbout.MainImg>
      <StSelect.SelectBox>
        <StSelect.SelectOption>
          <StSelect.OptionValue
            onClick={(e: any) => {
              e.stopPropagation();
              setBigCategory((prev) => !prev);
            }}
          >
            ABOUT US
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
            WELTOUCH® brand
          </StSelect.OptionValue>
          {detailCategory && (
            <StSelect.OptionBox>
              <StSelect.OptionOtherValue data-value="brand" onClick={detailClickHandler}>
                WELTOUCH® brand
              </StSelect.OptionOtherValue>
              <StSelect.OptionOtherValue data-value="relationship" onClick={detailClickHandler}>
                주요 관계사
              </StSelect.OptionOtherValue>
              <StSelect.OptionOtherValue data-value="price" onClick={detailClickHandler}>
                인증 & 수상내역
              </StSelect.OptionOtherValue>
            </StSelect.OptionBox>
          )}
        </StSelect.SelectOption>
      </StSelect.SelectBox>
      <StBrand.Container>
        <StBrand.Article>
          <StAbout.Font20>
            WELTOUCH®는 지난 10여년간 우리들의 보다 나은 건강한 생활환경에 필요한
            <br />
            새로운 화학제품의 개발에 노력을 경주하여 왔습니다.
          </StAbout.Font20>
          <StAbout.Font24>
            "그 결과 <StBrand.LogoImg src={symbol} alt="로고" />
            <StBrand.Logo src={logo} alt="로고" />의 고성능 기술은
            <br /> 일상생활과 산업 전반에 적용되었습니다."
          </StAbout.Font24>
          <StAbout.Font20>
            세계 유수의 브랜드들은 WELTOUCH®와의 협력을 통해 유해 물질로부터
            <br />
            당신을 보호하는 기능을 갖춘 고성능 제품을 탄생시킵니다.
          </StAbout.Font20>
          <StAbout.Font20>
            세계 최고의 브랜드들은 WELTOUCH®의 기술이 훌륭하며,
            <br />늘 엄격한 기준으로 성능을 검수하고 있다는 것을 알고 우리를 신뢰합니다.
            <br />
            WELTOUCH®는 흔들리지 않는 믿음을 바탕으로 우리의 삶의 공간에 건강한 환경을
            <br />
            만들어주겠다는 영원한 과제이자 목표를 향해 이 순간에도 최선을 다합니다.
          </StAbout.Font20>
          <StAbout.FontBold>All livings cared by WELTOUCH®</StAbout.FontBold>
        </StBrand.Article>
        <StBrand.Img src={img} alt="행복" />
      </StBrand.Container>
    </div>
  );
};

export default AboutBrand;

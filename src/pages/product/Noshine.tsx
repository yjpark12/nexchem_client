import React from "react";
import { StAbout, StArrow, StSelect } from "../aboutus/StAbout";
import { useNavigate } from "react-router-dom";
import { StNoshine, StProduct } from "./StProduct";
import img from "../../img/products/자기구동형 무광촉매/AdobeStock_300766954.jpg";
import arrow from "../../img/icon/arrow-right-long-white.png";
import group from "../../img/products/자기구동형 무광촉매/group2x.png";
import multi from "../../img/products/자기구동형 무광촉매/AdobeStock_423654356_tiny.jpg";
import fresh from "../../img/products/자기구동형 무광촉매/AdobeStock_270639335-scaled.jpg";
import air from "../../img/products/자기구동형 무광촉매/AdobeStock_370722965_tiny.jpg";
import build from "../../img/products/자기구동형 무광촉매/AdobeStock_273796762_tiny.jpg";
import water from "../../img/products/자기구동형 무광촉매/AdobeStock_261344590.jpg";
const Noshine: React.FC = () => {
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
        <StAbout.FontBigBold color="white">자기구동형 무광촉매</StAbout.FontBigBold>
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
            자기구동형 무광촉매
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
          <StAbout.FontBigBold>무광촉매</StAbout.FontBigBold>
        </StProduct.FlexCenter>
        <StProduct.Article>
          <StProduct.Img500 src={img} alt="사진" />
          <StProduct.Gap60>
            <StAbout.FontBold>광촉매 초격차(Super gap) 기술'자기구동형 무광촉매 WELTOUCH®</StAbout.FontBold>
            <StAbout.Font20 ta="right">
              20년이 넘는 시간동안 다양한 분야에 적용되고 있는 WELTOUCH®는
              <br />
              광촉매 초격차(Super gap) 기술입니다. 빛의 유·무와 상관없이 공기중의 산소(O2)와
              <br />
              습도(H2O)만 있다면, 조건의 제약없이 최고의 광촉매 성능을 발휘합니다.
            </StAbout.Font20>
            <StAbout.Font20 ta="right">
              자기구동형 무광촉매 WELTOUCH®는 일반적인 광촉매와 달리 응집된 이산화티타늄
              <br />
              입자를 단순히 분산시킨 형태가 아닌 망상구조로 수분산시켜 생산한 제품으로
              <br /> 광촉매 초격차(Super gap) 기술을 이끌고 있습니다.
            </StAbout.Font20>
          </StProduct.Gap60>
        </StProduct.Article>
        <StNoshine.Container bgColor="white" pt="60px">
          <StAbout.Font20 ta="center">
            햇빛이나 형광등 불빛과 같은 광에너지는 물론 활용 가능하며 추가적인 에너지(적외선, 열에너지)까지 활용하고
            이를 이용하여
            <br />
            포름알데히드와 VOCs (휘발성유기화합물)과 같은 오염물질을 산화·분해시켜 무해한 물과 탄산가스로 변화시켜 실내
            공기를 정화시킬 뿐만 아니라
            <br />
            강력한 산화·환원반응으로 항균, 살균, 탈취, 방오 등의 다양한 분야에 적용할 수 있는 기술입니다.
          </StAbout.Font20>
          <StArrow.Box bgColor="#00AFC8" onClick={() => navigate("/contact")}>
            제품 문의 <img src={arrow} alt="arrow" />
          </StArrow.Box>
        </StNoshine.Container>
        <StNoshine.Container bgColor="#F9F9F9">
          <StAbout.FontBigBold>WELTOUCH® 특징</StAbout.FontBigBold>
          <StNoshine.GenerationBox>
            <StNoshine.Box bgColor="white">
              <StAbout.FontMidium ta="center">
                1세대
                <br />
                광촉매
              </StAbout.FontMidium>
              <img src="" alt="" />
              <p>
                Driving fore
                <br />
                자외선
              </p>
              <p>
                사용범위
                <br />
                Outdoor
              </p>
            </StNoshine.Box>
            <StNoshine.Arrow>&gt;</StNoshine.Arrow>
            <StNoshine.Box bgColor="white">
              <StAbout.FontMidium ta="center">
                2세대
                <br />
                가시광촉매
              </StAbout.FontMidium>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <StNoshine.TextBox>
                <p>
                  Driving fore
                  <br />
                  자외선, 가시광선
                </p>
                <p>
                  사용범위
                  <br />
                  Outdoor, Indoor,
                  <br />
                  조명 (Visible Light)
                </p>
              </StNoshine.TextBox>
            </StNoshine.Box>
            <StNoshine.Arrow>&gt;</StNoshine.Arrow>
            <StNoshine.Box bgColor="#00AFC8" color="white">
              <StAbout.FontMidium ta="center">
                3세대
                <br />
                자기구동형 무광촉매
              </StAbout.FontMidium>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <StNoshine.TextBox>
                <p>
                  Driving fore
                  <br />
                  자외선, 가시광선, 열에너지, 적외선
                </p>
                <p>
                  사용범위
                  <br />
                  Outdoor, Indoor,
                  <br />
                  조명 (Visible Light), 무광
                </p>
              </StNoshine.TextBox>
            </StNoshine.Box>
          </StNoshine.GenerationBox>
        </StNoshine.Container>
        <StNoshine.Container bgColor="white">
          <StNoshine.GroupImg src={group} alt="" />
        </StNoshine.Container>
        <StNoshine.Container bgColor="#006371" pl="0" pb="0">
          <StAbout.FontBigBold color="white" ta="center">
            기술 응용 분야
          </StAbout.FontBigBold>
          <StAbout.MB mb="80px" />
          <StNoshine.ContentArticle>
            <StNoshine.Explain>
              <StAbout.FontMidiumBold color="white" ta="right">
                다목적 복합 필터 기술
              </StAbout.FontMidiumBold>
              <StAbout.MB mb="24px" />
              <StAbout.Font20 color="white" ta="right">
                WELTOUCH®를 Filter에 적용하여 각종 유해 물질로부터 악취, 세균 및<br />
                바이러스까지 차단해주는 WELTOUCH® Coating Filter로 재탄생시킵니다.
              </StAbout.Font20>
              <StAbout.MB mb="60px" />
              <StArrow.Box bgColor="none" border="1px solid white" onClick={() => navigate("/contact")}>
                더 알아보기 <img src={arrow} alt="arrow" />
              </StArrow.Box>
            </StNoshine.Explain>
            <StNoshine.ImgBox>
              <StNoshine.ExplainImg src={multi} alt="" />
            </StNoshine.ImgBox>
          </StNoshine.ContentArticle>

          <StNoshine.ContentArticle>
            <StNoshine.ImgBox>
              <StNoshine.ExplainImg src={fresh} alt="" />
            </StNoshine.ImgBox>
            <StNoshine.Explain>
              <StAbout.FontMidiumBold color="white">신선도 유지 기술</StAbout.FontMidiumBold>
              <StAbout.MB mb="24px" />
              <StAbout.Font20 color="white">
                WELTOUCH®는 종이, 박스 등과 같은 소재에도 다양하게 적용이 가능해
                <br />
                음식의 패키지 용기(트레이)에 사용하여 음식의 부패방지 효과를 부여합니다.
              </StAbout.Font20>
              <StAbout.MB mb="60px" />
              <StArrow.Box bgColor="none" border="1px solid white" onClick={() => navigate("/contact")}>
                더 알아보기 <img src={arrow} alt="arrow" />
              </StArrow.Box>
            </StNoshine.Explain>
          </StNoshine.ContentArticle>

          <StNoshine.ContentArticle>
            <StNoshine.Explain>
              <StAbout.FontMidiumBold color="white" ta="right">
                상시 방역 & 공기질 개선 기술
              </StAbout.FontMidiumBold>
              <StAbout.MB mb="24px" />
              <StAbout.Font20 color="white" ta="right">
                건축 내장재 및 자동차 내장재에서 발생하여 새집증후군이나, 새가구증후군,
                <br />
                새차증후군을 유발하는 포름알데히드, VOCs 등을 빠르게 분해·제거하여
                <br />
                새집증후군이나, 새가구증후군, 새차증후군을 예방하는 기술입니다.
              </StAbout.Font20>
              <StAbout.MB mb="60px" />
              <StArrow.Box bgColor="none" border="1px solid white" onClick={() => navigate("/contact")}>
                더 알아보기 <img src={arrow} alt="arrow" />
              </StArrow.Box>
            </StNoshine.Explain>
            <StNoshine.ImgBox>
              <StNoshine.ExplainImg src={air} alt="" />
            </StNoshine.ImgBox>
          </StNoshine.ContentArticle>

          <StNoshine.ContentArticle>
            <StNoshine.ImgBox>
              <StNoshine.ExplainImg src={water} alt="" />
            </StNoshine.ImgBox>
            <StNoshine.Explain>
              <StAbout.FontMidiumBold color="white">수질 개선 기술</StAbout.FontMidiumBold>
              <StAbout.MB mb="24px" />
              <StAbout.Font20 color="white">
                수질분야에 사용되는 수처리 여재에 WELTOUCH®를 적용하여
                <br />
                물에 포함되어 있는 인 성분을 분해·제거하고,
                <br />
                유수분리를 하여 오일 성분을 분리하여 줍니다.
              </StAbout.Font20>
              <StAbout.MB mb="60px" />
              <StArrow.Box bgColor="none" border="1px solid white" onClick={() => navigate("/contact")}>
                더 알아보기 <img src={arrow} alt="arrow" />
              </StArrow.Box>
            </StNoshine.Explain>
          </StNoshine.ContentArticle>
          <StNoshine.ContentArticle>
            <StNoshine.Explain>
              <StAbout.FontMidiumBold color="white" ta="right">
                건축 자재 적용 기술
              </StAbout.FontMidiumBold>
              <StAbout.MB mb="24px" />
              <StAbout.Font20 color="white" ta="right">
                건축자재 및 가구 소재에 WELTOUCH®를 적용하면 부가적인 기능이 발휘되어
                <br />
                제품을 업그레이드 시켜줍니다. 습하고 더운 환경에서 건축자재 표면에 생기는
                <br />
                곰팡이균을 억제하여 건축자재의 오염을 막아주고, 수명을 늘려줍니다.
              </StAbout.Font20>
              <StAbout.MB mb="60px" />
              <StArrow.Box bgColor="none" border="1px solid white" onClick={() => navigate("/contact")}>
                더 알아보기 <img src={arrow} alt="arrow" />
              </StArrow.Box>
            </StNoshine.Explain>
            <StNoshine.ImgBox>
              <StNoshine.ExplainImg src={build} alt="" />
            </StNoshine.ImgBox>
          </StNoshine.ContentArticle>
        </StNoshine.Container>
      </StProduct.Container>
    </div>
  );
};

export default Noshine;

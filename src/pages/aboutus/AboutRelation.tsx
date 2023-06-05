import React from "react";
import { useNavigate } from "react-router-dom";
import { StAbout, StRelationShip, StSelect } from "./StAbout";
import nexchem from "../../img/about/주요 관계사/NexCHEM.png";
import nexchemImg from "../../img/about/주요 관계사/AdobeStock_393656246_tiny.jpg";
import nexchemImg2 from "../../img/about/주요 관계사/istockphoto-994167852_tiny.jpg";
import mf2 from "../../img/about/주요 관계사/mfSquare.png";
import mf2Img from "../../img/about/주요 관계사/AdobeStock_375987102.jpg";

// 4개국어 번역
const AboutRelationshipText = [["ABOUT US"], [], [], []];

const AboutRelationship: React.FC = () => {
  const navigate = useNavigate();
  const [bigCategory, setBigCategory] = React.useState(false);
  const [detailCategory, setDetailCategory] = React.useState(false);
  const [img, setImg] = React.useState<string | undefined>(nexchemImg);
  const changeTimeout = React.useRef<any>(null);
  const clickHandler = (e: any) => {
    navigate(`/${e.target.dataset.value}`);
  };
  const detailClickHandler = (e: any) => {
    navigate(`/about/${e.target.dataset.value}`);
  };
  const changeImgHandler = () => {
    if (changeTimeout.current === null) {
      changeTimeout.current = setTimeout(() => {
        setImg((prev) => {
          if (prev === nexchemImg) {
            return nexchemImg2;
          } else {
            return nexchemImg;
          }
        });
        changeTimeout.current = null;
      }, 2000);
    }
  };

  return (
    <div
      onClick={() => {
        setBigCategory(false);
        setDetailCategory(false);
      }}
    >
      <StAbout.MainImg src="/assets/facade_.jpg">
        <StAbout.Font20 color="white">ABOUT US</StAbout.Font20>
        <StAbout.Font20 color="white">{AboutRelationshipText[0][0]}</StAbout.Font20>
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
            주요 관계사
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
      <StRelationShip.Compony>
        <StRelationShip.Combox>
          <StRelationShip.LogoBox>
            <StRelationShip.ComLogoNex src={nexchem} alt="nexchem" />
          </StRelationShip.LogoBox>
          <StRelationShip.ImgBox>
            <StRelationShip.Img src={img} alt="넥스켐" onMouseOver={changeImgHandler} />
          </StRelationShip.ImgBox>
          <StAbout.Font20>넥스켐은 WELTOUCH®의 미래 기술을 책임지는 R&D 전문 회사입니다.</StAbout.Font20>
          <StAbout.Font20>
            우수한 연구자들이 항균, 항바이러스, 미세먼지 제거,
            <br />
            VOCs 제거, 라돈제거, 방오 등의 연구에 매진하고 있습니다.
          </StAbout.Font20>
          <StAbout.Font20>
            가장 안정적이며 앞선 기술력을 통해 사람, 공간, 산업을 새롭게 연결할
            <br />
            WELTOUCH®의 미래를 준비하는 것이 넥스켐의 임무입니다.
          </StAbout.Font20>
        </StRelationShip.Combox>
        <StRelationShip.Combox>
          <StRelationShip.ComLogoMF src={mf2} alt="mf2" />
          <StRelationShip.ImgBox>
            <StRelationShip.ImgStatic src={mf2Img} alt="엠에프" />
          </StRelationShip.ImgBox>
          <StAbout.Font20>
            엠에프스퀘어 &#40;Multi functional filter&#41;는 WELTOUCH®의
            <br />
            FILTER 전문 기업으로 분할되어 출범한 기업으로 21세기의 오염된 환경 및<br />
            인류의 문제를 해결할 수 있는 WELTOUCH®의 기술을 활용하여
            <br />
            휘발성 유기화합물, 바이러스, 박테리아, 각종 악취 및 미세먼지 제거 기능을
            <br />
            하는 WELTOUCH® Coating Filter를 생산·공급하고 있습니다.
          </StAbout.Font20>
          <StAbout.Font20>
            저희 엠에프스퀘어는 앞으로도 다양한 소재의 필터 및 <br />
            고기능성 필터를 꾸준히 연구·개발하여
            <br />
            소비자 신뢰도 제고를 위해 항상 노력하는 회사가 되겠습니다.
          </StAbout.Font20>
        </StRelationShip.Combox>
      </StRelationShip.Compony>
    </div>
  );
};

export default AboutRelationship;

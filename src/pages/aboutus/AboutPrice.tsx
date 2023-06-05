import React from "react";
import { useNavigate } from "react-router-dom";
import { StAbout, StPrice, StSelect } from "./StAbout";
import clock from "../../img/icon/fa-solid fa-clock.png";
const AboutPrice: React.FC = () => {
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
      <StAbout.MainImg src="/assets/CK_tip034b14080351_2_tiny.jpg">
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
              <StSelect.OptionValue data-value="about/brand" onClick={clickHandler}>
                ABOUT US
              </StSelect.OptionValue>
              <StSelect.OptionValue data-value="product/noshine" onClick={clickHandler}>
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
        <StSelect.SelectOption>
          <StSelect.OptionValue
            onClick={(e: any) => {
              e.stopPropagation();
              setDetailCategory((prev) => !prev);
            }}
          >
            인증 & 수상내역
          </StSelect.OptionValue>
          {detailCategory && (
            <StSelect.OptionBox>
              <StSelect.OptionValue data-value="brand" onClick={detailClickHandler}>
                WELTOUCH® brand
              </StSelect.OptionValue>
              <StSelect.OptionValue data-value="relationship" onClick={detailClickHandler}>
                주요 관계사
              </StSelect.OptionValue>
              <StSelect.OptionValue data-value="price" onClick={detailClickHandler}>
                인증 & 수상내역
              </StSelect.OptionValue>
            </StSelect.OptionBox>
          )}
        </StSelect.SelectOption>
      </StSelect.SelectBox>
      <StPrice.Container>
        <StPrice.ComingImg src={clock} alt="time" />
        <span>Coming Soon</span>
      </StPrice.Container>
    </div>
  );
};

export default AboutPrice;

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "react-slick";

import com1 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/company1.png";
import com2 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/company2.png";
import com3 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/company3.png";
import com4 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/company4.png";
import com5 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/company5.png";
import com6 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/company6.png";

export const ModalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  pauseOnHover: false,
};

const AirCompany: React.FC = () => {
  return (
    <StWrapper>
      <StyledSlider {...ModalSettings}>
        <StBox>
          <StDescBox src={com1} />
        </StBox>
        <StBox>
          <StDescBox src={com2} />
        </StBox>
        <StBox>
          <StDescBox src={com3} />
        </StBox>
        <StBox>
          <StDescBox src={com4} />
        </StBox>
        <StBox>
          <StDescBox src={com5} />
        </StBox>
        <StBox>
          <StDescBox src={com6} />
        </StBox>
      </StyledSlider>
    </StWrapper>
  );
};

export default AirCompany;
const StWrapper = styled.div`
  position: relative;
  width: 1120px;
  height: 100%;
  margin: 60px auto;
`;
const StyledSlider = styled(Slider)`
  width: 100%;
  z-index: 1000;
  .slick-list {
    width: 100%;
    height: 100%;
  }
  .slick-track {
    width: 100%;
    height: 100%;
  }
  .slick-prev {
    cursor: pointer;
    &::before {
      color: black;
    }
  }
  .slick-next {
    cursor: pointer;
    &::before {
      color: black;
    }
  }
  .slick-dots {
    position: absolute;
  }
  .slick-dots .slick-active div {
    scale: 1.5;
  }
`;

const StBox = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 70px;
`;
const StDescBox = styled.img`
  width: 200px;
  height: 70px;
  margin: 0 auto;
`;

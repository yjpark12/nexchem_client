import React from "react";
import { StCommon } from "./Common";
import { styled } from "styled-components";

import img1_1 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img1_1.png";
import img1_2 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img1_2.jpg";
import img1_3 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img1_3.png";
import img1_4 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img1_4.png";

import img2_1 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img2_1.png";
import img2_2 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img2_2.png";

import img3_1 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img3_1.png";
import img3_2 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img3_2.png";

import img4_1 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img4_1.jpg";
import img4_2 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img4_2.jpg";
import img4_3 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img4_3.jpg";
import img4_4 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img4_4.jpg";
import img4_5 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img4_5.jpg";

import img5_1 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img5_1.jpg";
import img5_2 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img5_2.jpg";
import img5_3 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img5_3.jpg";
import img5_4 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img5_4.jpg";
import img5_5 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img5_5.jpg";

import img6_1 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img6_1.jpg";
import img6_2 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img6_2.jpg";
import img6_3 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img6_3.jpg";
import img6_4 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img6_4.jpg";
import img6_5 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img6_5.jpg";

import img7_1 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img7_1.jpg";
import img7_2 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img7_2.jpg";
import img7_3 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img7_3.jpg";
import img7_4 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img7_4.jpg";
import img7_5 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img7_5.jpg";

import img8_1 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img8_1.jpg";
import img8_2 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img8_2.jpg";
import img8_3 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img8_3.jpg";
import img8_4 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img8_4.jpg";
import img8_5 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img8_5.jpg";

import img9_1 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img9_1.jpg";
import img9_2 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img9_2.jpg";
import img9_3 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img9_3.jpg";
import img9_4 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img9_4.jpg";
import img9_5 from "../../img/products/기술 응용 분야/상시 방역 & 공기질 개선 기술/img9_5.jpg";
import { StFreshSecod } from "./FreshSecond";
import AirExample from "./AirExample";
import AirCompany from "./AirCompany";

const AirSecond = () => {
  return (
    <StCommon.Container>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>실제 적용 성적</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StAir.Img1Box>
          <StAir.Img11Box>
            <StAir.Img11 src={img1_1} alt="placeholder" />
            <StAir.Img12 src={img1_3} alt="placeholder" />
          </StAir.Img11Box>
          <StAir.Img12Box>
            <StAir.Img13 src={img1_2} alt="placeholder" />
            <StAir.Img14 src={img1_4} alt="placeholder" />
          </StAir.Img12Box>
        </StAir.Img1Box>
        <StFreshSecod.Explain>
          세종 정부청사에 행정지원센터에 WELTOUCH® 시공을 한 결과 HCHO.TVOC과 같은 유해물질이 실내 공기질 관리기준에
          비해 현저히 낮은 수치까지 하락하였습니다.
        </StFreshSecod.Explain>
      </StCommon.CoatingBox>

      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>VOCs 제거 성능</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StAir.Img2Box>
          <StAir.Img21 src={img2_1} alt="placeholder" />
          <StAir.Img22 src={img2_2} alt="placeholder" />
        </StAir.Img2Box>
        <StFreshSecod.Explain>
          자동차 부품 연구원에서 WELTOUCH®로 휘발성유기화합물(VOCs) 제거 Test를 진행한 결과 120분 뒤 Styrene과
          Formaldehyde가 미검출 되고 Toulene 또한 수치가 현저히 낮아졌습니다.
        </StFreshSecod.Explain>
      </StCommon.CoatingBox>

      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>실제 적용 성적</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StAir.Img3Box>
          <StAir.Img31 src={img3_1} alt="placeholder" />
          <StAir.Img32 src={img3_2} alt="placeholder" />
        </StAir.Img3Box>
        <StFreshSecod.Explain>
          한국의 대형 식품기업(F社)과 진행한 부유낙하균 제거 Test에서 뛰어난 효과 지속력으로 1회처리만으로 3개월 이상
          지속되는 효과를 보임.
          <br />
          (3개월 이상의 측정 필요성이 없어 Test는 3개월까지만 진행됨.)
        </StFreshSecod.Explain>
      </StCommon.CoatingBox>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>실제 적용 사례</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <AirExample
          title="세종정부종합청사 공정거래위원회 기자실"
          img1={img4_1}
          img2={img4_2}
          img3={img4_3}
          img4={img4_4}
          img5={img4_5}
        />
        <AirExample
          title="분당차병원 산부인과"
          img1={img5_1}
          img2={img5_2}
          img3={img5_3}
          img4={img5_4}
          img5={img5_5}
          explain="산부인과 내 수술실, 분만실, 신생아실, 인큐베이터실, 회복실 등 병원내 가장 민감한 공간에도 WELTOUCH®가 적용되었습니다."
        />
        <AirExample
          title="GS 그랑서울 (GS건설 본사 사옥)"
          img1={img6_1}
          img2={img6_2}
          img3={img6_3}
          img4={img6_4}
          img5={img6_5}
        />
        <AirExample
          title="판교호텔(코트야드 바이 메리어트)"
          img1={img7_1}
          img2={img7_2}
          img3={img7_3}
          img4={img7_4}
          img5={img7_5}
          explain="‘환경올림픽’이라 불리는 국제환경회의 람사르총회본부에 WELTOUCH®가 적용 되었습니다."
        />
        <AirExample
          title="The City 7 Hotel Pullman"
          img1={img8_1}
          img2={img8_2}
          img3={img8_3}
          img4={img8_4}
          img5={img8_5}
        />
        <AirExample
          title="파르나스 호텔 타워"
          img1={img9_1}
          img2={img9_2}
          img3={img9_3}
          img4={img9_4}
          img5={img9_5}
          explain="파르나스 호텔 타워 증축현장에서 WELTOUCH®가 적용 되었습니다."
        />
      </StCommon.CoatingBox>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>실제 WELTOUCH® 시공 업체</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <AirCompany />
      </StCommon.CoatingBox>
    </StCommon.Container>
  );
};

export default AirSecond;

const StAir = {
  Img1Box: styled.div`
    display: flex;
    gap: 100px;
  `,
  Img11Box: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 60px;
  `,
  Img12Box: styled.div`
    gap: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
  `,
  Img11: styled.img`
    width: 350px;
    height: 247px;
  `,
  Img12: styled.img`
    width: 380px;
    height: 282px;
  `,
  Img13: styled.img`
    width: 400px;
    height: 260px;
  `,
  Img14: styled.img`
    width: 538px;
    height: 200px;
  `,
  Img2Box: styled.div`
    display: flex;
    align-items: flex-end;
    gap: 80px;
    margin-top: 60px;
  `,
  Img21: styled.img`
    width: 270px;
    height: 305px;
  `,
  Img22: styled.img`
    width: 597px;
    height: 196px;
  `,
  Img3Box: styled.div`
    display: flex;
    align-items: flex-end;
    gap: 40px;
    margin-top: 60px;
  `,
  Img31: styled.img`
    width: 487px;
    height: 250px;
  `,
  Img32: styled.img`
    width: 487px;
    height: 321px;
  `,
};

import React from "react";
import { StCommon } from "./Common";

import img3 from "../../img/products/기술 응용 분야/수질 개선 기술/img3.png";
import img4 from "../../img/products/기술 응용 분야/수질 개선 기술/img4.png";
import img5 from "../../img/products/기술 응용 분야/수질 개선 기술/img5.png";
import { styled } from "styled-components";

const WaterSecond = () => {
  return (
    <StCommon.Container>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>총인 제거 성능</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StWaterSecond.Box1>
          <StWaterSecond.Img1 src={img3} alt="총인수치" />
          <p>
            총인제거 성능을 비교하기 위해 제작한 샘플모두 자연광하에서 방치후 시료를 체취한 결과 WELTOUCH®를 처리한
            곳에서 10분만에 총인량 100% 제거 되었습니다.
          </p>
        </StWaterSecond.Box1>
      </StCommon.CoatingBox>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>유수분리</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StWaterSecond.Box2>
          <StWaterSecond.Img2 src={img4} alt="처리사진" />
          <StWaterSecond.Box2Inner>
            <StWaterSecond.Img3 src={img5} alt="총인제거 결과" />
            <p>
              Filter의 폐오일 흡착정도와 폐오일 혼합액의 탁도를 확인한 결과 WELTOUCH®를 처리한 Filter의 우수한
              흡착력으로 Filter를 통과한 폐오일 혼합액이 맑아졌습니다.
            </p>
          </StWaterSecond.Box2Inner>
        </StWaterSecond.Box2>
      </StCommon.CoatingBox>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>유수분리 Test 영상</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <video controls width="1000" height="570" src="/assets/water.mp4" typeof="video/mp4" />
      </StCommon.CoatingBox>
    </StCommon.Container>
  );
};

export default WaterSecond;

const StWaterSecond = {
  Box1: styled.div`
    display: flex;
    padding: 0 255px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 60px;
    p {
      width: 50%;
      padding: 0 40px;
      font: normal normal 600 20px/28px Pretendard;
    }
  `,
  Box2: styled.div`
    display: flex;
    padding: 0 255px;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 60px;
  `,
  Box2Inner: styled.div`
    display: flex;
    width: 551px;
    flex-direction: column;
    gap: 30px;
    p {
      padding: 0 40px;
      font: normal normal 600 20px/28px Pretendard;
    }
  `,
  Img1: styled.img`
    width: 488px;
    height: 265px;
  `,
  Img2: styled.img`
    width: 424px;
    height: 265px;
  `,
  Img3: styled.img`
    width: 551px;
    height: 150px;
  `,
};

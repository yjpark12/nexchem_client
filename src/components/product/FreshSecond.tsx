import React from "react";
import { StCommon } from "./Common";

import img3 from "../../img/products/기술 응용 분야/신선도 유지 기술/56161.png";
import img4 from "../../img/products/기술 응용 분야/신선도 유지 기술/dust_explain.png";

import banana1 from "../../img/products/기술 응용 분야/신선도 유지 기술/banana1.jpg";
import banana2 from "../../img/products/기술 응용 분야/신선도 유지 기술/banana2.jpg";
import banana3 from "../../img/products/기술 응용 분야/신선도 유지 기술/banana3.jpg";
import banana4 from "../../img/products/기술 응용 분야/신선도 유지 기술/banana4.jpg";
import { styled } from "styled-components";

const FreshSecond = () => {
  return (
    <StCommon.Container>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>향곰팡이 성능</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StCommon.DustBox gap="200px">
          <StFreshSecod.ReportImg src={img3} alt="placeholder" />
          <StFreshSecod.DustImg src={img4} alt="placeholder" />
        </StCommon.DustBox>
        <StFreshSecod.Explain>
          WELTOUCH®를 처리한 Tray box와 아무것도 처리하지 않은 Tray box에서 곰팡이균의 번식을 관찰한 결과
          <br />
          아무것도 처리하지 않은 Tray box는 시험편의 60%이상 균사의 번식이 관찰된 반면 WEHLTOUCH®를 처리한 Tray
          <br />
          box에서는 균사의 번식이 전혀 관찰되지 않았습니다.
        </StFreshSecod.Explain>
      </StCommon.CoatingBox>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>실제 적용 Test</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StFreshSecod.BananaImgBox1>
          <StFreshSecod.BananaImg1 src={banana1} alt="placeholder" />
          <StFreshSecod.BananaImg2 src={banana2} alt="placeholder" />
        </StFreshSecod.BananaImgBox1>
        <StFreshSecod.BananaImgBox2>
          <StFreshSecod.BananaImg3 src={banana3} alt="placeholder" />
          <StFreshSecod.BananaImg3 src={banana4} alt="placeholder" />
        </StFreshSecod.BananaImgBox2>
        <StFreshSecod.Explain>
          WELTOUCH®를 처리된 곳의 바나나의 숙성이 처리하지 않은 곳에 비해 바나나의 숙성 속도가 현저히 느려졌다.
        </StFreshSecod.Explain>
      </StCommon.CoatingBox>
    </StCommon.Container>
  );
};

export default FreshSecond;

export const StFreshSecod = {
  ReportImg: styled.img`
    height: 305px;
    margin-top: 40px;
  `,
  DustImg: styled.img`
    height: 224px;
  `,
  BananaImgBox1: styled.div`
    width: 1200px;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    gap: 20px;
  `,
  BananaImgBox2: styled.div`
    width: 1200px;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    gap: 100px;
  `,
  BananaImg1: styled.img`
    width: 350px;
    height: 468px;
  `,
  BananaImg2: styled.img`
    width: 620px;
    height: 468px;
  `,
  BananaImg3: styled.img`
    width: 400px;
    height: 500px;
  `,
  Explain: styled.p`
    width: 60%;
    margin-top: 60px;
    margin-bottom: 100px;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
  `,
};

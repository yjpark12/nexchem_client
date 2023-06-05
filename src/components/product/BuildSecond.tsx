import React from "react";
import { StCommon } from "./Common";
import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { transferAtom } from "../../recoil/transferAtom";

import blockKr from "../../img/products/기술 응용 분야/건축 자재 적용 기술/block.png";
import blockEn from "../../img/products/기술 응용 분야/건축 자재 적용 기술/block_eng.png";
import blockInd from "../../img/products/기술 응용 분야/건축 자재 적용 기술/block_IND.png";
import blockEs from "../../img/products/기술 응용 분야/건축 자재 적용 기술/block_ES.png";

import pannelKr from "../../img/products/기술 응용 분야/건축 자재 적용 기술/panel_eng.png";
import pannelEn from "../../img/products/기술 응용 분야/건축 자재 적용 기술/panel_eng.png";
import pannelInd from "../../img/products/기술 응용 분야/건축 자재 적용 기술/panel_IND.png";
import pannelEs from "../../img/products/기술 응용 분야/건축 자재 적용 기술/panel_ES.png";

import img5 from "../../img/products/기술 응용 분야/건축 자재 적용 기술/Super-hydrophile.jpg";
const transferImg = [
  [blockKr, pannelKr],
  [blockEn, pannelEn],
  [blockInd, pannelInd],
  [blockEs, pannelEs],
];
const BuildSecond = () => {
  const language = useRecoilValue(transferAtom);
  return (
    <StCommon.Container>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>WELTOUCH® Self cleaning 효과</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StWaterSecond.Box1>
          <StWaterSecond.Box2Inner>
            <StWaterSecond.Img1 src={transferImg[language][0]} alt="총인수치" />
            <p>블록에 WELTOUCH®를 코팅하고 장기간 관찰한 결과 검은색 오염이 사라지고 더 이상 발생되지 않았다.</p>
          </StWaterSecond.Box2Inner>
          <StWaterSecond.Box2Inner>
            <StWaterSecond.Img1 src={transferImg[language][1]} alt="총인수치" />
            <p>샌드위치 판넬에 WELTOUCH®를 처리하고 장기간 관찰한 결과 기존 바탕 상태 그대로 깨끗함을 유지하였다.</p>
          </StWaterSecond.Box2Inner>
        </StWaterSecond.Box1>
      </StCommon.CoatingBox>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>초신수성의 성질</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StWaterSecond.Box2>
          <StWaterSecond.Img3 src={img5} alt="총인제거 결과" />
          <p>
            WELTOUCH®는 초친수성 물질로 코팅된 건축 외장재에 기름먼지나 유기물이 달라 붙는 것을 방지하며, 빗물만으로도
            오염물을 제거합니다.
          </p>
        </StWaterSecond.Box2>
      </StCommon.CoatingBox>
    </StCommon.Container>
  );
};

export default BuildSecond;

const StWaterSecond = {
  Box1: styled.div`
    display: flex;
    padding: 0 255px;
    justify-content: flex-start;
    align-items: center;
    gap: 60px;
    margin-top: 60px;
  `,
  Box2: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 255px;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-top: 60px;
    p {
      padding: 0 40px;
      width: 1015px;
      font: normal normal 600 20px/28px Pretendard;
    }
  `,
  Box2Inner: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    p {
      padding: 0 40px;

      font: normal normal 600 20px/28px Pretendard;
    }
  `,
  Img1: styled.img`
    width: 645px;
    height: 400px;
  `,
  Img3: styled.img`
    width: 1015px;
    height: 445px;
  `,
};

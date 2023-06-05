import React from "react";
import { styled } from "styled-components";
interface props {
  title: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  explain?: string;
}
const AirExample: React.FC<props> = ({ title, img1, img2, img3, img4, img5, explain }) => {
  return (
    <StAirExample.Container>
      <StAirExample.BoxContainer>
        <StAirExample.Box1>
          <span>{title}</span>
          <img src={img1} alt="이미지 1" />
        </StAirExample.Box1>
        <div>
          <StAirExample.Box2>
            <img src={img2} alt="이미지 2" />
            <img src={img3} alt="이미지 3" />
          </StAirExample.Box2>
          <StAirExample.Box2>
            <img src={img4} alt="이미지 4" />
            <img src={img5} alt="이미지 5" />
          </StAirExample.Box2>
        </div>
      </StAirExample.BoxContainer>
      {explain && <StAirExample.Explain>{explain}</StAirExample.Explain>}
    </StAirExample.Container>
  );
};

export default AirExample;

const StAirExample = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 60px;
  `,
  BoxContainer: styled.div`
    display: flex;
  `,
  Box1: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 400px;
    height: 465px;
    span {
      font-family: "Pretendard";
      width: 90%;
      background-color: #ddd;
      text-align: center;
      font-weight: 700;
      font-size: 20px;
      line-height: 32px;
    }
    img {
      width: 382px;
      height: 286px;
    }
  `,
  Box2: styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    img {
      width: 285px;
      height: 215px;
    }
  `,
  Explain: styled.p`
    width: 90%;
  `,
};

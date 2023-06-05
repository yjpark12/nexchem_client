import { styled } from "styled-components";

export const StProduct = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 100px;
  `,
  FlexCenter: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
  `,
  Article: styled.article`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 80px 255px 0 255px;
  `,
  Img500: styled.img`
    width: 500px;
    border-radius: 20px;
    box-shadow: 0px 0px 14px #323f4128;
  `,
  Gap60: styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
  `,
};
export const StNoshine = {
  Container: styled.div<{ bgColor: string; pt?: string; color?: string; pl?: string; pb?: string }>`
    display: flex;
    width: 1920px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 150px 255px;
    padding-top: ${({ pt }) => pt ?? "150px"};
    padding-bottom: ${({ pb }) => pb ?? "150px"};
    padding-left: ${({ pl }) => pl ?? "255px"};
    padding-right: ${({ pl }) => pl ?? "255px"};
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    text-align: center;
  `,
  GenerationBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 76px;
    margin-top: 80px;
  `,
  Box: styled.div<{ bgColor?: string; color?: string }>`
    display: flex;
    flex-direction: column;
    height: 362px;
    padding: 40px;
    color: ${({ color }) => color ?? "black"};
    gap: 24px;
    background-color: ${({ bgColor }) => bgColor};
    box-shadow: 0px 0px 14px #323f4128;
    border-radius: 20px;
  `,
  TextBox: styled.div`
    display: flex;
    font: normal normal normal 18px/21px Pretendard;
    flex-direction: column;
    width: 274px;
    gap: 24px;
  `,
  Arrow: styled.span`
    font: normal normal normal 40px/48px Font Awesome 6 Free Solid;
    letter-spacing: 0px;
    color: #555555;
  `,
  GroupImg: styled.img`
    width: 998px;
  `,
  ContentArticle: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 400px;
    overflow: hidden;
    align-items: center;
  `,
  Explain: styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px;
  `,
  ImgBox: styled.div`
    width: 50%;
    overflow: hidden;
  `,
  ExplainImg: styled.img`
    width: 120%;
  `,
};

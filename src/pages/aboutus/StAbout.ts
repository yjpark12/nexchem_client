import styled from "styled-components";
export const StAbout = {
  MainImg: styled.div<{ src: string }>`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: ${({ src }) => `url(${src})`};
    background-size: 100%;
    background-position: center;
  `,
  Font20: styled.p<{ ta?: string; color?: string }>`
    font: normal normal 300 20px/28px Pretendard;
    color: ${({ color }) => color ?? "#555555"};
    text-align: ${({ ta }) => ta ?? "left"};
  `,
  Font24: styled.p<{ ta?: string; color?: string }>`
    font: normal normal normal 24px/34px RIDIBatang;
    color: ${({ color }) => color ?? "#555555"};
    text-align: ${({ ta }) => ta ?? "left"};
  `,
  FontBold: styled.p<{ ta?: string; color?: string }>`
    font: normal normal bold 24px/34px Pretendard;
    color: ${({ color }) => color ?? "#555555"};
    text-align: ${({ ta }) => ta ?? "left"};
  `,
  FontMidium: styled.p<{ ta?: string; color?: string }>`
    font: normal normal medium 18px/21px Pretendard;
    color: ${({ color }) => color ?? "#555555"};
    text-align: ${({ ta }) => ta ?? "left"};
  `,
  FontMidiumBold: styled.p<{ ta?: string; color?: string }>`
    font: normal normal bold 32px/45px Pretendard;
    color: ${({ color }) => color ?? "#555555"};
    text-align: ${({ ta }) => ta ?? "left"};
  `,
  FontBigBold: styled.p<{ ta?: string; color?: string }>`
    font: normal normal bold 48px/67px Pretendard;
    color: ${({ color }) => color ?? "#555555"};
    text-align: ${({ ta }) => ta ?? "left"};
  `,
  MB: styled.div<{ mb?: string }>`
    margin-bottom: ${({ mb }) => mb ?? "0px"};
  `,
};
export const StSelect = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  SelectBox: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 255px;
    width: 1920px;
    height: 72px;
    border-bottom: 1px solid #ccc;
  `,
  SelectOption: styled.div`
    width: 330px;
    height: 72px;
    font: normal normal 600 20px/28px Pretendard;
    border: 1px solid #ccc;
    border-top: none;
    &focus {
      border: 1px solid #ccc;
    }
  `,
  OptionBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
  `,
  OptionValue: styled.div`
    width: 330px;
    height: 72px;
    padding: 24px;
    display: flex;
    justify-content: center;
    font: normal normal 600 20px/28px Pretendard;
    cursor: pointer;
    background-color: white;
    z-index: 20;
    border: 1px solid #ccc;
    border-top: none;
  `,
  OptionOtherValue: styled.div`
    width: 330px;
    height: 72px;
    padding: 24px;
    display: flex;
    justify-content: center;
    font: normal normal 600 20px/28px Pretendard;
    cursor: pointer;
    background-color: white;
    z-index: 20;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  `,
};
export const StBrand = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 100px 255px;
  `,
  Article: styled.article`
    display: flex;
    flex-direction: column;
    gap: 60px;
    font: normal normal 300 20px/28px Pretendard;
  `,
  Img: styled.img`
    width: 35.5%;
    height: 35.5%;
    box-shadow: 0px 0px 14px #323f4128;
    border-radius: 20px;
  `,
  LogoImg: styled.img`
    width: 51px;
    height: 24px;
  `,
  Logo: styled.img`
    width: 95px;
    height: 10px;
  `,
};
export const StRelationShip = {
  Combox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  `,
  ImgBox: styled.div`
    width: 655px;
    height: 385px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 0px 14px #323f4128;
  `,
  LogoBox: styled.div`
    width: 258px;
    height: 139px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `,
  ComLogoMF: styled.img`
    width: 258px;
    height: 139px;
  `,
  ComLogoNex: styled.img`
    width: 258px;
  `,
  Img: styled.img`
    width: 100%;
    transition: all 1s ease;
    &:hover {
      transform: scale(1.1);
    }
  `,
  ImgStatic: styled.img`
    width: 100%;
  `,
  Compony: styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    padding: 100px 255px;
  `,
};
export const StPrice = {
  Container: styled.div`
    height: 518px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ComingImg: styled.img`
    width: 60px;
  `,
  ComingText: styled.p`
    width: 176px;
    height: 27px;
    font: normal normal medium 24px/27px Gmarket Sans;
    color: #555555;
  `,
};
export const StEmpty = styled.div`
  height: 79.9px;
`;
export const StArrow = {
  Box: styled.div<{ bgColor?: string; border?: string }>`
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 11px 40px;
    margin-top: 60px;
    background-color: ${({ bgColor }) => bgColor};
    transition: all 300ms ease;
    border: ${({ border }) => border ?? "1px solid #00afc8"};
    border-radius: 4px;
    color: ${({ bgColor }) => (bgColor ? "white" : "#00afc8")};
    gap: 16px;
    cursor: pointer;
    font: normal normal 600 18px/21px Pretendard;
    &:hover {
      img {
        width: 46px;
      }
    }
    img {
      width: 16px;
      transition: all 300ms ease;
    }
  `,
};

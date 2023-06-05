import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { mediaAtom } from "../../recoil/mediaAtom";
import { client } from "../../axios/axios";
import Header from "../../components/Header";
import { StAbout, StEmpty, StSelect } from "../aboutus/StAbout";
import Footer from "../../components/Footer";
import { styled } from "styled-components";

const DetailMedia = () => {
  const [data, setData] = useRecoilState(mediaAtom);
  const navigate = useNavigate();
  const { id } = useParams();
  const detaildata = data.filter((el) => el?.mnum === +id!)[0];
  const [bigCategory, setBigCategory] = React.useState(false);
  const clickHandler = (e: any) => {
    navigate(`/${e.target.dataset.value}`);
  };
  React.useEffect(() => {
    if (data.length === 0) {
      const fetching = async () => {
        const result = await client.get("/media");
        setData(result.data);
      };
      fetching();
    }
  }, []);
  console.log(detaildata);
  return (
    <>
      <Header />
      <StEmpty />
      <div onClick={() => setBigCategory(false)}>
        <StAbout.MainImg src="/assets/AdobeStock_285091710_2.jpg">
          <StAbout.FontBigBold color="white">Media</StAbout.FontBigBold>
        </StAbout.MainImg>
        <StSelect.SelectBox>
          <StSelect.SelectOption>
            <StSelect.OptionValue
              onClick={(e: any) => {
                e.stopPropagation();
                setBigCategory((prev) => !prev);
              }}
            >
              Media
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
        </StSelect.SelectBox>
        <div>
          <StDeatailMedia.TitleBox>
            <span>제목</span>
            <span>{detaildata?.title}</span>
          </StDeatailMedia.TitleBox>
          <div>
            <StDeatailMedia.ContentLabel>내용</StDeatailMedia.ContentLabel>
            <StDeatailMedia.ContentContainer
              dangerouslySetInnerHTML={{ __html: detaildata?.main_text }}
            ></StDeatailMedia.ContentContainer>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailMedia;

const StDeatailMedia = {
  TitleBox: styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    font: normal normal 600 20px/28px Pretendard;
  `,
  ContentLabel: styled.p`
    width: 80%;
    margin: 10px auto;
    font: normal normal 500 16px/24px Pretendard;
  `,
  ContentContainer: styled.div`
    width: 80%;
    height: 500px;
    overflow-y: scroll;
    margin: 0 auto;
    border: 1px solid grey;
    padding: 20px;
    background-color: whitesmoke;
  `,
};

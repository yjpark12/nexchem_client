import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const MediaArticle: React.FC<{ el: any }> = ({ el }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/media/${el?.mnum}`);
  };
  console.log(el);
  return (
    <StMediaArticle.Container onClick={onClickHandler}>
      <StMediaArticle.Thumbnail
        dangerouslySetInnerHTML={{ __html: `<img ${el?.main_image}>` || "" }}
      ></StMediaArticle.Thumbnail>
      <StMediaArticle.Summary>{el?.title}</StMediaArticle.Summary>
    </StMediaArticle.Container>
  );
};

export default MediaArticle;

const StMediaArticle = {
  Container: styled.div`
    width: 330px;
    height: 260px;
    border-radius: 20px;
    border: 1px solid #dfdfdf;
    overflow: hidden;
  `,
  Thumbnail: styled.div`
    width: 100%;
    height: 186px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #dfdfdf;
    overflow: hidden;
    img {
      object-fit: cover;
    }
  `,
  Summary: styled.div`
    width: 100%;
    height: 74px;
    padding: 16px 20px;
    font-size: 16px;
    color: #555555;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
  `,
};

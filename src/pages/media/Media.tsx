import React from "react";
import Header from "../../components/Header";
import { StAbout, StEmpty, StSelect } from "../aboutus/StAbout";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import search from "../../img/icon/search.svg";
import { styled } from "styled-components";
import { client } from "../../axios/axios";
import MediaArticle from "../../components/media/MediaArticle";

import left from "../../img/icon/left.png";
import right from "../../img/icon/right.png";
import dleft from "../../img/icon/doubleleft.png";
import dright from "../../img/icon/doubleright.png";
import { useRecoilState } from "recoil";
import { mediaAtom } from "../../recoil/mediaAtom";

const pageCnt = 12;

const Media: React.FC = () => {
  const [bigCategory, setBigCategory] = React.useState(false);
  const [data, setData] = React.useState<any[]>();
  // const [allData, setAllData] = React.useState<any[]>();
  const [allData, setAllData] = useRecoilState(mediaAtom);
  const [totalPage, setTotalPage] = React.useState<any[]>();
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState<0 | 1>(0);
  const [searchInput, setSearchInput] = React.useState("");
  const navigate = useNavigate();

  const changeHandler = (e: any) => {
    setSearchInput(e.target.value);
  };

  const searchHandler = async () => {
    if (searchInput !== "") {
      const result = [...allData]?.filter((el: any) => el?.title.includes(searchInput)) || [];
      const paging = [];
      for (let i = 0; i < Math.ceil(result?.length / 20); i++) {
        paging.push(i + 1);
      }
      setTotalPage(paging);
      const list = result?.filter((el: any, i: number) => i >= 0 + (page - 1) * pageCnt && i < page * pageCnt);
      setData(list);
      setSearchInput("");
    } else {
      setData(allData);
    }
  };
  const clickHandler = (e: any) => {
    navigate(`/${e.target.dataset.value}`);
  };
  React.useEffect(() => {
    if (sort === 0) {
      const sortedByDateList = [...allData]?.sort((a: any, b: any) => {
        const dateA = new Date(a?.regDate);
        const dateB = new Date(b?.regDate);
        return dateB.getTime() - dateA.getTime();
      });
      setData(sortedByDateList?.filter((el: any, i: number) => i >= 0 + (page - 1) * pageCnt && i < page * pageCnt));
    } else {
      const sortedByDateList = [...allData]?.sort((a: any, b: any) => {
        const dateA = new Date(a?.regDate);
        const dateB = new Date(b?.regDate);
        return dateA.getTime() - dateB.getTime();
      });
      setData(sortedByDateList?.filter((el: any, i: number) => i >= 0 + (page - 1) * pageCnt && i < page * pageCnt));
    }
  }, [sort, allData]);

  React.useEffect(() => {
    const list = allData?.filter((el: any, i: number) => i >= 0 + (page - 1) * pageCnt && i < page * pageCnt);
    setData(list);
  }, [page, allData]);

  React.useEffect(() => {
    const fetching = async () => {
      const result = await client.get("/media");
      setAllData(result.data);
      const paging = [];
      for (let i = 0; i < Math.ceil(result?.data.length / pageCnt); i++) {
        paging.push(i + 1);
      }
      setTotalPage(paging);
    };
    fetching();
  }, []);

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
          <StMedia.UpBar>
            <StMedia.SortBox>
              <input type="radio" name="sort" id="new" value="최신순" defaultChecked onChange={() => setSort(0)} />
              최신순
              <input type="radio" name="sort" id="old" value="등록순" onChange={() => setSort(1)} />
              등록순
            </StMedia.SortBox>
            <StMedia.InputBox>
              <StMedia.Input type="text" value={searchInput} onChange={changeHandler} />
              <StMedia.SearchIcon src={search} alt="" onClick={searchHandler} />
            </StMedia.InputBox>
          </StMedia.UpBar>
          <StMedia.ArticleList>
            {data?.length === 0 && <p>아직 등록된 게시글이 없습니다.</p>}
            {data?.length !== 0 && (
              <>
                {data?.map((el, i) => (
                  <MediaArticle key={`media게시글${i}`} el={el} />
                ))}
              </>
            )}
          </StMedia.ArticleList>
          <StMedia.PageBox>
            <StMedia.BtnBox onClick={() => setPage(1)}>
              <StMedia.PageImg src={dleft} alt="first" />
            </StMedia.BtnBox>
            <StMedia.BtnBox
              onClick={() => {
                if (page > 1) setPage((prev) => prev - 1);
              }}
            >
              <StMedia.PageImg src={left} alt="prev" />
            </StMedia.BtnBox>
            {totalPage?.map((el, i) => (
              <StMedia.Pagenation key={`페이징${i}`} onClick={() => setPage(el)}>
                {el}
              </StMedia.Pagenation>
            ))}
            <StMedia.BtnBox
              onClick={() => {
                if (page < totalPage?.length!) setPage((prev) => prev + 1);
              }}
            >
              <StMedia.PageImg src={right} alt="next" />
            </StMedia.BtnBox>
            <StMedia.BtnBox onClick={() => setPage(totalPage?.length!)}>
              <StMedia.PageImg src={dright} alt="last" />
            </StMedia.BtnBox>
          </StMedia.PageBox>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Media;
export const StMedia = {
  UpBar: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 255px;
    margin-top: 100px;
  `,
  SortBox: styled.div`
    display: flex;
    gap: 26px;
  `,
  InputBox: styled.div`
    position: relative;
    width: 330px;
    height: 40px;
  `,
  Input: styled.input`
    width: 100%;
    height: 100%;
  `,
  SearchIcon: styled.img`
    position: absolute;
    width: 40px;
    right: 10px;
    object-fit: cover;
  `,
  ArticleList: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 100px 150px 60px 150px;
    gap: 30px;
  `,
  PageBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    margin-top: 30px;
    gap: 10px;
  `,
  Pagenation: styled.div`
    cursor: pointer;
    width: 34px;
    height: 34px;
    font: normal normal bold 16px/19px Pretendard;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  BtnBox: styled.div`
    width: 34px;
    height: 34px;
    border: 1px solid #333333;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  PageImg: styled.img`
    width: 16px;
    height: 22px;
  `,
};

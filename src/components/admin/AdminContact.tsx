import React from "react";
import { client } from "../../axios/axios";
import { styled } from "styled-components";
import { StAdminContactList } from "./AdminContactList";
import { StMedia } from "../../pages/media/Media";

import left from "../../img/icon/left.png";
import right from "../../img/icon/right.png";
import dleft from "../../img/icon/doubleleft.png";
import dright from "../../img/icon/doubleright.png";
import AdminDetailModal from "./AdminDetailModal";

const pageCnt = 10;

const AdminContact = () => {
  const [data, setData] = React.useState<any>([]);
  const [allData, setAllData] = React.useState<any[]>();
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState<any[]>();

  React.useEffect(() => {
    const list = allData?.filter((el: any, i: number) => i >= 0 + (page - 1) * pageCnt && i < page * pageCnt);
    setData(list);
  }, [page, allData]);
  React.useEffect(() => {
    const fetching = async () => {
      const result = await client.get("/");
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
    <StAdminContact.Container>
      <StAdminContact.Box>
        <StAdminContactList.Container>
          <StAdminContactList.Idx>구분</StAdminContactList.Idx>
          <StAdminContactList.CompanyName>회사명</StAdminContactList.CompanyName>
          <StAdminContactList.Name>이름</StAdminContactList.Name>
          <StAdminContactList.Tel>연락처</StAdminContactList.Tel>
          <StAdminContactList.Email>이메일</StAdminContactList.Email>
        </StAdminContactList.Container>
        {data?.map((el: any, i: number) => (
          <AdminDetailModal key={`모달${i}`} el={el} i={i} />
        ))}
      </StAdminContact.Box>
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
    </StAdminContact.Container>
  );
};

export default AdminContact;

const StAdminContact = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    padding: 60px;
  `,
  Box: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
  `,
};

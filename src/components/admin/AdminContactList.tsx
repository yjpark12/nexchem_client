import React from "react";
import { styled } from "styled-components";

const AdminContactList: React.FC<{ el: any; i: number; setModal: () => void }> = ({ el, i, setModal }) => {
  return (
    <StAdminContactList.Container onClick={setModal}>
      <StAdminContactList.Idx>{i + 1}</StAdminContactList.Idx>
      <StAdminContactList.CompanyName>{el?.address}</StAdminContactList.CompanyName>
      <StAdminContactList.Name>{el?.name}</StAdminContactList.Name>
      <StAdminContactList.Tel>{el?.phoneNumber}</StAdminContactList.Tel>
      <StAdminContactList.Email>{el?.email}</StAdminContactList.Email>
    </StAdminContactList.Container>
  );
};

export default AdminContactList;

export const StAdminContactList = {
  Container: styled.div`
    width: 85%;
    display: flex;
    border: 1px solid #ccc;
    font-size: 18px;
    text-align: center;
    align-items: center;
    height: 35px;
  `,
  Idx: styled.span`
    width: 10%;
    height: 100%;
    border-right: 1px solid #ccc;
  `,
  CompanyName: styled.span`
    width: 30%;
    height: 100%;
    border-right: 1px solid #ccc;
  `,
  Name: styled.span`
    width: 15%;
    height: 100%;
    border-right: 1px solid #ccc;
  `,
  Tel: styled.span`
    width: 20%;
    height: 100%;
    border-right: 1px solid #ccc;
  `,
  Email: styled.span`
    width: 25%;
    height: 100%;
  `,
};

import { atom } from "recoil";

export const InquiryAtom = atom({
  key: "guestInquiry", // 유니크한 이름 짓기
  default: {
    interestedField: "",
    detail: "",
    file: "",
    sample: false,
    businessType: "",
    companyName: "",
    name: "",
    phoneNumber: "",
    email: "",
    homePageAddress: "",
    introduction: "",
  }, // default value (aka initial value) 이니셜스테이트
});

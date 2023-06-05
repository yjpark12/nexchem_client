import { atom } from "recoil";

export const transferAtom = atom({
  key: "transferAtom", // 유니크한 이름 짓기
  default: 0,
});

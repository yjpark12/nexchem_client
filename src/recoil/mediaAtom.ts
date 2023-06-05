import { atom } from "recoil";
interface media {
  mnum: number;
  main_image: string;
  main_text: string;
  title: string;
  regDate: Date;
}
export const mediaAtom = atom<media[]>({
  key: "mediaAtom",
  default: [], // default value (aka initial value) 이니셜스테이트
});

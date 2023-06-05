import axios from "axios";
// import { cookie } from "../constants/cookies";

export const client = axios.create({
  baseURL: process.env.REACT_APP_MAIN_SERVER,
});

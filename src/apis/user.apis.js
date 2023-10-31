import { isAxiosError } from "axios";
import { https } from "../functions/axios";
import { MyInfoDto } from "./dtos/user.dto";

export const getMyInfo = async () => {
  const myInfo = await https.get("user");
  if (isAxiosError(myInfo) && myInfo.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return new MyInfoDto(myInfo.response);
};

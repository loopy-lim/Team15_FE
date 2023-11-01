import { useQuery } from "@tanstack/react-query";
import { getMyInfo } from "../apis/user.apis";
import { MyInfoDto } from "../apis/dtos/user.dto";
/**
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @return {{myInfo: MyInfoDto}}
 */
export const useMyInfoQuery = (config) => {
  const { data: myInfo } = useQuery(["myInfo"], () => getMyInfo(), {
    ...config,
    suspense: true,
  });

  return { myInfo };
};

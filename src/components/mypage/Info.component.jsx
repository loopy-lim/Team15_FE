import { useMyInfoQuery } from "../../hooks/useMyInfoQuery";
import { Txt } from "../common/Txt.component";
import { Button } from "../common/Button.component";

export const MyPageInfo = () => {
  const { myInfo } = useMyInfoQuery();

  return (
    <div className="flex gap-4 items-center py-6 bg-white">
      <div className="flex-1">
        <img className="rounded-full" src={myInfo.idCardImagePath} alt="user" />
      </div>
      <div className="flex flex-col flex-[2_0_0] gap-2">
        <Txt>{myInfo.universityName}</Txt>
        <Txt typography="h2">{myInfo.nickname}</Txt>
        <div className="w-fit">
          <Button color="white" size="small">
            프로필 편집
          </Button>
        </div>
      </div>
    </div>
  );
};

import { BottomFullLink } from "../../components/common/BottomFullLink.component";
import { Txt } from "../../components/common/Txt.component";
import { SlidePannels } from "../../components/sign/SlidePannel.component";
import { MainContainer } from "../../components/common/MainContainer.component";
import { SignInformation } from "../../components/sign/Information.component";
import { Icon } from "../../components/common/Icon.component";

export const SchoolCardPage = () => {
  return (
    <MainContainer>
      <div className="mt-20">
        <SlidePannels maxLengh={3} selectedIndex={2} />
      </div>
      <div className="flex flex-col items-center">
        <SignInformation title={`당신의 학교를\n알고 싶어요`} />
        <div class="w-80 h-44 border-2 border-[#62AB05] rounded-xl"></div>
        <button className="border border-gray-400 rounded-full p-2 mt-28">
          <Icon type="camera" />
        </button>
        <Txt typography="subtitle" colors="secondaryLight" className="my-3">
          학생증을 촬영해주세요
        </Txt>
      </div>
      <BottomFullLink title="다음으로" to={`/`} />
    </MainContainer>
  );
};

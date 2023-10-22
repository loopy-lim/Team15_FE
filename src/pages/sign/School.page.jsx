import { BottomFullLink } from "../../components/common/BottomFullLink.component.jsx";
import { Input } from "../../components/sign/Input.component.jsx";
import { SlidePannels } from "../../components/sign/SlidePannel.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { SignInformation } from "../../components/sign/Information.component.jsx";

export const SchoolPage = () => {
  return (
    <MainContainer>
      <div className="mt-20">
        <SlidePannels maxLengh={3} selectedIndex={2} />
      </div>

      <div className="flex flex-col items-center">
        <SignInformation title={`당신의 학교를\n알고 싶어요`} />
        <div className="w-3/4">
          <Input />
        </div>
      </div>

      <BottomFullLink title="인증하기" to={`/signup/schoolcard`} />
    </MainContainer>
  );
};

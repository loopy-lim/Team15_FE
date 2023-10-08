import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { InputPassword, InputText } from "../components/sign/Input.component";
import { SlidePannels } from "../components/sign/SlidePannel.component";
import { SignInformation } from "../components/sign/Information.component";
import { MainContainer } from "../components/common/MainContainer.component";

export const AccountPage = () => {
  return (
    <MainContainer>
      <div className="mt-20">
        <SlidePannels maxLengh={3} selectedIndex={1} />
      </div>
      <div className="flex flex-col items-center">
        <SignInformation title={`이메일과 비밀번호를\n설정하세요`} />
        <div className="w-3/4">
          <InputText label="Email" />
          <InputPassword label="Password" />
        </div>
      </div>
      <BottomFullLink title="다음으로" to={`/signup/school`} />
    </MainContainer>
  );
};

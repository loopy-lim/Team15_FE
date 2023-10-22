import { BottomFullLink } from "../../components/common/BottomFullLink.component.jsx";
import { Txt } from "../../components/common/Txt.component.jsx";
import { Input } from "../../components/sign/Input.component.jsx";
import { SlidePannels } from "../../components/sign/SlidePannel.component.jsx";
import { SignInformation } from "../../components/sign/Information.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";

export const SignupPage = () => {
  return (
    <MainContainer>
      <div className="mt-20">
        <SlidePannels maxLengh={3} selectedIndex={0} />
      </div>

      <div className="flex flex-col items-center">
        <SignInformation title={`당신을 어떤 이름으로\n부르면 좋을까요?`} />
        <div className="flex flex-col w-full items-center">
          <div className="w-3/4">
            <Input />
          </div>
        </div>

        <Txt typography="subtitle" colors="secondaryLight" className="my-1">
          2글자에서 10글자 이내로 사용할 수 있어요.
        </Txt>
      </div>

      <BottomFullLink title="다음으로" to={`/signup/account`} />
    </MainContainer>
  );
};

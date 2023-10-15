import { BottomFullLink } from "../../components/common/BottomFullLink.component";
import { Txt } from "../../components/common/Txt.component";
import { Input } from "../../components/sign/Input.component";
import { SlidePannels } from "../../components/sign/SlidePannel.component";
import { SignInformation } from "../../components/sign/Information.component";
import { MainContainer } from "../../components/common/MainContainer.component";
import { useState } from "react";

export const SignupPage = () => {
  const [canNext, useCanNext] = useState(false);

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

      <BottomFullLink
        title="다음으로"
        to={`/signup/account`}
        isActive={canNext}
      />
    </MainContainer>
  );
};

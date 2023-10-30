import { BottomFullLink } from "../../components/common/BottomFullLink.component.jsx";
import { Txt } from "../../components/common/Txt.component.jsx";
import { Input } from "../../components/sign/Input.component.jsx";
import { SlidePannels } from "../../components/sign/SlidePannel.component.jsx";
import { SignInformation } from "../../components/sign/Information.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { useState } from "react";

export const SignupPage = () => {
  const [name, setName] = useState("");
  const [canNext, setCanNext] = useState(false);

  const handleNameChange = (newName) => {
    if (newName.length > 10) {
      newName = newName.slice(0, 10);
    }

    const isValidName = /^[a-zA-Z가-힣0-9]{2,10}$/.test(newName);

    setName(newName);
    setCanNext(isValidName);
  };

  return (
    <MainContainer>
      <div className="mt-20">
        <SlidePannels maxLengh={3} selectedIndex={0} />
      </div>
      <div className="flex flex-col items-center">
        <SignInformation title={`당신을 어떤 이름으로\n부르면 좋을까요`} />
        <div className="flex flex-col w-full items-center">
          <div className="w-3/4">
            <Input value={name} onChange={handleNameChange} maxLength={10} />
          </div>
        </div>
        <Txt typography="subtitle" colors="secondaryLight" className="my-1">
          2글자에서 10글자 이내 (특수문자 사용 불가)
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

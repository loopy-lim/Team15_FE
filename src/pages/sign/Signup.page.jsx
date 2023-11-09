import { BottomFullLink } from "../../components/common/BottomFullLink.component.jsx";
import { Txt } from "../../components/common/Txt.component.jsx";
import { Input } from "../../components/sign/Input.component.jsx";
import { SlidePannels } from "../../components/sign/SlidePannel.component.jsx";
import { SignInformation } from "../../components/sign/Information.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { isValidName } from "../../functions/validator.js";
import { nameAtom } from "../../stores/sign.atom.js";

export const SignupPage = () => {
  const [name, setName] = useAtom(nameAtom);
  const [canNext, setCanNext] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    let newName = event.target.value;
    if (newName.length > 10) {
      newName = newName.slice(0, 10);
    }
    setName(newName);
    setCanNext(isValidName(newName));
  };

  const onEnterClick = (event) => {
    if (event.key === "Enter" && canNext) {
      navigate("/signup/account");
    }
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
            <Input
              key={"name"}
              className="text-center text-2xl"
              value={name}
              onChange={handleNameChange}
              maxLength={10}
              onKeyDown={onEnterClick}
            />
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

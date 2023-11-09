import { BottomFullLink } from "../../components/common/BottomFullLink.component";
import { SlidePannels } from "../../components/sign/SlidePannel.component";
import { SignInformation } from "../../components/sign/Information.component";
import { MainContainer } from "../../components/common/MainContainer.component";
import { Txt } from "../../components/common/Txt.component";
import { useState } from "react";
import { Input } from "../../components/sign/Input.component";
import { isValidEmail, isValidPassword } from "../../functions/validator";
import { useAtom } from "jotai";
import { emailAtom, passwordAtom } from "../../stores/sign.atom";
import { useNavigate } from "react-router-dom";

export const AccountPage = () => {
  const [email, setEmail] = useAtom(emailAtom);
  const [password, setPassword] = useAtom(passwordAtom);
  const [canNext, setCanNext] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setCanNext(newEmail && password);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setCanNext(email && newPassword);
  };

  const onNext = () => {
    if (!isValidEmail(email)) {
      alert("형식에 맞추어 이메일을 설정해 주세요.");
      return;
    }
    if (!isValidPassword(password)) {
      alert("형식에 맞추어 비밀번호를 설정해 주세요.");
      return;
    }
    if (!canNext) return;
    navigate("/signup/school");
  };

  return (
    <MainContainer>
      <div className="mt-20">
        <SlidePannels maxLengh={3} selectedIndex={1} />
      </div>
      <div className="flex flex-col items-center">
        <SignInformation title={`이메일과 비밀번호를\n설정하세요`} />
        <div className="flex flex-col gap-4 w-3/4">
          <Input
            key="email"
            className="text-lg"
            type="text"
            label="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            key="password"
            className="text-lg"
            type="password"
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onNext();
              }
            }}
          />
          <Txt typography="subtitle" colors="secondaryLight">
            비밀번호는 영어와 숫자, 특수문자 포함하는 8자 이상
          </Txt>
        </div>
      </div>
      <BottomFullLink title="다음으로" onClick={onNext} isActive={canNext} />
    </MainContainer>
  );
};

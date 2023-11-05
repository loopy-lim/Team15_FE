import { BottomFullLink } from "../../components/common/BottomFullLink.component";
import { SlidePannels } from "../../components/sign/SlidePannel.component";
import { SignInformation } from "../../components/sign/Information.component";
import { MainContainer } from "../../components/common/MainContainer.component";
import {
  InputText,
  InputPassword,
} from "../../components/sign/Input.component";
import { Txt } from "../../components/common/Txt.component";
import { useState } from "react";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const AccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [canNext, setCanNext] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    const isValid = isValidEmailAndPassword(newEmail, password);
    setCanNext(isValid);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    isValidEmailAndPassword(email, newPassword);
  };

  const isValidEmailAndPassword = (newEmail, newPassword) => {
    const isEmailValid = emailPattern.test(newEmail);
    const isPasswordValid = passwordPattern.test(newPassword);
    return isEmailValid && isPasswordValid;
  };

  return (
    <MainContainer>
      <div className="mt-20">
        <SlidePannels maxLengh={3} selectedIndex={1} />
      </div>
      <div className="flex flex-col items-center">
        <SignInformation title={`이메일과 비밀번호를\n설정하세요`} />
        <div className="flex flex-col gap-4 w-3/4">
          <InputText label="Email" value={email} onChange={handleEmailChange} />
          <InputPassword
            label="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Txt typography="subtitle" colors="secondaryLight">
            비밀번호는 영어와 숫자, 특수문자 포함하는 8자 이상
          </Txt>
        </div>
      </div>
      <BottomFullLink
        title="다음으로"
        to={`/signup/school`}
        isActive={canNext}
      />
    </MainContainer>
  );
};

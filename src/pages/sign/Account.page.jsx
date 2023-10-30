import { BottomFullLink } from "../../components/common/BottomFullLink.component";
import { SlidePannels } from "../../components/sign/SlidePannel.component";
import { SignInformation } from "../../components/sign/Information.component";
import { MainContainer } from "../../components/common/MainContainer.component";
import { useState } from "react";

export const AccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [canNext, setCanNext] = useState(false);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    isValidEmailAndPassword(newEmail, password);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    isValidEmailAndPassword(email, newPassword);
  };

  const isValidEmailAndPassword = (newEmail, newPassword) => {
    const isEmailValid = emailPattern.test(newEmail);
    const isPasswordValid = passwordPattern.test(newPassword);
    setCanNext(isEmailValid && isPasswordValid);
  };

  return (
    <MainContainer>
      <div className="mt-20">
        <SlidePannels maxLengh={3} selectedIndex={1} />
      </div>
      <div className="flex flex-col items-center">
        <SignInformation title={`이메일과 비밀번호를\n설정하세요`} />
        <div className="flex flex-col gap-4 w-3/4">
          <input
            type="text"
            className="border-b-2 py-1 my-3 border-[#62AB05]"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            className="border-b-2 py-1 my-3 border-[#62AB05]"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <p>
            비밀번호는 영어와 숫자, 특수문자 포함하는 8자 이상이어야 합니다.
          </p>
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

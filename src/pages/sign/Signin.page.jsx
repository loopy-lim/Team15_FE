import { useState } from "react";
import { BottomFullLink } from "../../components/common/BottomFullLink.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { Input } from "../../components/sign/Input.component.jsx";
import { useSignIn } from "../../hooks/useSignQuery.jsx";
import { useNavigate } from "react-router-dom";

export const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useSignIn();
  const navigate = useNavigate();

  const onSignInClick = async () => {
    signIn(
      { email, password },
      {
        onSettled: () => navigate("/"),
      }
    );
  };

  return (
    <MainContainer>
      <div className="flex justify-center items-center">
        <img src="/images/logo.png" alt="app logo" className="w-fit" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-3/4">
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
        </div>
        <div className="w-3/4">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
        </div>
      </div>
      <BottomFullLink title="로그인" onClick={onSignInClick} />
    </MainContainer>
  );
};

import { useState } from "react";
import { BottomFullLink } from "../../components/common/BottomFullLink.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { Input } from "../../components/sign/Input.component.jsx";
import { useSignIn } from "../../hooks/useSignQuery.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { isValidEmail } from "../../functions/validator.js";
import { Txt } from "../../components/common/Txt.component.jsx";

export const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useSignIn();
  const navigate = useNavigate();

  const onSignIn = async (e) => {
    e.priventDefault?.();
    const isEmail = isValidEmail(email);
    if (!isEmail) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    signIn(
      { email, password },
      {
        onSettled: () => navigate("/"),
      }
    );
    setEmail("");
    setPassword("");
  };

  return (
    <MainContainer>
      <Link to={"/"} className="flex justify-center items-center">
        <img src="/images/logo.png" alt="app logo" className="w-fit" />
      </Link>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={onSignIn}
      >
        <div className="w-3/4">
          <Input
            className="text-lg"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
        </div>
        <div className="w-3/4">
          <Input
            className="text-lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSignIn(e);
              }
            }}
          />
        </div>
        <Txt colors="secondary">
          회원이 아니신가요?{" "}
          <Link to={"/signup"}>
            <Txt colors="secondaryLight">회원가입</Txt>
          </Link>
        </Txt>
      </form>
      <BottomFullLink title="로그인" onClick={onSignIn} />
    </MainContainer>
  );
};

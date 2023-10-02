import { BASE_PADDING } from "../constants";
import { isIOS, isMobile } from "react-device-detect";
import classnames from "classnames";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { Txt } from "../components/common/Txt.component";
import { Input } from "../components/common/Input.component";

export const LoginPage = () => {
  return (
    <>
      <main
        aria-label="main"
        className={classnames(
          "bg-white overflow-auto",
          BASE_PADDING,
          isMobile && isIOS
            ? "h-[calc(100vh-10rem-env(safe-area-inset-top))]"
            : "h-[calc(100vh-8.5rem)]"
        )}
      >
        <div class="flex justify-center">
          <img src="/images/logo.png" alt="app logo" class="w-350 h-auto" />
        </div>
        <Txt typography="h4" colors="secondaryLight" className="flex">
          Email
        </Txt>
        <Input type="text" />
        <Txt typography="h4" colors="secondaryLight" className="flex">
          password
        </Txt>
        <Input type="password" />
        <BottomFullLink title="로그인" to={`/`} />
      </main>
    </>
  );
};

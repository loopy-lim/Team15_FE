import { AppBar } from "../components/common/AppBar.component";
import { MainContainer } from "../components/common/MainContainer.component";
import { MyPageInfo } from "../components/mypage/Info.component";
import { MyPageMenu } from "../components/mypage/Menu.component";
import classnaems from "classnames";
import { MOBILE_WIDTH } from "../constants";
import { isMobile } from "react-device-detect";

export const MyPage = () => {
  return (
    <>
      <AppBar to="/" />
      <MainContainer>
        <MyPageInfo />
        <div
          className={classnaems(
            "absolute h-full bg-gray-100 py-4 left-0",
            !isMobile && MOBILE_WIDTH
          )}
        >
          <MyPageMenu />
        </div>
      </MainContainer>
    </>
  );
};

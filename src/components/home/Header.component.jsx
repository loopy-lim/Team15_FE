import classnames from "classnames";
import { isMobile } from "react-device-detect";
import { BASE_PADDING, MOBILE_WIDTH } from "../../constants/index.js";
import { Icon } from "../common/Icon.component.jsx";
import { Txt } from "../common/Txt.component.jsx";
import { Menu } from "./Menu.component.jsx";

export const HomeHeader = () => {
  return (
    <div className="h-14">
      <div
        className={classnames(
          "fixed left-0 flex justify-between pt-4 pb-2 border-b bg-white z-40",
          BASE_PADDING,
          !isMobile ? `${MOBILE_WIDTH}` : "w-full"
        )}
      >
        <div className="flex gap-4">
          <Menu />
          <Txt typography="h6">전남대</Txt>
        </div>
        <Icon type="search" />
      </div>
    </div>
  );
};

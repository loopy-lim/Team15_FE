import classnames from "classnames";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import { Icon } from "../common/Icon.component.jsx";
import { Txt } from "../common/Txt.component.jsx";
import {
  BASE_LEFT_PADDING_MINUS,
  MOBILE_WIDTH,
} from "../../constants/index.js";
import { Link } from "../common/Link.component.jsx";

const homeMenu = [
  { iconType: "account", title: "마이페이지", href: "#" },
  { iconType: "viewlist", title: "대여내역", href: "/rental" },
  { iconType: "home", title: "홈", href: "/" },
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <nav className="relative w-8 h-8">
      {isOpen ? (
        <div className="flex flex-col gap-2 z-50 absolute">
          <button
            className={classnames(
              "absolute h-[120vh] -top-24 backdrop-blur-sm bg-[#00000050]",
              BASE_LEFT_PADDING_MINUS,
              isMobile ? "w-screen" : MOBILE_WIDTH
            )}
            aria-label="close"
            onClick={toggleOpen}
          ></button>
          <button className="absolute" onClick={toggleOpen} aria-label="close">
            <Icon type="close" />
          </button>
          <div className="top-12 absolute flex flex-col w-40 gap-2">
            {homeMenu.map((item) => (
              <Link
                key={item.title}
                className="flex justify-between py-2 px-4 rounded-lg border border-[#62AB05] bg-white"
                to={item.href}
              >
                <Icon type={item.iconType} />
                <Txt typography="h6" className="text-center flex-1">
                  {item.title}
                </Txt>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <button onClick={toggleOpen} aria-label="hamberger absolute">
          <Icon type="hamberger" />
        </button>
      )}
    </nav>
  );
};

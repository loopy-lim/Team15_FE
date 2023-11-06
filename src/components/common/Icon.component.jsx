import classnames from "classnames";
import { BiSearch, BiMessageRoundedDetail } from "react-icons/bi";
import { BsChevronLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiHome5Line } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { CiViewList } from "react-icons/ci";
import {
  AiOutlineCamera,
  AiOutlineStar,
  AiFillStar,
  AiOutlineClose,
} from "react-icons/ai";

const IconSize = {
  small: "h-4 w-4",
  medium: "h-6 w-6",
  large: "h-8 w-8",
};

/**
 * @param {{
 *  className?: string,
 *  type: keyof typeof IconType,
 *  size: keyof typeof IconSize
 * }}
 */
export const Icon = ({ type, size = "medium", className }) => {
  const combileClassName = classnames(IconSize[size], className);

  const IconType = {
    search: <BiSearch className={combileClassName} />,
    back: <BsChevronLeft className={combileClassName} />,
    hamberger: <RxHamburgerMenu className={combileClassName} />,
    home: <RiHome5Line className={combileClassName} />,
    close: <AiOutlineClose className={combileClassName} />,
    account: <VscAccount className={combileClassName} />,
    viewlist: <CiViewList className={combileClassName} />,
    message: <BiMessageRoundedDetail className={combileClassName} />,
    camera: <AiOutlineCamera className={combileClassName} />,
    star: <AiOutlineStar className={combileClassName} />,
    fillStar: <AiFillStar className={combileClassName} />,
  };

  return IconType[type];
};

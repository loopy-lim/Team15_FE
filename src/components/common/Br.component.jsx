import classnames from "classnames";
import { BASE_LEFT_PADDING_MINUS, MOBILE_WIDTH } from "../../constants";
import { isMobile } from "react-device-detect";

/**
 * @param {{
 *  className?: string,
 * }}
 */
export const Br = ({ className }) => {
  return (
    <div className={classnames("h-[1px] relative w-full", className)}>
      <span
        className={classnames(
          "absolute h-[1px] bg-[#D4D4D4] w-[calc(100%+3rem)]",
          BASE_LEFT_PADDING_MINUS,
          !isMobile ? `${MOBILE_WIDTH}` : "w-[calc(100%+3rem)]"
        )}
      ></span>
    </div>
  );
};

import classnames from "classnames";
import { BASE_PADDING } from "../../constants";
import { isIOS, isMobile } from "react-device-detect";

/**
 * @param {{
 *  children: React.ReactNode
 *  hasBottomFulLink?: boolean
 * }}
 */
export const MainContainer = ({ children, hasBottomFulLink = true }) => {
  return (
    <main
      aria-label="main"
      className={classnames(
        "bg-white overflow-auto",
        BASE_PADDING,
        hasBottomFulLink
          ? isMobile && isIOS
            ? "h-[calc(100vh-10rem-env(safe-area-inset-top))]"
            : "h-[calc(100vh-8.5rem)]"
          : isMobile && isIOS
          ? "h-[calc(100vh-3.5rem-env(safe-area-inset-top))]"
          : "h-[calc(100vh-3.5rem)]"
      )}
    >
      {children}
    </main>
  );
};

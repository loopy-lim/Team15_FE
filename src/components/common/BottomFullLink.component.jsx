import { isMobile } from "react-device-detect";
import { Br } from "../common/Br.component";
import { Button } from "../common/Button.component";
import classnames from "classnames";
import { Link } from "react-router-dom";

/**
 * @param {{
 *  beforeAction?: () => void
 *  to: string
 *  title: string
 *  br: boolean
 *  isActive: boolean
 * }}
 */
export const BottomFullLink = ({
  beforeAction,
  br = false,
  title,
  to,
  isActive = true,
}) => {
  return (
    <div
      className={classnames(
        "fixed bottom-0 z-20",
        isMobile
          ? "w-[calc(100%-3rem)] pb-[env(safe-area-inset-bottom)]"
          : "w-[calc(480px-3rem)] pb-4"
      )}
    >
      {br && <Br className="py-0 pb-3" />}
      <Link to={to} onClick={beforeAction}>
        <Button isActive={isActive}>{title}</Button>
      </Link>
    </div>
  );
};

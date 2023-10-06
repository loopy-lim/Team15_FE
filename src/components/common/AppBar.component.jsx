import { Link } from "react-router-dom";
import { Icon } from "./Icon.component";
import { Txt } from "./Txt.component";
import { Br } from "./Br.component";

/**
 * @param {{
 *  to: string
 *  title: string
 *  br?: boolean
 * }}
 */
export const AppBar = ({ to, title, br = false }) => {
  return (
    <nav>
      <Link
        className="px-4 pt-4 pb-3 flex justify-between items-center"
        to={to}
      >
        <Icon type="back" />
        <div className="flex-1 text-center">
          <Txt typography="h4">{title}</Txt>
        </div>
        <div className="h-8 w-8"></div>
      </Link>
      {br && <Br className="w-[calc(100%-1.5rem)]" />}
    </nav>
  );
};

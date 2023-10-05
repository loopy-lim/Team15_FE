import { isIOS, isMobile } from "react-device-detect";
import { AppBar } from "../components/common/AppBar.component";
import { BASE_PADDING } from "../constants";
import classnames from "classnames";
import { ChargeMoney } from "../components/paymoney/ChargeMoney";
import { BottomFullLink } from "../components/common/BottomFullLink.component";

export const ChargePage = () => {

    return (
        <>
            <AppBar to="/paymoney" title={"충전"} br={true} />
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
                <ChargeMoney />
                <BottomFullLink title="충전하기" />

            </main>
        </>
    )
};
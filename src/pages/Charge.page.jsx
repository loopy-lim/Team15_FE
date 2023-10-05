import { isIOS, isMobile } from "react-device-detect";
import { AppBar } from "../components/common/AppBar.component";
import { BASE_PADDING } from "../constants";
import classnames from "classnames";
import { ChargeMoney } from "../components/paymoney/ChargeMoney";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { KeyPad } from "../components/paymoney/KeyPad";

export const ChargePage = () => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleKeypad = () => {
        setIsKeyboardOpen(!isKeyboardOpen);
    };

    const handleNumberClick = (number) => {
        setInputValue(inputValue + number);
    };

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
                <div className="ml-6">
                    <p className="font-bold">무통장 입금 계좌</p>
                    <br />
                    <p>카카오뱅크 3333-05-220-8939    예금주: 보로미</p>
                </div>
                <KeyPad
                    isOpen={isKeyboardOpen}
                    onClose={toggleKeypad}
                    onNumberClick={handleNumberClick} // onNumberClick 함수를 전달
                />
                <BottomFullLink title="충전하기" />

            </main>
        </>
    )
};
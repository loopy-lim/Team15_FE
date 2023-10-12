import { isIOS, isMobile } from "react-device-detect";
import { AppBar } from "../components/common/AppBar.component";
import { BASE_PADDING } from "../constants";
import classnames from "classnames";
import { ChargeMoney } from "../components/paymoney/ChargeMoney";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { KeyPad } from "../components/paymoney/KeyPad";
import React, { useState } from 'react';

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
                    <p className="font-bold">무통장 입금 계좌</p><br />
                    <p>카카오뱅크 3333-05-220-8939    예금주: 보로미</p>
                </div>
                <div className="flex flex-col justify-center h-screen ml-20 mt-20 text-gray-500">
                    <p>1일(영업일 기준) 내로 입금이 확인되는대로</p>
                    <p>페이머니에 충전될 예정입니다. 감사합니다</p>
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
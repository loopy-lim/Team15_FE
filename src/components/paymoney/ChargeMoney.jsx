import React, { useState } from "react";
import { KeyPad } from "./KeyPad";

export const ChargeMoney = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onKeyboard = () => {
    setIsKeyboardOpen(true);
  };

  const toggleKeypad = () => {
    setIsKeyboardOpen((prev) => !prev);
  };

  const handleNumberClick = (number) => {
    setInputValue(inputValue + number);
  };

  return (
    <>
      <button
        onClick={onKeyboard}
        className="bg-[#F1F1F1] p-2 m-6 rounded-lg w-[25rem] h-[5rem] flex "
      >
        <p className="float-left mr-4 text-gray-500">충전금액</p>
        <input type="text" value={inputValue} readOnly />
      </button>
      {isKeyboardOpen && (
        <KeyPad onClose={toggleKeypad} onNumberClick={handleNumberClick} />
      )}
    </>
  );
};

import React from 'react';

export const KeyPad = ({ isOpen, onClose, onNumberClick }) => {
    if (!isOpen) {
        return null;
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const handleNumberClick = (number) => {
        onNumberClick(number);
    };

    return (
        <div className="fixed bottom-20 left-4 grid grid-cols-3 gap-10 p-4 bg-[#F1F1F1]">
            {numbers.map((number) => (
                <button
                    key={number}
                    className="w-32 h-16 rounded-md text-xl m-0.5 cursor-pointer bg-[#F1F1F1]"
                    onClick={() => handleNumberClick(number)}
                >
                    {number}
                </button>
            ))}
            <button
                className="w-32 h-16 rounded-md text-xl m-0.5 cursor-pointer hover:bg-[#F1F1F1] clear:bg-red-500 text-red-500 font-bold"
                onClick={onClose}
            >
                x
            </button>
        </div>
    );
};

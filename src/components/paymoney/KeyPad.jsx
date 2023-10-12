import React from 'react';
import "./KeyPad.css";

export const KeyPad = ({ isOpen, onClose, onNumberClick }) => {
    if (!isOpen) {
        return null;
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const handleNumberClick = (number) => {
        onNumberClick(number);
    };

    return (
        <div className="keypad">
            {numbers.map((number) => (
                <button key={number} className="key" onClick={() => handleNumberClick(number)}>
                    {number}
                </button>
            ))}
            <button className="key clear" onClick={onClose}>x</button>
        </div>
    );
};


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Br } from "../common/Br.component";
import { Button } from "../common/Button.component";
import { Txt } from "../common/Txt.component";
import { Modal } from "../common/Modal.component";
import "../paymoney/MyMoney.css";

export const MyMoney = () => {
    const [isModalAlertOpen, setIsModalAlertOpen] = useState(false);
    const navigate = useNavigate();
    const {
        piece,
    } = {
        piece: "20000",
    };
    const handleButtonClick = () => {
        navigate('/paymoney/charge');
    };
    return (
        <>
            <div className="bg-[#F1F1F1] p-2 m-6 rounded-lg w-[400px] h-[80px] flex justify-center">
                <Txt typography="h2" className="m-2 p-1">{piece}원</Txt>
                <Button size="small" className="w-1/4 m-2 bg-gray-500 border-gray-500" onClick={() => setIsModalAlertOpen((prev) => !prev)}>출금</Button>
                <Modal.Alert
                    isOpen={isModalAlertOpen}
                    onClose={() => {
                        setIsModalAlertOpen(false);
                    }}
                    onRequestClose={() => setIsModalAlertOpen(false)}
                >
                    <div className="modalContent">
                        boromi@gmail.com로<br />
                        예금주명, 계좌번호, 은행명,<br />
                        출금 금액에 관한 내용을<br />
                        전달해 주시기 바랍니다 :)<br />
                    </div>
                </Modal.Alert>
                <Button size="small" className="w-1/4 m-2" onClick={handleButtonClick}>충전</Button>
            </div>
        </>
    );
};

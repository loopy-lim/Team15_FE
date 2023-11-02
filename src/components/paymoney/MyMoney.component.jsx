import { useState } from "react";
import { Txt } from "../common/Txt.component.jsx";
import { Modal } from "../common/Modal.component.jsx";
import { Link } from "../common/Link.component.jsx";
import { useGetPaymoney } from "../../hooks/usePaymonyQuery.jsx";

export const MyMoney = () => {
  const [isModalAlertOpen, setIsModalAlertOpen] = useState(false);
  const { paymoney } = useGetPaymoney("20000");
  const { piece } = {
    piece: "20000",
  };

  const onModalClose = () => {
    setIsModalAlertOpen(false);
  };

  return (
    <>
      <div className="bg-[#FCFCFE] py-4 border broder-[#F1F1F1] rounded-2xl flex justify-between items-center">
        <Txt typography="h2" className="px-6">
          {paymoney}원
        </Txt>
        <div className="flex gap-4 items-center px-6">
          <button
            className="bg-[#D0D0D2] py-2 px-4 h-fit rounded-lg"
            onClick={() => setIsModalAlertOpen((prev) => !prev)}
          >
            출금
          </button>
          <Link
            className="bg-[#DDECCC] py-2 px-4 h-fit rounded-lg"
            to="/paymoney/charge"
          >
            충전
          </Link>
        </div>
        <Modal.Alert
          isOpen={isModalAlertOpen}
          onClose={onModalClose}
          onRequestClose={onModalClose}
        >
          <div className="flex justify-center flex-col gap-1 pb-4">
            <div>boromi@gmail.com로</div>
            <div>예금주명, 계좌번호, 은행명,</div>
            <div>출금 금액에 관한 내용을</div>
            <div>전달해 주시기 바랍니다 :)</div>
          </div>
        </Modal.Alert>
      </div>
    </>
  );
};

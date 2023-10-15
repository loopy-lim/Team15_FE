import { useAtom, useSetAtom } from "jotai";
import { canPayByMoney } from "../../stores/payment.atom";
import classnames from "classnames";
import { Button } from "../common/Button.component";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import { Modal } from "../common/Modal.component";
import { Txt } from "../common/Txt.component";
import { useNavigate } from "react-router-dom";
import { rentDateAtom } from "../../stores/rent.atom";

export const PaymentPayButton = () => {
  const [canPay] = useAtom(canPayByMoney);
  const setRentData = useSetAtom(rentDateAtom);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  const onModalClose = () => {
    setRentData({ from: new Date(), to: null });
    setIsOpenModal(false);
    navigate("/");
  };

  return (
    <div
      className={classnames(
        "fixed bottom-0",
        isMobile
          ? "w-[calc(100%-3rem)] pb-[env(safe-area-inset-bottom)]"
          : "w-[calc(480px-3rem)] pb-4"
      )}
    >
      <Button isActive={canPay} onClick={() => setIsOpenModal(true)}>
        결제하기
      </Button>
      <Modal.Alert
        isOpen={isOpenModal}
        onClose={onModalClose}
        onRequestClose={onModalClose}
      >
        <Txt>결제가 완료되었습니다.</Txt>
      </Modal.Alert>
    </div>
  );
};

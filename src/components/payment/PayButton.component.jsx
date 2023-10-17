import { useAtom } from "jotai";
import { canPayByMoney } from "../../stores/payment.atom";
import classnames from "classnames";
import { Button } from "../common/Button.component";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import { Modal } from "../common/Modal.component";
import { Txt } from "../common/Txt.component";
import { useNavigate } from "react-router-dom";
import { rentDateAtom } from "../../stores/rent.atom";
import { useCreateRental } from "../../hooks/useRentalQuery";

/**
 * @param {{
 *  productId: string
 * }} param0
 */
export const PaymentPayButton = ({ productId }) => {
  const [canPay] = useAtom(canPayByMoney);
  const [rentData, setRentData] = useAtom(rentDateAtom);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  const { mutationRental } = useCreateRental(productId, {
    startAt: rentData.from,
    endAt: rentData.to,
  });

  const onModalClose = () => {
    setRentData({ from: new Date(), to: null });
    setIsOpenModal(false);
    navigate("/");
  };

  const onCreateRental = () => {
    mutationRental();
    setIsOpenModal(true);
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
      <Button isActive={canPay} onClick={onCreateRental}>
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

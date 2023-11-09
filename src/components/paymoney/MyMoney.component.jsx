import { useState } from "react";
import { Txt } from "../common/Txt.component.jsx";
import { Modal } from "../common/Modal.component.jsx";
import { Link } from "../common/Link.component.jsx";
import { useGetPaymoney } from "../../hooks/usePaymonyQuery.jsx";
import { koString } from "../../functions/localeString.js";
import { Button } from "../common/Button.component.jsx";

const withdraowAlertString =
  "boromi@gmail.com로\n예금주명, 계좌번호, 은행명,\n출금 금액에 관한 내용을\n전달해 주시기 바랍니다 :)";

export const MyMoney = () => {
  const [isModalAlertOpen, setIsModalAlertOpen] = useState(false);
  const { payment } = useGetPaymoney();

  const onModalClose = () => {
    setIsModalAlertOpen(false);
  };

  return (
    <>
      <div className="bg-[#FCFCFE] py-4 border broder-[#F1F1F1] rounded-2xl flex justify-between items-center">
        <Txt typography="h5" className="px-6">
          <Txt typography="subtitle" className="block font-normal">
            나의 페이머니
          </Txt>
          {koString(payment.piece)}원
        </Txt>
        <div className="flex gap-4 items-center px-6">
          <div className="w-full">
            <Button
              size="small"
              color="white"
              onClick={() => setIsModalAlertOpen((prev) => !prev)}
            >
              출금
            </Button>
          </div>
          <Link className="w-full" to="/paymoney/charge">
            <Button size="small">충전</Button>
          </Link>
        </div>
        <Modal.Alert
          isOpen={isModalAlertOpen}
          onClose={onModalClose}
          onRequestClose={onModalClose}
        >
          <div className="flex justify-center flex-col  pb-4">
            {withdraowAlertString.split("\n").map((line, index) => (
              <Txt key={index} className="text-center">
                {line}
              </Txt>
            ))}
          </div>
        </Modal.Alert>
      </div>
    </>
  );
};

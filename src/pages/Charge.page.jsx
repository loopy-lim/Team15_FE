import { useAtom } from "jotai";
import { chargeMoney } from "../stores/paymoney.atom";
import { useState } from "react";
import { Modal } from "../components/common/Modal.component";
import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/common/AppBar.component";
import { MainContainer } from "../components/common/MainContainer.component";
import { ChargeMoney } from "../components/paymoney/ChargeMoney.component";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { Txt } from "../components/common/Txt.component";
import classnames from "classnames";
import { isMobile } from "react-device-detect";
import { BASE_PADDING, MOBILE_WIDTH } from "../constants";
import { usePostPaymoney } from "../hooks/usePaymonyQuery";

const chargeMoneyString =
  "입금 후 1일 이내에\n페이머니 잔액에 반영될 예정입니다.\n감사합니다 :)";

export const ChargePage = () => {
  const navigate = useNavigate();
  const [money, setMoney] = useAtom(chargeMoney);
  const [isModalAlertOpen, setIsModalAlertOpen] = useState(false);
  const { chargeMoney: postChargeMoney } = usePostPaymoney();

  const onModalClose = () => {
    setIsModalAlertOpen(false);
    postChargeMoney({ piece: Number(money) });
    setMoney("");
    navigate("/");
  };

  return (
    <>
      <AppBar to="/paymoney" title={"충전"} br={true} />
      <MainContainer>
        <ChargeMoney />
        <div className="flex flex-col gap-4 ml-6">
          <Txt typography="h6">무통장 입금 계좌</Txt>
          <Txt>카카오뱅크 1234-5678-02 예금주: 보로미</Txt>
        </div>
        <div className="relavite">
          <div
            className={classnames(
              "absolute bottom-24 left-0 flex flex-col text-center",
              isMobile ? BASE_PADDING : " px-10",
              !isMobile ? MOBILE_WIDTH : "w-full"
            )}
          >
            <Txt colors="secondaryLight">
              1일(영업일 기준) 내로 입금이 확인되는대로
            </Txt>
            <Txt colors="secondaryLight">
              페이머니에 충전될 예정입니다. 감사합니다
            </Txt>
          </div>
        </div>
        <BottomFullLink
          title="충전하기"
          isActive={Number(money) > 0}
          onClick={() => setIsModalAlertOpen((prev) => !prev)}
        />
        <Modal.Alert
          isOpen={isModalAlertOpen}
          onClose={onModalClose}
          onRequestClose={onModalClose}
        >
          <div className="flex flex-col justify-center gap-1 pb-4">
            {chargeMoneyString.split("\n").map((line, index) => (
              <Txt key={index} typography="h6">
                {line}
              </Txt>
            ))}
          </div>
        </Modal.Alert>
      </MainContainer>
    </>
  );
};

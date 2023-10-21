import { useAtom } from "jotai";
import { AppBar } from "../components/common/AppBar.component.jsx";
import { ChargeMoney } from "../components/paymoney/ChargeMoney.component.jsx";
import { BottomFullLink } from "../components/common/BottomFullLink.component.jsx";
import { MainContainer } from "../components/common/MainContainer.component.jsx";
import { chargeMoney } from "../stores/paymoney.atom.js";

export const ChargePage = () => {
  const [money] = useAtom(chargeMoney);

  return (
    <>
      <AppBar to="/paymoney" title={"충전"} br={true} />
      <MainContainer>
        <ChargeMoney />
        <div className="ml-6">
          <p className="font-bold">무통장 입금 계좌</p>
          <br />
          <p>카카오뱅크 3333-05-220-8939 예금주: 보로미</p>
        </div>
        <div className="flex flex-col justify-center h-screen ml-20 mt-20 text-gray-500">
          <p>1일(영업일 기준) 내로 입금이 확인되는대로</p>
          <p>페이머니에 충전될 예정입니다. 감사합니다</p>
        </div>
        <BottomFullLink title="충전하기" isActive={Number(money) > 0} />
      </MainContainer>
    </>
  );
};

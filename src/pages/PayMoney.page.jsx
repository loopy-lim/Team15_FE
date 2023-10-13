import { useParams } from "react-router-dom";
import { AppBar } from "../components/common/AppBar.component";
import { MainContainer } from "../components/common/MainContainer.component";
import { MyMoney } from "../components/paymoney/MyMoney";
import { MoneyHistory } from "../components/paymoney/MoneyHistory";

export const PayMoneyPage = () => {
  const { id } = useParams();

  return (
    <>
      <AppBar to="/mypage/paymoney" title="페이머니" />
      <MainContainer>
        <div className="flex flex-col gap-6 h-full">
          <MyMoney />
          <MoneyHistory />
        </div>
      </MainContainer>
    </>
  );
};

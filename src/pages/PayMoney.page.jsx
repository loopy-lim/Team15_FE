import { AppBar } from "../components/common/AppBar.component.jsx";
import { MainContainer } from "../components/common/MainContainer.component.jsx";
import { MyMoney } from "../components/paymoney/MyMoney.component.jsx";
import { MoneyHistory } from "../components/paymoney/MoneyHistory.component.jsx";

export const PayMoneyPage = () => {
  return (
    <>
      <AppBar to="/mypage" title="페이머니" />
      <MainContainer>
        <div className="flex flex-col gap-6 h-full">
          <MyMoney />
          <MoneyHistory />
        </div>
      </MainContainer>
    </>
  );
};

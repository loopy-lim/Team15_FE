import { Txt } from "../common/Txt.component.jsx";

export const MoneyHistory = ({ }) => {
  const { coinType, createAt } = {
    id: "1",
    // piece: "10000",
    coinType: "결제",
    createAt: "2023-09-18 12:00:00",
  };

  return (
    <div className="bg-[#FBFBFB] rounded-lg border border-[#F1F1F1] flex flex-col h-full">
      <Txt className="border-b border-[#F1F1F1] py-2 px-4">페이머니 내역</Txt>
      <br />
      <Txt typography="h8">9월 18일 (월)</Txt>
      <div className="p-4 flex justify-between">
        <Txt typography="h6">-10,000원</Txt>
        <Txt typography="h8">결제 | 페이머니 사용</Txt>
      </div>
      <br />
      <Txt typography="h8">9월 18일 (월)</Txt>
      <div className="p-4 flex justify-between">
        <Txt typography="h6">+10,000원</Txt>
        <Txt typography="h8">입금 | 페이머니 충전</Txt>
      </div>
      <br />
      <Txt typography="h8">6월 16일 (월)</Txt>
      <div className="p-4 flex justify-between">
        <Txt typography="h6">-60,000원</Txt>
        <Txt typography="h8">결제 | 페이머니 사용</Txt>
      </div>
      <br />
      <Txt typography="h8">6월 16일 (월)</Txt>
      <div className="p-4 flex justify-between">
        <Txt typography="h6">+60,000원</Txt>
        <Txt typography="h8">입금 | 페이머니 충전</Txt>
      </div>
    </div>
  );
};

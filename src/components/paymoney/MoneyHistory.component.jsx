import { koDateString, koString } from "../../functions/localeString.js";
import { useGetPaymoneyLog } from "../../hooks/usePaymonyQuery.jsx";
import { Txt } from "../common/Txt.component.jsx";

export const MoneyHistory = () => {
  const { paymentLog } = useGetPaymoneyLog();

  return (
    <div className="bg-[#FBFBFB] rounded-lg border border-[#F1F1F1] flex flex-col h-full">
      <Txt className="border-b border-[#F1F1F1] py-2 px-4">페이머니 내역</Txt>
      <ul className="flex flex-col flex-1 w-full min-h-0">
        {paymentLog.map((log) => (
          <li className="w-full px-4 pt-4" key={log.createdAt}>
            <Txt>{koDateString(log.createdAt)}</Txt>
            <div className="flex justify-between py-4">
              <Txt typography="h6">{koString(log.piece)}원</Txt>
              <div className="flex items-center gap-2">
                <Txt>{log.coinType}</Txt>
                <div className="h-3 bg-black w-[1px]"></div>
                <Txt>페이머니 {log.coinType === "충전" ? "충전" : "사용"}</Txt>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#F1F1F1]"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

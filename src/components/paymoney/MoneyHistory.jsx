import { Br } from "../common/Br.component";
import { Txt } from "../common/Txt.component";


export const MoneyHistory = ({ }) => {
    const {
        piece,
        coinType,
        createAt,
    } = {
        id: "1",
        piece: "10000",
        coinType: "결제",
        createAt: "2023-09-18 12:00:00",
    };

    return (
        <div className="bg-[#F1F1F1] p-2 m-6 rounded-lg flex flex-col justify-center leading-6">
            <Txt typography="h8" marginRight="4" className="leading-6">페이머니 내역</Txt>
            <Br className="flex" />
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

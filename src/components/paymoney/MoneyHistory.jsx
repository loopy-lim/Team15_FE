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
        <div className="bg-[#FCFCFE] p-4 rounded-lg">
            <Txt typography="h5"></Txt>
        </div>
    );
};

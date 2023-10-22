import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { AppBar } from "../../components/common/AppBar.component.jsx";
import { RentCalendar } from "../../components/product/rentPeriod/Calender.component.jsx";
import { BottomFullLink } from "../../components/common/BottomFullLink.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { rentDateAtom } from "../../stores/rent.atom.js";

export const RentPeriodPage = () => {
  const { id } = useParams();
  const [rentData] = useAtom(rentDateAtom);

  return (
    <>
      <AppBar to={`/product/${id}`} title={"대여날짜"} br={true} />
      <MainContainer>
        <RentCalendar />
        <BottomFullLink
          title="결제하기"
          to={`/payment/${id}`}
          isActive={!!rentData.to && !!rentData.from}
        />
      </MainContainer>
    </>
  );
};

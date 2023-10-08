import { useParams } from "react-router-dom";
import { AppBar } from "../../components/common/AppBar.component";
import { RentCalendar } from "../../components/product/rentPeriod/Calender.component";
import { BottomFullLink } from "../../components/common/BottomFullLink.component";
import { MainContainer } from "../../components/common/MainContainer.component";
import { useAtom } from "jotai";
import { rentDateAtom } from "../../stores/rent.atom";

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

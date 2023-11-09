import { RentalDto } from "../../../apis/dtos/rental.dto.js";
import { ItemRental } from "./Rental.component.jsx";
import { ItemRentalCompelete } from "./RentalComplete.component.jsx";
import { ItemRentalSchedule } from "./RentalSchedule.component.jsx";

/**
 * @param {{
 *  data: RentalDto
 * }}
 */
export const RentalItem = ({ data }) => {
  switch (data.status) {
    case "대여중":
      return <ItemRental data={data} />;
    case "반납완료":
    case "리뷰완료":
      return (
        <ItemRentalCompelete
          data={data}
          isReviewed={"리뷰완료" === data.status}
        />
      );
    case "예약중":
      return <ItemRentalSchedule data={data} />;
    default:
      return <></>;
  }
};

import { RentalDto } from "../../../apis/dtos/rental.dto.js";
import { RENTAL_TYPE, getRentalType } from "../../../functions/rental.js";
import { ItemRental } from "./Rental.component.jsx";
import { ItemRentalCompelete } from "./RentalComplete.component.jsx";
import { ItemRentalSchedule } from "./RentalSchedule.component.jsx";

/**
 * @param {{
 *  type: {type: keyof typeof RENTAL_TYPE, dayDiff?: number}
 *  data: RentalDto
 * }}
 */
export const RentalItem = ({ data }) => {
  const { type, dayDiff } = getRentalType({
    borrowAt: data.borrowAt,
    returnAt: data.returnAt,
  });

  switch (type) {
    case "RENTAL":
      return <ItemRental data={data} dayDiff={dayDiff} />;
    case "RENTAL_COMPLETE":
      return <ItemRentalCompelete data={data} />;
    case "RENTAL_SCHEDULE":
      return <ItemRentalSchedule data={data} />;
    default:
      return <></>;
  }
};

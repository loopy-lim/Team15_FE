import { RENTAL_TYPE, getRentalType } from "../../../functions/rental";
import { ItemRental } from "./Rental.component";
import { ItemRentalCompelete } from "./RentalComplete.component";
import { ItemRentalSchedule } from "./RentalSchedule.component";

/**
 * @param {{
 *  type: {type: keyof typeof RENTAL_TYPE, dayDiff?: number}
 *  data: import("../../../types/rental").rentalItem
 * }}
 */
export const RentalItem = ({ data }) => {
  const { type, dayDiff } = getRentalType({
    borrowAt: data.borrowAt,
    returnAt: data.returnAt,
  });

  return type === "RENTAL" ? (
    <ItemRental data={data} dayDiff={dayDiff} />
  ) : type === "RENTAL_COMPLETE" ? (
    <ItemRentalCompelete data={data}></ItemRentalCompelete>
  ) : type === "RENTAL_SCHEDULE" ? (
    <ItemRentalSchedule data={data}></ItemRentalSchedule>
  ) : (
    <></>
  );
};

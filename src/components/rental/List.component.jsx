import { useQuery } from "@tanstack/react-query";
import { getAllRental } from "../../apis/rental";
import { RentalItem } from "./Item/index.component";
import { Br } from "../common/Br.component";
import { Fragment } from "react";

export const RentalList = () => {
  const { data: rentalData } = useQuery(["rentalList"], () => getAllRental(), {
    suspense: true,
  });

  return (
    <div>
      {rentalData.map((data, index) => (
        <Fragment key={index}>
          <RentalItem key={data.productId} data={data} />
          {index !== rentalData.length - 1 && <Br />}
        </Fragment>
      ))}
    </div>
  );
};

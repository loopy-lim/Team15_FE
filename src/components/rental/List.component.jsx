import { useQuery } from "@tanstack/react-query";
import { getAllRental } from "../../apis/rental";
import { RentalItem } from "./Item/index.component";
import { Br } from "../common/Br.component";

export const RentalList = () => {
  const {
    data: rentalData,
    isLoading,
    isError,
  } = useQuery(["rentalList"], () => getAllRental());

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <div>
      {rentalData.map((data, index) => (
        <>
          <RentalItem key={data.productId} data={data} />
          {index !== rentalData.length - 1 && <Br />}
        </>
      ))}
    </div>
  );
};

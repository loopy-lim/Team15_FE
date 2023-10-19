import { RentalItem } from "./Item/index.component";
import { Br } from "../common/Br.component";
import { useGetRentalAll } from "../../hooks/useRentalQuery";
import { Suspense } from "react";
import { ErrorBoundary } from "../common/Errorboundary.component";

export const RentalList = () => {
  const { rentals } = useGetRentalAll();

  return (
    <ErrorBoundary>
      {rentals.map((data, index) => (
        <Suspense key={index} fallback={<div>loading...</div>}>
          <RentalItem key={data.productId} data={data} />
          {index !== rentals.length - 1 && <Br />}
        </Suspense>
      ))}
    </ErrorBoundary>
  );
};

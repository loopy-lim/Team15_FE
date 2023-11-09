import { Suspense } from "react";
import { RentalItem } from "./Item/index.component.jsx";
import { Br } from "../common/Br.component.jsx";
import { useGetRentalAll } from "../../hooks/useRentalQuery.jsx";
import { ErrorBoundary } from "../common/Errorboundary.component.jsx";

export const RentalList = () => {
  const { rentals } = useGetRentalAll();

  return (
    <ErrorBoundary>
      {rentals.map((data, index) => (
        <Suspense key={index} fallback={<></>}>
          <RentalItem key={data.productId} data={data} />
          {index !== rentals.length - 1 && <Br />}
        </Suspense>
      ))}
    </ErrorBoundary>
  );
};

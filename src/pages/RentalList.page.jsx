import { Suspense } from "react";
import { AppBar } from "../components/common/AppBar.component";
import { ErrorBoundary } from "../components/common/Errorboundary.component";
import { MainContainer } from "../components/common/MainContainer.component";
import { RentalList } from "../components/rental/List.component";

export const RentalListPage = () => {
  return (
    <>
      <AppBar title="대여내역" to="/" />
      <MainContainer hasBottomFullLink={false}>
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <RentalList />
          </Suspense>
        </ErrorBoundary>
      </MainContainer>
    </>
  );
};

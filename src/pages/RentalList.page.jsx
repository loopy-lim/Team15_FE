import { Suspense } from "react";
import { AppBar } from "../components/common/AppBar.component.jsx";
import { ErrorBoundary } from "../components/common/Errorboundary.component.jsx";
import { MainContainer } from "../components/common/MainContainer.component.jsx";
import { RentalList } from "../components/rental/List.component.jsx";

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

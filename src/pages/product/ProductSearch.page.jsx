import { Suspense } from "react";
import { ErrorBoundary } from "../../components/common/Errorboundary.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { ProductBySerach } from "../../components/product/SerachResult.cmponent.jsx";
import { useSearchParams } from "react-router-dom";
import { AppBar } from "../../components/common/AppBar.component.jsx";

export const ProductSearchPage = () => {
  const [searchPrams] = useSearchParams();

  return (
    <>
      <AppBar title={searchPrams.get("keyword") ?? ""} to="/" />
      <MainContainer hasBottomFullLink={false}>
        <ErrorBoundary>
          <Suspense fallback={<></>}>
            <ProductBySerach search={searchPrams.get("keyword") ?? ""} />
          </Suspense>
        </ErrorBoundary>
      </MainContainer>
    </>
  );
};

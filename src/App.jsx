import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { isIOS, isMobile } from "react-device-detect";
import { RouterProvider } from "react-router-dom";
import { router } from "../router/index.jsx";
import { MOBILE_WIDTH } from "./constants/index.js";
import { ErrorBoundary } from "./components/common/Errorboundary.component.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {isIOS && <div className="notch-ios"></div>}
      <div className={!isMobile && MOBILE_WIDTH}>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

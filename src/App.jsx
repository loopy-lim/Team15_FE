import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { isIOS, isMobile } from "react-device-detect";
import { RouterProvider } from "react-router-dom";
import { router } from "../router/index.js";
import { MOBILE_WIDTH } from "./constants/index.js";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {isIOS && <div className="notch-ios"></div>}
      <div className={!isMobile && MOBILE_WIDTH}>
        <RouterProvider router={router} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

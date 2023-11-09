import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../src/pages/Home.page.jsx";
import { PayMoneyPage } from "../src/pages/PayMoney.page.jsx";
import { MyPage } from "../src/pages/My.page.jsx";
import { ChargePage } from "../src/pages/Charge.page.jsx";
import { RentalListPage } from "../src/pages/RentalList.page.jsx";
import { ReviewPage } from "../src/pages/Review.page.jsx";
import { SearchPage } from "../src/pages/Search.page.jsx";
import signRouter from "./sign.router.jsx";
import productRouter from "./product.router.jsx";
import errorRouter from "./error.router.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  ...productRouter,
  ...signRouter,
  ...errorRouter,
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/paymoney",
    element: <PayMoneyPage />,
  },
  {
    path: "/paymoney/charge",
    element: <ChargePage />,
  },
  {
    path: "/rental",
    element: <RentalListPage />,
  },
  {
    path: "/review/:rentalId",
    element: <ReviewPage />,
  },
]);

export { router };

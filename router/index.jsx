import { createBrowserRouter } from "react-router-dom";
import { TestPage } from "../src/pages/Test.page.jsx";
import { HomePage } from "../src/pages/Home.page.jsx";
import { PayMoneyPage } from "../src/pages/PayMoney.page.jsx";
import { MyPage } from "../src/pages/My.page.jsx";
import { ChargePage } from "../src/pages/Charge.page.jsx";
import { RentalListPage } from "../src/pages/RentalList.page.jsx";
import { ReviewPage } from "../src/pages/Review.page.jsx";
import productRouter from "./product.router.jsx";
import signRouter from "./sign.router.jsx";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  ...productRouter,
  ...signRouter,
  {
    path: "/paymoney",
    element: <PayMoneyPage />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
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
    path: "/review/:productId",
    element: <ReviewPage />,
  },
]);

export { router };

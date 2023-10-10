import { createBrowserRouter } from "react-router-dom";
import { TestPage } from "../src/pages/Test.page";
import { HomePage } from "../src/pages/Home.page";
import { PayMoneyPage } from "../src/pages/PayMoney.page";
import { MyPage } from "../src/pages/My.page";
import { ChargePage } from "../src/pages/Charge.page";
import productRouter from "./product.router";
import { RentalListPage } from "../src/pages/RentalList.page";
import { ReviewPage } from "../src/pages/Review.page";
import signRouter from "./sign.router";

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

import { createBrowserRouter } from "react-router-dom";
import { TestPage } from "../src/pages/Test.page";
import { HomePage } from "../src/pages/Home.page";
import { SigninPage } from "../src/pages/Signin.page";
import { SignupPage } from "../src/pages/Signup.page";
import { AccountPage } from "../src/pages/Account.page";
import { SchoolPage } from "../src/pages/School.page";
import { SchoolCardPage } from "../src/pages/SchoolCard.page";
import { PayMoneyPage } from "../src/pages/PayMoney.page";
import { MyPage } from "../src/pages/My.page";
import { ChargePage } from "../src/pages/Charge.page";
import productRouter from "./product.router";
import { RentalListPage } from "../src/pages/RentalList.page";

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
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/signup/name",
    element: <SignupPage />,
  },
  {
    path: "/signup/account",
    element: <AccountPage />,
  },
  {
    path: "/signup/school",
    element: <SchoolPage />,
  },
  {
    path: "/signup/schoolcard",
    element: <SchoolCardPage />,
  },
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
]);

export { router };

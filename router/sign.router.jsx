import { SigninPage } from "../src/pages/Signin.page";
import { SignupPage } from "../src/pages/signup/Signup.page";
import { AccountPage } from "../src/pages/signup/Account.page";
import { SchoolPage } from "../src/pages/signup/School.page";
import { SchoolCardPage } from "../src/pages/signup/SchoolCard.page";

const signRouter = [
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
];

export default signRouter;

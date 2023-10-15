import { SigninPage } from "../src/pages/sign/Signin.page";
import { SignupPage } from "../src/pages/sign/Signup.page";
import { AccountPage } from "../src/pages/sign/Account.page";
import { SchoolPage } from "../src/pages/sign/School.page";
import { SchoolCardPage } from "../src/pages/sign/SchoolCard.page";

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

import { SigninPage } from "../src/pages/sign/Signin.page.jsx";
import { SignupPage } from "../src/pages/sign/Signup.page.jsx";
import { AccountPage } from "../src/pages/sign/Account.page.jsx";
import { SchoolPage } from "../src/pages/sign/School.page.jsx";
import { SchoolCardPage } from "../src/pages/sign/SchoolCard.page.jsx";

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

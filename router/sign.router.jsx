import { SigninPage } from "../src/pages/sign/Signin.page.jsx";
import { SignupPage } from "../src/pages/sign/Signup.page.jsx";
import { AccountPage } from "../src/pages/sign/SignupAccount.page.jsx";
import { SchoolPage } from "../src/pages/sign/SignupSchool.page.jsx";
import { SchoolCardPage } from "../src/pages/sign/SignupSchoolCard.page.jsx";
import { SignOutPage } from "../src/pages/sign/Signout.page.jsx";

const signRouter = [
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/signup",
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
    path: "/signout",
    element: <SignOutPage />,
  },
];

export default signRouter;

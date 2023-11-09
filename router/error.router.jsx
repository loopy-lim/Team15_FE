import { ErrorPage } from "../src/pages/error/Error.page";

const errorRouter = [
  {
    element: <ErrorPage />,
    path: "/error/:id",
  },
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default errorRouter;

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/home.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export { router };

import { ProductDetailPage } from "../src/pages/product/ProductDetail.page";
import { RentPeriodPage } from "../src/pages/product/ProductRent.page";
import { PaymentPage } from "../src/pages/product/Payment.page";

const productRouter = [
  {
    path: "/product/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/rent-period/:id",
    element: <RentPeriodPage />,
  },
  {
    path: "/payment/:id",
    element: <PaymentPage />,
  },
];

export default productRouter;

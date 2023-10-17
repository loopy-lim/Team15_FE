import { ProductDetailPage } from "../src/pages/product/ProductDetail.page";
import { RentPeriodPage } from "../src/pages/product/ProductRent.page";
import { PaymentPage } from "../src/pages/product/Payment.page";
import { ProductCategoryPage } from "../src/pages/product/Category.page";

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
  {
    path: "/product/category/:id",
    element: <ProductCategoryPage />,
  },
];

export default productRouter;

import { userMocks } from "./user.mocks";
import { productMocks } from "./product.mocks";
import { paymentMocks } from "./payment.mocks";
import { categoryMocks } from "./category.mocks";
import { rentalMocks } from "./rental.mocks";

export const handler = [
  ...userMocks,
  ...productMocks,
  ...paymentMocks,
  ...categoryMocks,
  ...rentalMocks,
];

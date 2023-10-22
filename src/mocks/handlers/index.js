import { userMocks } from "./user.mocks.js";
import { productMocks } from "./product.mocks.js";
import { paymentMocks } from "./payment.mocks.js";
import { categoryMocks } from "./category.mocks.js";
import { rentalMocks } from "./rental.mocks.js";
import { reviewMocks } from "./review.mocks.js";

export const handler = [
  ...userMocks,
  ...productMocks,
  ...paymentMocks,
  ...categoryMocks,
  ...rentalMocks,
  ...reviewMocks,
];

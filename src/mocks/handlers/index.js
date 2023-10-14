import { userMocks } from "./user.mocks";
import { productMocks } from "./product.mocks";
import { paymentMocks } from "./payment.mocks";

export const handler = [...userMocks, ...productMocks, ...paymentMocks];

import { userMocks } from "./user.mocks";
import { productMocks } from "./product.mocks";

export const handler = [...userMocks, ...productMocks];

import { rest } from "msw";

const productData = [
  {
    id: 1,
    category: "IT",
    productName: "아이패드1",
    rentalPrice: 40000,
    regularPrice: 12000000,
    review: 4,
    location: "전남대 제 1학생회관",
    productImagePath: "https://placehold.co/400",
  },
  {
    id: 2,
    category: "IT",
    productName: "아이패드2",
    rentalPrice: 40000,
    regularPrice: 12000000,
    review: 4,
    location: "전남대 제 1학생회관",
    productImagePath: "https://placehold.co/400",
  },
  {
    id: 3,
    category: "IT",
    productName: "아이패드3",
    rentalPrice: 40000,
    regularPrice: 12000000,
    review: 4,
    location: "전남대 제 1학생회관",
    productImagePath: "https://placehold.co/400",
  },
];

export const productMocks = [
  rest.get("/product", (req, res, ctx) => {
    return {
      success: true,
      response: productData,
      error: null,
    };
  }),
  rest.get("/product/:id", (req, res, ctx) => {
    const { id } = req.params;
    const product = productData.find((product) => product.id === Number(id));

    return {
      success: true,
      response: product,
      error: null,
    };
  }),
  rest.get("/product/:id/rent", (req, res, ctx) => {
    const { id } = req.params;
    const product = productData.find((product) => product.id === Number(id));

    return {
      success: true,
      response: product,
      error: null,
    };
  }),
  rest.post("/product", (req, res, ctx) => {
    return {
      success: true,
      response: null,
      error: null,
    };
  }),
];

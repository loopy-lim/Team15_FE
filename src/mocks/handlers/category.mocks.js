import { rest } from "msw";
import { productData } from "./product.mocks.js";

export const categoryMocks = [
  rest.get("/category", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: [
          {
            id: 1,
            categoryName: "IT",
          },
          {
            id: 2,
            categoryName: "도서",
          },
          {
            id: 3,
            categoryName: "의류",
          },
          {
            id: 4,
            categoryName: "악기",
          },
        ],
        error: null,
      })
    );
  }),
  rest.get("/category/:id", (req, res, ctx) => {
    const category = [
      {
        id: 1,
        categoryName: "IT",
      },
      {
        id: 2,
        categoryName: "도서",
      },
      {
        id: 3,
        categoryName: "의류",
      },
      {
        id: 4,
        categoryName: "악기",
      },
    ];
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: productData.filter(
          (product) =>
            product.category ===
            category.filter((category) => `${category.id}` === req.params.id)[0]
              .categoryName
        ),
        error: null,
      })
    );
  }),
];
